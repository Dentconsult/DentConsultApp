import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack screenOptions={{headerShown : false}}>
    <Stack.Screen name="index" options={{headerShown : false}}></Stack.Screen>
    <Stack.Screen name="scheduling" options={{headerShown : false}}></Stack.Screen>
    <Stack.Screen name="immediateassistance" options={{headerShown : false}}></Stack.Screen>
    <Stack.Screen name="consultant" options={{headerShown : false}}></Stack.Screen>
    <Stack.Screen name="residentdoctor" options={{headerShown : false}}></Stack.Screen>
  </Stack>);
}
