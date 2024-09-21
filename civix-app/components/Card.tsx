import { accentColor, darkColor, lightAccentColor } from "@/constants/Colors";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import Magnifier from '../components/Magnifier';
import Calendar from '../components/Calendar';
import Notebook from '../components/Notebook';


export default function Card({title, body, svg, landing, style}: any) {

    return (
        <View style={styles.container}>
            {
                svg === 'magnifier' 
                ? (<Magnifier/>)
                : svg === 'calendar'
                ? (<Calendar/>)
                : svg === 'notebook'
                ? (<Notebook/>)
                :<></>
            }
            <View style={[{backgroundColor: landing && 'teal'}, style, styles.textContainer]}>
                <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
                <ThemedText style={[style, styles.body]}>{body}</ThemedText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: 'teal',
        flexDirection: 'row'
    },
    textContainer: {
        flexDirection: 'column'
    },
    title: {
        color: "white"
    },
    body: {
        color: darkColor,
        fontWeight: 'bold'
    }
})