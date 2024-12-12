import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const SchedulingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("./assets/scheduling_screen.png")} style={styles.backgroundImage} />
      <View style={styles.content}>
        <Text style={styles.title}>Scheduling Patients? You May Lose Them.</Text>
        <Text style={styles.subtitle}>
          Don't Miss A Patient Again Due To Consultant Unavailability.
        </Text>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate("Home")}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate("NextScreen")}>
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "#777777",
    textAlign: "center",
    marginBottom: 30,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
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

export default SchedulingScreen;
