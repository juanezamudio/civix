import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { darkColor } from "@/constants/Colors";
import { screenPadding } from "@/constants/Layout";
import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import Logo from '../components/Logo';
import Header from "@/components/Header";
import Card from "@/components/Card";


export default function Landing() {
    return (
        <View style={styles.container}>
            <Logo width={287} height={183} style={styles.logo}></Logo>
            <ThemedText type='title' style={[styles.title, {color: darkColor}]}>Unlock the potential of civic engagement</ThemedText>
            <View style={styles.buttonContainer}>
            <ThemedButton 
                title="Log In" 
                type="default"
                style={styles.button}
                onPress={() => {
                    router.push('/(tabs)/')
                }}
            />
            <ThemedButton
                title="Sign Up"
                type="outline"
                style={styles.button}
                onPress={() => {

                }}
            />
            </View>
            <Card
                title="Resource Finder"
                body="Test123"
                svg="magnifier"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: screenPadding,
        marginTop: 50
    },
    logo: {
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        lineHeight: 48
    },
    buttonContainer: {
        flexDirection: "row",
        gap: 37
    },
    button: {
        flex: 1,
        borderRadius: 10
    }
})