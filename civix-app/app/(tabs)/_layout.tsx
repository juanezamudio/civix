import { Tabs } from "expo-router";

export default function TabsLayout() {
    return (
        <Tabs 
            screenOptions={{headerShown: false}}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                }} />
            <Tabs.Screen
                name="chat"
                options={{
                    title: 'CiViX GPT',
                }} />
            <Tabs.Screen
                name="events"
                options={{
                    title: 'Events',
                }} />
            <Tabs.Screen
                name="community_issues"
                options={{
                    title: 'Community Issues',
                }} />
        </Tabs>
    )
}