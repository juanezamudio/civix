import { View } from "react-native";
import { ThemedText } from "./ThemedText";
import { darkColor } from "@/constants/Colors";

export interface MessageProps {
    author: string,
    message: string
}

export default function Message({
    author,
    message
}: MessageProps) {
    return (
        <View>
            <ThemedText type="subtitle" style={{color: darkColor, textAlign: author == 'CiVi' ? 'right' : 'left'}}>{author}</ThemedText>
            <ThemedText style={{color: darkColor}}>{message}</ThemedText>
        </View>
    )
}