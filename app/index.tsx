import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useFonts } from "expo-font";

const WelcomeScreen = () => {
  const router = useRouter(); // Correctly place useRouter inside the component

  const [fontsLoaded] = useFonts({
    "outfitRegular": require('../assets/fonts/Outfit-Regular.ttf'),
    "outfitSemiBold": require('../assets/fonts/Outfit-SemiBold.ttf')
  });


  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/background_shape.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/splash_icon.png")}
          style={styles.logoImage}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Welcome To <Text style={styles.highlight}>Dent Consult</Text>
        </Text>
        <Text style={styles.subtitle}>
          Where Clinicians Collaborate With Consultants For Better Patient Care.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/welcome")} // Ensure "/welcome" route exists
        >
          <Text style={styles.buttonText}>Get Started</Text>
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
    height: "38%",
    resizeMode: "cover",
    top: 0,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: "70%",
  },
  logoImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    marginBottom:20,
  },
  title: {
    fontSize: 22.7,
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
    fontSize: 17.5,
    fontFamily: "outfitRegular",
    color: "#767676",
    textAlign: "left",
    lineHeight: 25,
    marginBottom:10,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#694EA0",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8.2,
    width: "100%",
    height: 55.5,
    alignItems: "center" ,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16.45,
    fontFamily: "outfitSemiBold",
    alignItems: "center",
    justifyContent: 'center',
    margin: 5,
  },
});

export default WelcomeScreen;
