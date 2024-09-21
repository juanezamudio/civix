import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack 
    initialRouteName="index"
    screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" options={{headerTitle: "CiViX", headerShown: false}} />
      <Stack.Screen name="styles" />
      <Stack.Screen name="+not-found"  />
    </Stack>
  );
}
