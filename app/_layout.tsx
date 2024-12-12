import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="welcome" options={{headerShown : false}}></Stack.Screen>
    <Stack.Screen name="+not-found"></Stack.Screen>
  </Stack>);
}
