import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const SchedulingScreen = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* Background Shape */}
      <Image
        source={require("../../assets/images/background_shape.png")}
        style={styles.backgroundImage}
      />

      {/* Content Section */}
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

      {/* Footer with Buttons */}
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
    width: "100%",
    height: "35%",
    resizeMode: "cover",
    top: 0,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20
  },
  characterImage: {
    width: "70%",
    height: undefined,
    aspectRatio: 1,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 10,
    marginTop:20,
  },
  subtitle: {
    fontSize: 16,
    color: "#777777",
    textAlign: "center",
    marginHorizontal: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 80, // Reduced margin to decrease space between text and buttons
  },
  skipButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  skipText: {
    color: "#777777",
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: "#694EA0",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 25,
  },
  nextText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SchedulingScreen;
