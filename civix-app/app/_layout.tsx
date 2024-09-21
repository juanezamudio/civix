import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name="(tabs)" options={{headerTitle: "CiViX", headerShown: false}} />
      <Stack.Screen name="styles" />
      <Stack.Screen name="+not-found"  />
    </Stack>
  );
}
