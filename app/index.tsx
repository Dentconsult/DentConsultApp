import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
import Button from './common/button';
import sharedStyles, {COLORS} from "./styles";
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const WelcomeScreen = () => {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    OutfitRegular: require('../assets/fonts/Outfit-Regular.ttf'), 
    OutfitSemiBold: require('../assets/fonts/Outfit-SemiBold.ttf'), 
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={sharedStyles.container}>
      <ImageBackground
        source={require("../assets/images/background_shape.png")}
        style={sharedStyles.imageBackground}>
       <Image
          source={require("../assets/images/splash_icon.png")}
          style={styles.logo}/>
      </ImageBackground>
        <View style={sharedStyles.content}>
          <Text style={sharedStyles.title}>
            Welcome To <Text style={styles.highlight}>Dent Consult</Text>
          </Text>
          <Text style={sharedStyles.subtitle}>
            Where Clinicians Collaborate With Consultants For Better Patient Care.
          </Text>
        </View>
        <Button title="Get Started" onPress={() => router.replace('/welcome')} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginHorizontal: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: 201.42,
    height: 201.42,
    top: 200,
  },
  highlight: {
    color: "#3797A3",
  },
});

export default WelcomeScreen;
