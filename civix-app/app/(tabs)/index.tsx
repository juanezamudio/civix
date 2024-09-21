import Header from "@/components/Header";
import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { darkColor } from "@/constants/Colors";
import { screenPadding } from "@/constants/Layout";
import { router } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <Header style={styles.header}></Header>
            <View style={styles.titleContainer}>
            <ThemedText type='title' style={[{color: darkColor}, styles.title]}>Good Morning, Juan</ThemedText>
            <Image 
            </View>
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
    },
    header: {
        marginTop: 30
    },
    titleContainer: {
    },
    title: {

    }
})