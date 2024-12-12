import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { PacmanIndicator } from "react-native-indicators";
import { useRouter } from "expo-router";

const SplashScreen = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.replace("/welcome");
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/splash_icon.png")} style={styles.image} />
      <PacmanIndicator color="#4caf50" size={50} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});

export default SplashScreen;
