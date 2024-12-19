import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import sharedStyles from "../styles";

const SchedulingScreen = () => {
  const router = useRouter();
  return (
    <View style={sharedStyles.container}>
      <ImageBackground
          source={require("../../assets/images/background_shape.png")}
          style={sharedStyles.imageBackground}>
          <Image style={sharedStyles.onboardImage}
            source={require("../../assets/images/dentist_character.png")}/>
      </ImageBackground>
    
      <View style={sharedStyles.content}>
        <Text style={sharedStyles.title}>
          Scheduling Patients? You May Lose Them.
        </Text>
            <Text style={sharedStyles.onboardSubtitle}>
              Don't Miss A Patient Again Due To Consultant Unavailability.
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
            onPress={() => router.replace("/welcome/immediateassistance")}>
            <Text style={sharedStyles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>     
    </View>
  );
};

export default SchedulingScreen;
