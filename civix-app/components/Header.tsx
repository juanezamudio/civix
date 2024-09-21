import Logo from "./Logo";
import { StyleSheet } from "react-native";


export default function Header() {

    return (
        <Logo width={100} height={60} style={styles.logo}></Logo>
    )
}

const styles = StyleSheet.create({
    logo: {
        alignItems: 'center'
    }
})