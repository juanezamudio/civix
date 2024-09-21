import { lightAccentColor } from "@/constants/Colors";
import { View, StyleSheet } from "react-native";
import { ThemedText } from "./ThemedText";
import Magnifier from '../components/Magnifier';
import Calendar from '../components/Calendar';
import Notebook from '../components/Notebook';


export default function Card({title, body, svg}: any) {

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
            <ThemedText type="subtitle">{title}</ThemedText>
            <ThemedText >{body}</ThemedText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 25,
        borderRadius: 15,
        backgroundColor: lightAccentColor
    }
})