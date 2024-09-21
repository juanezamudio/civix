import Logo from "./Logo";
import { StyleSheet } from "react-native";


export default function Header({style}: any) {

    return (
        <Logo width={100} height={60} style={[styles.logo, style]}></Logo>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center'
    }
})