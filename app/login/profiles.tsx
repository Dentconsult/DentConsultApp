import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const ProfileInformationScreen = () => {
  const router = useRouter();
  const [profile, setProfile] = useState({
    name: "",
    degreeCertificate: "",
    specialization: "",
    email: "",
    contactNumber: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Information</Text>

      {Object.keys(profile).map((key) => (
        <TextInput
          key={key}
          placeholder={key.replace(/([A-Z])/g, " $1")}
          style={styles.input}
          value={profile[key as keyof typeof profile]}
          onChangeText={(value) =>
            setProfile({ ...profile, [key]: value })
          }
        />
      ))}

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push("/login/experience")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },
  continueButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 10,
  },
  continueText: { color: "#FFF", textAlign: "center", fontWeight: "bold" },
});

export default ProfileInformationScreen;
