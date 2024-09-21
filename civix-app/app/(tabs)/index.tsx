import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { screenPadding } from "@/constants/Layout";
import { router } from "expo-router";
import { Button, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <Text>Welcome, user</Text>
            <ThemedButton 
                title="+ New Chat" 
                type="default"
                onPress={() => {
                    router.push('/(tabs)/chat')
                }}/>
            <ThemedText>Recents:</ThemedText>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: screenPadding,
    }
})