import React, { useState } from "react";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import globalStyles from "@/assets/globalStyles";
import LogoLogin from "@/components/LogoLogin";
import { Link } from "expo-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={globalStyles.container}>
      <LogoLogin />

      <TextInput
        style={globalStyles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Link style={globalStyles.links} href="/login">
          <View style={[globalStyles.genericButton, { backgroundColor: '#23AAA5', marginRight: 10 }]}>
            <Text style={globalStyles.genericButtonText}>Log In</Text>
          </View>
        </Link>
        <Link style={globalStyles.links} href="/register">
          <View style={[globalStyles.genericButton, { backgroundColor: '#00434B' }]}>
            <Text style={globalStyles.genericButtonText}>Sign Up</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
