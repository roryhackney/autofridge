import React, { useState } from "react";
import { View, Image, Alert, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import TextInputWithLabel from "../../components/TextInputWithLabel";
import SaveButton from "../../components/SaveButton";
import { getAuth, updateEmail, updatePassword, User } from "firebase/auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import firebaseApp from "../../config/firebaseConfig";

export default function Profile() {
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [imageUri, setImageUri] = useState<string | null>(null);

    const auth = getAuth(firebaseApp);
    const db = getFirestore(firebaseApp);
    const storage = getStorage(firebaseApp);
    const user: User | null = auth.currentUser;

    const pickImage = async (): Promise<void> => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'You need to grant permission to access the gallery.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.canceled && result.assets.length > 0) {
            setImageUri(result.assets[0].uri);
        } else {
            Alert.alert('No image selected');
        }
    };

    const uploadImage = async (): Promise<string | null> => {
        if (!imageUri || !user) return null;

        try {
            const storageRef = ref(storage, `profile_pictures/${user.uid}`);
            const response = await fetch(imageUri);
            const blob = await response.blob();

            const uploadTask = uploadBytesResumable(storageRef, blob);
            return new Promise((resolve, reject) => {
                uploadTask.on("state_changed", null, reject, async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                });
            });
        } catch (error) {
            console.error("Image upload failed:", error);
            return null;
        }
    };

    const handleSaveProfile = async (): Promise<void> => {
        if (!user) {
            Alert.alert("Error", "No user is logged in.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }

        try {
            const userDocRef = doc(db, "users", user.uid);

            if (email && email !== user.email) {
                await updateEmail(user, email);
            }
            if (password) {
                await updatePassword(user, password);
            }

            const imageUrl = imageUri ? await uploadImage() : null;
            await updateDoc(userDocRef, {
                username: username,
                ...(imageUrl && { profileImage: imageUrl }),
            });

            Alert.alert("Success", "Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            Alert.alert("Error", "An error occurred. Please try again.");
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Profile</Text>
                <Image
                    source={imageUri ? { uri: imageUri } : require('../../assets/images/AutoFridge.png')}
                    style={styles.profileImage}
                />
                <TouchableOpacity onPress={pickImage}>
                    <Text style={styles.chooseText}>Choose a Profile Picture</Text>
                </TouchableOpacity>
                <TextInputWithLabel label="Username" value={username} onChangeText={setUsername} />
                <TextInputWithLabel label="Change Email Address" value={email} onChangeText={setEmail} />
                <TextInputWithLabel label="Change Password" value={password} onChangeText={setPassword} secureTextEntry />
                <TextInputWithLabel label="Re-Type Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
                <SaveButton title="Save" onPress={handleSaveProfile} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 80, // Ensures space at bottom
    },
        
    container: {
        flex: 1,
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },

    profileImage: {
        width: 100,
        height: 100,
        borderWidth: 2,
        borderColor: "#ccc",
        marginBottom: 20,
        alignSelf: "center",
    },
    
    chooseText: {
        textDecorationLine: "underline",
        color: "black",
        fontSize: 16,
        marginBottom: 20,
    },
});
