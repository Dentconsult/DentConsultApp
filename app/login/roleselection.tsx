import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const RoleSelectionScreen = () => {
  const router = useRouter();
  const [roles, setRoles] = useState<string[]>([]);

  const toggleRole = (role: string) => {
    setRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleContinue = () => {
    if (roles.includes("Clinician")) router.push("/login/clinicaldetails");
    else if (roles.includes("Consultant")) router.push("/login/qualifications");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Role</Text>

      {["Clinician", "Consultant", "Cluster Clinics"].map((role) => (
        <TouchableOpacity
          key={role}
          style={[
            styles.roleButton,
            roles.includes(role) && styles.roleSelected,
          ]}
          onPress={() => toggleRole(role)}
        >
          <Text style={styles.roleText}>{role}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#FFF" },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  roleButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    marginBottom: 10,
  },
  roleSelected: { backgroundColor: "#D1E8FF", borderColor: "#3997A2" },
  roleText: { fontSize: 16, color: "#333" },
  continueButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 20,
  },
  continueText: { color: "#FFF", textAlign: "center", fontWeight: "bold" },
});

export default RoleSelectionScreen;
