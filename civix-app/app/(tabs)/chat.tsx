import Message, { MessageProps } from "@/components/Message";
import ThemedButton from "@/components/ThemedButton";
import { ThemedText } from "@/components/ThemedText";
import { darkColor, white } from "@/constants/Colors";
import { screenPadding } from "@/constants/Layout";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from "react-native";

export default function Chat() {
    
    const [messages, setMessages] = useState<MessageProps[]>([])
    const [messagesCount, setMessagesCount] = useState<number>(0)
    const [messageTextField, setMessageTextField] = useState<string>('')
    const [textFieldDisabled, setTextFieldDisabled] = useState<Boolean>(false)

    const host = process.env.EXPO_PUBLIC_SERVER_HOST || ''

    const handleSubmitMessage = async () => {
        
        if (messageTextField === '') return

        const userMessage = {
            author: "You",
            message: messageTextField
        }
        
        // setMessages([...messages, userMessage])
        setTextFieldDisabled(true)

        const body = {
            user_text: messageTextField
        }
        
        const response = await fetch(`http://${host}:8000/user_input`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })

        const data = await response.text()
        const formattedData = data.replaceAll('\\"', '"').substring(1, data.length - 2)

        const newMessage = {
            author: 'CiVi',
            message: formattedData
        }

        setMessages([...messages, userMessage,newMessage])

        setMessageTextField('')
        setTextFieldDisabled(false)
    }

    useEffect(() => {
        setMessagesCount(messagesCount + 1)
        console.log(host);
        
    }, [messages])
    
    return (
        <View style={styles.container}>
            <ScrollView>
                <ThemedText type="defaultSemiBold" style={{color: darkColor}}>This is the beginning of your conversation...</ThemedText>

            {
                messages.map((message, index) => (
                    <Message
                    key={index}
                    author={message.author}
                    message={message.message}/>
                    ))
                }

            </ScrollView>

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