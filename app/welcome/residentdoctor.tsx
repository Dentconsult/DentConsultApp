import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import sharedStyles from "../styles";


const ResidentDoctorScreen = () => {
  const router = useRouter();
  return (
    <View style={sharedStyles.container}>
      <ImageBackground
          source={require("../../assets/images/background_shape.png")}
          style={sharedStyles.imageBackground}>
          <Image style={sharedStyles.onboardImage}
            source={require("../../assets/images/resident_doctor_character.png")}/>
      </ImageBackground>
      <View style={sharedStyles.content}>
        <Text style={sharedStyles.title}>
          Need Resident Doctors? We've Got You Covered!
        </Text>
        <Text style={sharedStyles.onboardSubtitle}>
          Shortage Of Resident Doctors? Don't Worry—Hire Them Here.
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
            onPress={() => router.replace("/login")}>
            <Text style={sharedStyles.buttonText}>Next</Text>
          </TouchableOpacity>
      </View>     
    </View>
  );
};

export default ResidentDoctorScreen;
