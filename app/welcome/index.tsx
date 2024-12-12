import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";



const SchedulingScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/background_shape.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Image
          source={require("../../assets/images/dentist_character.png")}
          style={styles.characterImage}
        />
        <Text style={styles.title}>Scheduling Patients? You May Lose Them.</Text>
        <Text style={styles.subtitle}>
          Don't Miss A Patient Again Due To Consultant Unavailability.
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.skipButton}
          onPress={() => router.replace("/welcome")}
        >
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => router.replace("/welcome/immediateassistance")}
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
    width: "120%",
    height: "35%",
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
    width: "80%",
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
    marginBottom: 70,
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
