import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function NotFound() {
    return (
        <View style={styles.container}>
            <Text>Your page could not be found.</Text>
            <Button title="Go to tabs" onPress={() => {
                router.replace('/(tabs)/chat')
            }}/>
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