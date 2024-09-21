import Message from "@/components/Message";
import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { darkColor, white } from "@/constants/Colors";
import { screenPadding } from "@/constants/Layout";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from "react-native";

export default function Chat() {
    
    const [messageTextField, setMessageTextField] = useState<string>('')
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <ThemedText type="defaultSemiBold" style={{color: darkColor}}>This is the beginning of your conversation...</ThemedText>

            </ScrollView>

            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
                style={{flexDirection: 'row', paddingVertical: screenPadding}}>
                <TextInput
                    style={styles.textFieldStyle}
                    placeholder="Type your message here"
                    placeholderTextColor={'#a0a0a0'}
                    value={messageTextField}
                    onChangeText={(text) => setMessageTextField(text)} />
                <ThemedButton title="Send"/>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: screenPadding,
        paddingTop: 60,
        backgroundColor: white
    },
    textFieldStyle: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: '#f9f9f9',
        color: darkColor
    }
})