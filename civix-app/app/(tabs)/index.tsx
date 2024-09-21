import ThemedButton from "@/components/ThemedButton";
import { router } from "expo-router";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Welcome, user</Text>
            <ThemedButton title="+ New Chat" type="outline"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})