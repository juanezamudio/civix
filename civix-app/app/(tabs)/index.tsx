import Header from "@/components/Header";
import Magnifier from "@/components/Magnifier";
import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { darkColor, lightAccentColor } from "@/constants/Colors";
import { screenPadding } from "@/constants/Layout";
import { router } from "expo-router";
import { ScrollView, StyleSheet, View, Image } from "react-native";

export default function Home() {
    return (
        <View style={styles.container}>
            <Header style={styles.header}></Header>
            <View style={styles.titleContainer}>
            <ThemedText type='title' style={[{color: darkColor}, styles.title]}>Good Morning, Juan</ThemedText>
            <Image style={styles.profilePic} resizeMode='contain' source={require('../../assets/images/profile-pic.png')}/>
            </View>
            <ThemedButton 
                title="Ask Civi" 
                type="default"
                style={styles.button}
                textStyle={styles.button}
                onPress={() => {
                    router.push('/(tabs)/chat')
                }}/>
            <View>
                <View style={styles.headingRow}>
                    <ThemedText style={styles.heading}>Recent</ThemedText>
                    <Magnifier width={25} padding={25}></Magnifier>
                </View>
                <ScrollView horizontal contentContainerStyle={{gap: 15}}>
                    <ThemedButton
                        title="Next Town Hall Meeting"
                        type="outline"
                        style={styles.recentButtons}
                        textStyle={styles.recentButtonsText}
                    />
                    <ThemedButton
                        title="Local Shelters"
                        type="outline"
                        style={styles.recentButtons}
                        textStyle={styles.recentButtonsText}
                    />
                </ScrollView>
            </View>
        </View>
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
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32
    },
    title: {
        flex: 1,
        marginRight: 50,
        fontSize: 42,
        lineHeight: 48
    },
    profilePic: {
        width: 125
    },
    button: {
        borderRadius: 15,
        fontSize: 28,
    },
    headingRow: {
        flexDirection:'row'
    },
    heading: {
        fontSize: 36,
        paddingTop: 40,
        flex: 1
    },
    recentButtons: {
        backgroundColor: 'grey',
        borderRadius: 25,

    },
    recentButtonsText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})