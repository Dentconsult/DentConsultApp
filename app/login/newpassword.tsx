import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const ResetPasswordScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter New Password</Text>
      <Text style={styles.subtitle}>
        Please Enter Your New Password To Reset It
      </Text>

      <View style={styles.inputWrapper}>
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/lock-2.png" }}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Your Password"
          placeholderTextColor="#777777"
          secureTextEntry
        />
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/visible.png" }}
          style={styles.endIcon}
        />
      </View>

      <View style={styles.inputWrapper}>
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/lock-2.png" }}
          style={styles.inputIcon}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#777777"
          secureTextEntry
        />
        <Image
          source={{ uri: "https://img.icons8.com/ios-filled/50/3997A2/visible.png" }}
          style={styles.endIcon}
        />
      </View>

      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => router.push("/login/passwordsuccess")}
      >
        <Text style={styles.actionButtonText}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    justifyContent: "center",
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
    marginBottom: 20,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#dddddd",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    height: 55, // Adjusted height to match the design
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333333",
    paddingLeft: 10,
  },
  inputIcon: {
    width: 24, // Adjusted size to match design
    height: 24,
  },
  endIcon: {
    width: 24, // Adjusted size to match design
    height: 24,
    marginLeft: 10,
  },
  actionButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ResetPasswordScreen;
