import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";

const PasswordResetSuccessScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/success.png")} // Update with your image
        style={styles.image}
      />
      <Text style={styles.title}>Your Password Has Been Reset Successfully!</Text>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.actionButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333333",
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PasswordResetSuccessScreen;
