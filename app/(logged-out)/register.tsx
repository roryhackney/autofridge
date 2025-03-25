import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import globalStyles from "@/assets/globalStyles";

export default function register() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
    } else {
      alert("Sign Up Successful!");
    }
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <TextInput
        style={globalStyles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        secureTextEntry
        onChangeText={setConfirmPassword}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Home Address"
        value={address}
        onChangeText={setAddress}
      />

      <TouchableOpacity style={globalStyles.submitButton} onPress={handleSubmit}>
        <Text style={globalStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
