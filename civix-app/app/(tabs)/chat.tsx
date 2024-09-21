import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { darkColor, white } from "@/constants/Colors";
import { screenPadding } from "@/constants/Layout";
import { router } from "expo-router";
import { useState } from "react";
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Chat() {
    
    const [messageTextField, setMessageTextField] = useState<string>('')
    
    return (
        <View style={styles.container}>

            <ScrollView>
                <ThemedText type="defaultSemiBold">This is the beginning of your conversation...</ThemedText>
            </ScrollView>

            <View style={{flexDirection: 'row'}}>
                <TextInput
                    style={styles.textFieldStyle}
                    placeholder="Type your message here"
                    placeholderTextColor={'#a0a0a0'}
                    value={messageTextField}
                    onChangeText={(text) => setMessageTextField(text)} />
                <ThemedButton title="Send"/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: screenPadding,
        backgroundColor: white
    },
    textFieldStyle: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
        color: darkColor
    }
})