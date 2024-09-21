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
                title="Login" 
                type="outline"
                style={styles.button}
                onPress={() => {
                    router.push('/(tabs)/')
                }}
            />
            <ThemedButton
                title="Sign Up"
                type="default"
                style={styles.button}
                onPress={() => {

                }}
            />
            </View>
            <View style={styles.cardContainer}>
                <Card
                    title="Resource Finder"
                    body="Ask Civix GPT for real-time information on city resources, like food banks and clinics, or discover upcoming community events in your area."
                    svg="magnifier"
                    style={styles.cardBody}
                />
                <Card
                    title="Civic Events"
                    body="Stay updated on important town halls and build community through events tailored to your interests and location."
                    svg="calendar"
                    style={styles.cardBody}
                />
                <Card
                    title="Report Community Issues"
                    body="Report local problems like potholes, broken streetlights, and more, and track the status of your reports."
                    svg="notebook"
                    style={styles.cardBody}
                />
            </View>
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
        borderRadius: 10,
       
    },
    cardContainer: {
        marginTop: 15,
    },
    cardBody: {
        width: 300
    }
})