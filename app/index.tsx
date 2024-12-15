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
    marginTop: "65%",
  },
  logoImage: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28.7,
    fontWeight: "bold",
    fontFamily: "outfitSemiBold",
    color: "#434A5B",
    textAlign: "left",
    marginBottom: 10,
  },
  highlight: {
    color: "#3797A3",
  },
  subtitle: {
    fontSize: 20.5,
    fontFamily: "outfitRegular",
    color: "#767676",
    textAlign: "left",
    lineHeight: 25,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#694EA0",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8.2,
    width: "100%",
    height: 61.5,
    alignItems: "center" ,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18.45,
    fontFamily: "outfitSemiBold",
    alignItems: "center",
    justifyContent: 'center',
    margin: 5,
  },
});

export default WelcomeScreen;
