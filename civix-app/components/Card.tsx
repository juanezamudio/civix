import { accentColor, lightAccentColor } from "@/constants/Colors";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import Magnifier from '../components/Magnifier';
import Calendar from '../components/Calendar';
import Notebook from '../components/Notebook';


export default function Card({title, body, svg, style}: any) {

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
            <View style={[style, styles.textContainer]}>
                <ThemedText type="subtitle" style={styles.title}>{title}</ThemedText>
                <ThemedText style={styles.body}>{body}</ThemedText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        borderRadius: 15,
        backgroundColor: 'grey',
        flexDirection: 'row'
    },
    textContainer: {
        flexDirection: 'column'
    },
    title: {
        color: accentColor
    },
    body: {
        color: accentColor
    }
})