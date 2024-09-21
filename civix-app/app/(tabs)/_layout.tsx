import { Tabs } from "expo-router";
import Home from '../../components/Home';
import Magnifier from "@/components/Magnifier";
import Calendar from "@/components/Calendar";
import Notebook from "@/components/Notebook";
import { accentColor } from "@/constants/Colors";

export default function TabsLayout() {
    return (
        <Tabs 
            screenOptions={{
                headerShown: false, 
                tabBarStyle: {borderTopColor: 'grey', borderTopWidth: 3, padding: 30}
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: '',
                    tabBarIcon: ({focused, color, size}) => <Home focused={focused}></Home>
                }} />
            <Tabs.Screen
                name="chat"
                options={{
                    title: '',
                    tabBarIcon: ({focused, color, size}) => <Magnifier></Magnifier>,
                }} />
            <Tabs.Screen
                name="events"
                options={{
                    title: '',
                    tabBarIcon: ({focused, color, size}) => <Calendar></Calendar>,
                }} />
            <Tabs.Screen
                name="community_issues"
                options={{
                    title: '',
                    tabBarIcon: ({focused, color, size}) => <Notebook></Notebook>,
                }} />
        </Tabs>
    )
}