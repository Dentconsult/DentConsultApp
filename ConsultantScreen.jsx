import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ConsultantScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/background_shape.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Image
          source={require("./assets/consultant_character.png")}
          style={styles.characterImage}
        />
        <Text style={styles.title}>
          Attention Consultants: Unlock Local Opportunities!
        </Text>
        <Text style={styles.subtitle}>
          Are You A Consultant? Don’t Miss Opportunities From Nearby Clinics.
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => navigation.navigate("ResidentDoctorScreen")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate("ResidentDoctorScreen")}
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

export default ConsultantScreen;
