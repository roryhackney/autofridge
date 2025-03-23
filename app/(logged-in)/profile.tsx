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

    // Function to pick image
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission denied', 'You need to grant permission to access the camera roll.');
            return;
        }

        // Launch Image Picker
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

    // Function to upload the profile image to Firebase Storage
    const uploadImage = async () => {
        if (!imageUri) {
            return null;
        }

        const storageRef = ref(storage, `profile_pictures/${user?.uid}`);
        const response = await fetch(imageUri);
        const blob = await response.blob();

        const uploadTask = uploadBytesResumable(storageRef, blob);

        return new Promise<string>((resolve, reject) => {
            uploadTask.on(
                "state_changed",
                null, 
                (error) => {
                    reject(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        resolve(downloadURL);  
                    });
                }
            );
        });
    };

    // Handle saving profile data including image and other fields
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

            // If user updates their email
            if (email !== user?.email) {
                await updateEmail(user, email);
            }

            // If user updates their password
            if (password) {
                await updatePassword(user, password);
            }

            // If the user uploaded a profile image, update it in storage
            if (imageUri) {
                const imageUrl = await uploadImage();
                // Update the Firestore profile data (username and imageUrl)
                await updateDoc(userDocRef, {
                    username: username,
                    profileImage: imageUrl, // Save the image URL to Firestore
                });
            } else {
                // Update only username if no image was selected
                await updateDoc(userDocRef, {
                    username: username,
                });
            }

            Alert.alert("Success", "Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            Alert.alert("Error", "An error occurred. Please try again.");
        }
    };

    // Validation function to check if the form is valid
    const isFormValid = () => {
        const isEmailValid = email !== user?.email; // Check if email is different from the current one
        const arePasswordsMatching = password === confirmPassword; // Check if passwords match
        const areFieldsFilled = username !== "" && email !== "" && password !== "" && confirmPassword !== ""; // Check if fields are filled
        return isEmailValid && arePasswordsMatching && areFieldsFilled;
    };

    return (
        <View style={{ flex: 1 }}>
          

            <View style={{ flex: 1, padding: 20, width: "100%", alignItems: "center" }}>

                {/* Profile Picture */}
                <Text style={{ fontSize: 40, fontWeight: "bold", marginBottom: 20 }}>Profile</Text>
                <Image
                    source={imageUri ? { uri: imageUri } : require('../../assets/images/AutoFridge.png')} // Use autofridge logo if no image is selected
                    style={{ width: 100, height: 100, borderWidth: 2, borderColor: "#ccc", marginBottom: 20 }}
                />
                <TouchableOpacity onPress={pickImage}>
                    <Text style={{ textDecorationLine: 'underline', color: 'black', fontSize: 16 }}>
                        Choose a Profile Picture
                    </Text>
                </TouchableOpacity>

                <View style={{ marginBottom: 20 }} />

                {/* Input Fields */}

                <TextInputWithLabel label="Username" value={username} onChangeText={setUsername} />
                <TextInputWithLabel label="Email" value={email} onChangeText={setEmail} />
                <TextInputWithLabel label="Password" value={password} onChangeText={setPassword}/>
                <TextInputWithLabel label="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword}/>
           
                {/* Save Button */}
                <SaveButton title="Save" onPress={handleSaveProfile} />
            </View>

        </View>
    );
}
