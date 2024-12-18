import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";

const QualificationsScreen = () => {
  const router = useRouter();
  const [qualification, setQualification] = useState<string>("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Qualification</Text>

      <Picker
        selectedValue={qualification}
        onValueChange={(itemValue: string) => setQualification(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="BDS" value="BDS" />
        <Picker.Item label="MDS" value="MDS" />
      </Picker>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push("/login/profiles")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  picker: { height: 50, width: "100%", borderWidth: 1 },
  continueButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 10,
  },
  continueText: { color: "#FFF", textAlign: "center", fontWeight: "bold" },
});

export default QualificationsScreen;
