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
            onPress={() => router.replace("/welcome")}>
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

export default ConsultantScreen;
