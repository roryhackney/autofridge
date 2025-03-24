import React, { useState } from "react";
import { View, Image, Alert, TouchableOpacity, Text } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SaveButton from "../../components/SaveButton";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseApp from "../../config/firebaseConfig";

export default function Profile() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [imageUri, setImageUri] = useState<string | null>(null);

    const auth = getAuth(firebaseApp); 
    const db = getFirestore(firebaseApp); 
    const storage = getStorage(firebaseApp);
    const user = auth.currentUser; 

    const changeUsername = (text) => setUsername(text);
    const changeEmail = (text) => setEmail(text);
    const changePassword = (text) => setPassword(text);
    const changeConfirmPassword = (text) => setConfirmPassword(text);

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission denied', 'You need to grant permission to access the camera roll.');
            return;
        }
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });
        if (!result.canceled && result.assets && result.assets[0].uri) {
            setImageUri(result.assets[0].uri);  
        } else {
            Alert.alert('No image selected');
        }
    };

    const uploadImage = async () => {
        if (!imageUri) return null;
        const storageRef = ref(storage, `profile_pictures/${user?.uid}`);
        const response = await fetch(imageUri);
        const blob = await response.blob();
        const uploadTask = uploadBytesResumable(storageRef, blob);
        return new Promise<string>((resolve, reject) => {
            uploadTask.on("state_changed", null, reject, async () => {
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                resolve(downloadURL);
            });
        });
    };

    const handleSaveProfile = async () => {
        if (!user) {
            Alert.alert("Error", "No user is logged in.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }
        try {
            const userDocRef = doc(db, "users", user?.uid || "");
            if (email !== user?.email) {
                await updateEmail(user, email);
            }
            if (password) {
                await updatePassword(user, password);
            }
            const imageUrl = imageUri ? await uploadImage() : null;
            await updateDoc(userDocRef, {
                username: username,
                ...(imageUrl && { profileImage: imageUrl })
            });
            Alert.alert("Success", "Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            Alert.alert("Error", "An error occurred. Please try again.");
        }
    };

    return (
        <View style={{ flex: 1, padding: 20, alignItems: "center" }}>
            <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>Profile</Text>
            <Image
                source={imageUri ? { uri: imageUri } : require('../../assets/images/AutoFridge.png')}
                style={{ width: 100, height: 100, borderWidth: 2, borderColor: "#ccc", marginBottom: 20 }}
            />
            <TouchableOpacity onPress={pickImage}>
                <Text style={{ textDecorationLine: 'underline', color: 'black', fontSize: 16 }}>
                    Choose a Profile Picture
                </Text>
            </TouchableOpacity>
            <TextInputWithLabel label="Username" value={username} onChangeText={changeUsername} />
            <TextInputWithLabel label="Change Email address" value={email} onChangeText={changeEmail} />
            <TextInputWithLabel label="Change Password" value={password} onChangeText={changePassword} secureTextEntry />
            <TextInputWithLabel label="Re-Type Password" value={confirmPassword} onChangeText={changeConfirmPassword} secureTextEntry />
            <SaveButton title="Save" onPress={handleSaveProfile} />
        </View>
    );
}
