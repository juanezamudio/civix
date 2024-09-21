import { accentColor, white } from "@/constants/Colors";
import { type ButtonProps, Pressable, ViewProps, StyleSheet, Text } from "react-native";

export type ThemedButtonProps = ViewProps & {
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
                    type === 'default' ? styles.defaultButtonText : undefined,
                    type === 'outline' ? styles.outlineButtonText : undefined
                    ]}>{title}</Text>
            </Pressable>
        )
}

const styles = StyleSheet.create({
    button: {
        padding: 8,
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