import Card from "@/components/Card";
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
            <ThemedText type='title' style={[{color: darkColor}, styles.title]}>Good Afternoon, Juan</ThemedText>
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
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <View style={styles.headingRow}>
                    <ThemedText style={styles.heading}>Recent</ThemedText>
                    <Magnifier width={25} padding={25}></Magnifier>
                </View>
                <ScrollView 
                    horizontal 
                    contentContainerStyle={{gap: 15}} 
                    showsHorizontalScrollIndicator={false}>
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
                    <ThemedButton
                        title="Voting Locations"
                        type="outline"
                        style={styles.recentButtons}
                        textStyle={styles.recentButtonsText}
                    />
                </ScrollView>
                <View style={styles.cardRow}>
                    <ThemedText style={styles.heading}>Get Involved</ThemedText>
                    <ScrollView
                        horizontal
                        contentContainerStyle={{gap: 15}}
                        showsHorizontalScrollIndicator={false}>
                        <Card
                            title="Camillus House"
                            body="Camillus House serves the hungry, the homeless, and the forgotten of Miami-Dade County. We provide them with material help to create a better future."
                            style={styles.card}>
                        </Card>
                        <Card
                            title="Miami Soup Kitchen"
                            body="Safe Heaven is a women’s shelter that looks for volunteers that want to improve... "
                            style={styles.card}>
                        </Card>
                    </ScrollView>
                </View>
                <View>
                    <ThemedText style={styles.heading}>Trending Prompts</ThemedText>
                    <ScrollView 
                    horizontal 
                    contentContainerStyle={{gap: 15}} 
                    showsHorizontalScrollIndicator={false}>
                    <View style={styles.trendingRows}>
                    <View style={styles.row}>
                        <ThemedButton
                            title="Potholes in Aventura"
                            type="outline"
                            style={styles.recentButtons}
                            textStyle={styles.recentButtonsText}
                        />
                        <ThemedButton
                            title="Sustainability Projects"
                            type="outline"
                            style={styles.recentButtons}
                            textStyle={styles.recentButtonsText}
                        />
                        <ThemedButton
                            title="Local Parks"
                            type="outline"
                            style={styles.recentButtons}
                            textStyle={styles.recentButtonsText}
                        />
                        <ThemedButton
                            title="Police Departments"
                            type="outline"
                            style={styles.recentButtons}
                            textStyle={styles.recentButtonsText}
                        />
                    </View>
                    <View style={styles.row}>
                        <ThemedButton
                            title="School Districts"
                            type="outline"
                            style={styles.recentButtons}
                            textStyle={styles.recentButtonsText}
                        />
                        <ThemedButton
                            title="Food Drives"
                            type="outline"
                            style={styles.recentButtons}
                            textStyle={styles.recentButtonsText}
                        />
                        <ThemedButton
                            title="Community Health Clinics"
                            type="outline"
                            style={styles.recentButtons}
                            textStyle={styles.recentButtonsText}
                        />
                        <ThemedButton
                            title="Legal Services"
                            type="outline"
                            style={styles.recentButtons}
                            textStyle={styles.recentButtonsText}
                        />
                    </View>
                    </View>
                </ScrollView>
                </View>
            </ScrollView>
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
        fontWeight: 'bold',
        color: darkColor
    },
    cardRow: {
        flexDirection: 'column'
    },
    card: {
        maxWidth: 237,
        height: 271,
        padding: 15
    },
    trendingRows: {
        gap: 15
    },
    row: {
        flexDirection: 'row',
        gap: 15
    }
})