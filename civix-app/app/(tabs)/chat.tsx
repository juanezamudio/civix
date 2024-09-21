import { router } from "expo-router";
import { useState } from "react";
import { Button, Pressable, Text, TextInput, View } from "react-native";

export default function Chat() {
    
    const [messageTextField, setMessageTextField] = useState<string>('')
    
    return (
        <View>
            {
                router.canGoBack() && <Button title="Back" onPress={() => router.back()}/>
            }
            <TextInput
                placeholder="Type your message here"
                value={messageTextField}
                onChangeText={(text) => setMessageTextField(text)} />
            <Pressable>
                <Text>Send</Text>
            </Pressable>
        </View>
    )
}