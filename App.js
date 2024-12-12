import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import WelcomeScreen from "./WelcomeScreen";
import SchedulingScreen from "./SchedulingScreen";
import ImmediateAssistanceScreen from "./ImmediateAssistanceScreen";
import ConsultantScreen from "./ConsultantScreen";
import HomeScreen from "./HomeScreen";
import ResidentDoctorScreen from "./ResidentDoctorScreen";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Scheduling" component={SchedulingScreen} />
        <Stack.Screen name="ImmediateAssistance" component={ImmediateAssistanceScreen} />
        <Stack.Screen name="ConsultantScreen" component={ConsultantScreen} />
        <Stack.Screen name="ResidentDoctorScreen" component={ResidentDoctorScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
