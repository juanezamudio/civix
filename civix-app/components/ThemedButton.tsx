import { accentColor, white } from "@/constants/Colors";
import { screenPadding, textPadding } from "@/constants/Layout";
import { type ButtonProps, Pressable, ViewProps, StyleSheet, Text, PressableProps } from "react-native";

export type ThemedButtonProps = PressableProps & {
    type?: 'default' | 'outline',
    title?: string
}

export default function ThemedButton({
    type = 'default', 
    style, 
    title,
    ...rest
    }: ThemedButtonProps) {

        return (
            <Pressable style={[
                styles.button,
                type === 'default' ? styles.defaultButton : undefined,
                type === 'outline' ? styles.outlineButton : undefined,
                style
            ]}
            {...rest}>
                <Text style={[
                    styles.text,
                    type === 'default' ? styles.defaultButtonText : undefined,
                    type === 'outline' ? styles.outlineButtonText : undefined
                    ]}>{title}</Text>
            </Pressable>
        )
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        padding: textPadding
    },
    defaultButton: {
        backgroundColor: accentColor,
        borderWidth: 2,
        borderColor: accentColor,
    },
    defaultButtonText: {
        color: white
    },
    outlineButton: {
        borderWidth: 2,
        borderColor: accentColor,
        backgroundColor: '#00000000' 
    },
    outlineButtonText: {
        color: accentColor
    }
})