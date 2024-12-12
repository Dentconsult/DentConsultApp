import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ResidentDoctorScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/background_shape.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Image
          source={require("./assets/resident_doctor_character.png")}
          style={styles.characterImage}
        />
        <Text style={styles.title}>Need Resident Doctors? We've Got You Covered!</Text>
        <Text style={styles.subtitle}>
          Shortage Of Resident Doctors? Don't Worry—Hire Them Here.
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text style={styles.nextText}>Next</Text>
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
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  characterImage: {
    width: "70%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  skipButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  skipText: {
    color: "#777777",
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: "#6200EE",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
  },
  nextText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default ResidentDoctorScreen;
