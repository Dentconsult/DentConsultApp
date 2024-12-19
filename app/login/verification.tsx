import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const VerificationScreen = () => {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verification</Text>
      <Text style={styles.subtitle}>
        We've Sent You The Verification Code On +4477******77
      </Text>

      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.otpInput}
          maxLength={1}
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => router.push("/login/newpassword")}
      >
        <Text style={styles.actionButtonText}>Verify</Text>
      </TouchableOpacity>

      <Text style={styles.resendText}>
        Re-Send Code In <Text style={styles.timer}>0:20</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3997A2",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
    textAlign: "left",
    marginBottom: 20,
    marginTop:10,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginBottom: 20,
    marginTop:40,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    width: 60,
    height: 60,
    textAlign: "center",
    fontSize: 18,
    backgroundColor: "#f9f9f9",
  },
  actionButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
    marginTop: 60,
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  resendText: {
    fontSize: 14,
    color: "#777777",
    marginTop: 20,
  },
  timer: {
    color: "#3997A2",
  },
});

export default VerificationScreen;
