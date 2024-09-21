import Message, { MessageProps } from "@/components/Message";
import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { darkColor, white } from "@/constants/Colors";
import { screenPadding } from "@/constants/Layout";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from "react-native";

export default function Chat() {
    
    const [messages, setMessages] = useState<MessageProps[]>([])
    const [messageTextField, setMessageTextField] = useState<string>('')
    const [textFieldDisabled, setTextFieldDisabled] = useState<Boolean>(false)

    const handleSubmitMessage = async () => {
        setMessages([...messages, {
            author: "You",
            message: messageTextField
        }])
        setMessageTextField('')
        setTextFieldDisabled(true)
    }

    useEffect(() => {
        if (messages.length) {
            if (messages[messages.length - 1].author === 'You') {
                setTimeout(() => {
                    console.log('Can send new message')
                    setTextFieldDisabled(false)
                }, 5000)
            }
        }
    }, [messages])
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <ThemedText type="defaultSemiBold" style={{color: darkColor}}>This is the beginning of your conversation...</ThemedText>
            </ScrollView>

            {
                messages.map((message, index) => (
                    <Message
                        key={index}
                        author={message.author}
                        message={message.message}/>
                ))
            }

            <KeyboardAvoidingView
                behavior={ Platform.OS === 'ios' ? 'padding' : 'height' }
                style={{flexDirection: 'row', paddingVertical: screenPadding}}>
                <TextInput
                    style={styles.textFieldStyle}
                    returnKeyType={'send'}
                    placeholder="Type your message here"
                    placeholderTextColor={'#a0a0a0'}
                    readOnly={textFieldDisabled ? true : false}
                    value={messageTextField}
                    onChangeText={(text) => setMessageTextField(text)} />
                <ThemedButton title="Send" onPress={handleSubmitMessage}/>
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
        color: darkColor,
        
    }
})