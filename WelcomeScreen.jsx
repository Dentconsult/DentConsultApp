import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/welcome_screen.png")} style={styles.backgroundImage} />
      <View style={styles.content}>
        <Image source={require("./assets/splash.png")} style={styles.logo} />
        <Text style={styles.title}>Welcome To <Text style={styles.highlight}>DentConsult</Text></Text>
        <Text style={styles.subtitle}>Where Clinicians Collaborate With Consultants For Better Patient Care.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Scheduling")}>
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
    height: "100%",
    resizeMode: "cover",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
  },
  highlight: {
    color: "#4caf50",
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    marginVertical: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
