import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const ImmediateAssistanceScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/background_shape.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.content}>
        <Image
          source={require("./assets/doctor_image.png")}
          style={styles.doctorImage}
        />
        <Text style={styles.title}>Immediate Assistance At Your Fingertips!</Text>
        <Text style={styles.subtitle}>
          Emergency, Broken File, Or Broken Root? Use The SOS Feature To Call A
          Consultant Immediately.
        </Text>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.skipButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextButton}
            onPress={() => navigation.navigate("ConsultantScreen")}
>
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
    height: "30%",
    resizeMode: "cover",
    top: 0,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  doctorImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 20,
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
    paddingHorizontal: 20,
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

export default ImmediateAssistanceScreen;
