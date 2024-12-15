import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import sharedStyles from "../styles";


const ImmediateAssistanceScreen = () => {
  const router = useRouter();
  return (
    <View style={sharedStyles.container}>
      <ImageBackground
          source={require("../../assets/images/background_shape.png")}
          style={sharedStyles.imageBackground}>
          <Image style={sharedStyles.onboardImage}
            source={require("../../assets/images/doctor_image.png")}/>
      </ImageBackground>
    
      <View style={sharedStyles.content}>
        <Text style={sharedStyles.title}>
          Immediate Assistance At Your Fingertips!
        </Text>
            <Text style={sharedStyles.onboardSubtitle}>
            Emergency, Broken File, Or Broken Root? Use The SOS Feature To Call A
            Consultant Immediately.
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
            onPress={() => router.replace("/welcome/consultant")}>
            <Text style={sharedStyles.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>     
  </View>
  );
};

export default ImmediateAssistanceScreen;
