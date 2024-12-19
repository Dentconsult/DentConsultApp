import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import sharedStyles from "../styles";

const ConsultantScreen = () => {
  
const router = useRouter();
  return (
    <View style={sharedStyles.container}>
      <ImageBackground
          source={require("../../assets/images/background_shape.png")}
          style={sharedStyles.imageBackground}>
          <Image style={sharedStyles.onboardImage}
            source={require("../../assets/images/consultant_character.png")}/>
      </ImageBackground>
      <View style={sharedStyles.content}>
        <Text style={sharedStyles.title}>
          Attention Consultants: Unlock Local Opportunities!
        </Text>
            <Text style={sharedStyles.onboardSubtitle}>
              Are You A Consultant? Don’t Miss Opportunities From Nearby Clinics.
        </Text>
      </View>
      {/* Footer with Buttons */}
      <View style={sharedStyles.onboardFooter}>
          <TouchableOpacity
            style={sharedStyles.skipButton}
            onPress={() => router.replace("/login")}>
            <Text style={sharedStyles.skipText}>Skip</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sharedStyles.nextButton}
            onPress={() => router.replace("/welcome/residentdoctor")}>
            <Text style={sharedStyles.buttonText}>Next</Text>
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

export default ConsultantScreen;
