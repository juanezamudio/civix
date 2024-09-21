import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function StylesScreen() {
    return (
        <ThemedView>
            <ThemedText type="title">Titles</ThemedText>
            <ThemedText type="default">Titles</ThemedText>
            <ThemedText type="defaultSemiBold">Titles</ThemedText>
            <ThemedText type="subtitle">Titles</ThemedText>
            <ThemedText type="link">Titles</ThemedText>
        </ThemedView>
    )
}