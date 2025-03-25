import React, { useState } from "react";
import { TextInput, TouchableOpacity, Text, View } from "react-native";
import globalStyles from "@/assets/globalStyles";
import LogoLogin from "@/components/LogoLogin";
import { Link, useRouter } from "expo-router";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

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

      <View style={{ flexDirection: 'row', marginBottom: 150, padding: 10, justifyContent: "space-evenly" }}>
        <TouchableOpacity style={[globalStyles.genericButton, { backgroundColor: '#23AAA5', padding: 10 }]} onPress={handleLogin}>
          <Text style={globalStyles.genericButtonText}>Log In</Text>
        </TouchableOpacity>

        <Link style={globalStyles.links} href="/register">
          <View style={[globalStyles.genericButton, { backgroundColor: '#00434B', padding: 10 }]}>
            <Text style={globalStyles.genericButtonText}>Sign Up</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}
