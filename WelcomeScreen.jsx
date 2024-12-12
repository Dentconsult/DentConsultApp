import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/background_shape.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("./assets/dent_consult_icon.png")}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>DENT CONSULT</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Welcome To <Text style={styles.highlight}>DentConsult</Text>
        </Text>
        <Text style={styles.subtitle}>
          Where Clinicians Collaborate With Consultants For Better Patient Care.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Scheduling")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "30%",
    resizeMode: "cover",
    top: 0,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: "20%",
  },
  logoImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  logoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 10,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 10,
  },
  highlight: {
    color: "#4caf50",
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
