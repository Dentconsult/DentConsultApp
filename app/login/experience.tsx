import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const ExperienceDetailsScreen = () => {
  const router = useRouter();
  const [experience, setExperience] = useState({
    yearsOfExperience: "",
    description: "",
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experience Details</Text>

      <TextInput
        placeholder="Years of Experience"
        style={styles.input}
        value={experience.yearsOfExperience}
        onChangeText={(value) =>
          setExperience({ ...experience, yearsOfExperience: value })
        }
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Description"
        style={[styles.input, { height: 100 }]}
        multiline
        value={experience.description}
        onChangeText={(value) =>
          setExperience({ ...experience, description: value })
        }
      />

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push("/login/casedetails")}
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

export default ExperienceDetailsScreen;
