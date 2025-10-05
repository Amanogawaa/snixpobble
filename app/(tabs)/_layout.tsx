import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabsLayout() {
    return (
        <SafeAreaView style={{ flex: 1 }} edges={['top']}>
            <Tabs>
                <Tabs.Screen  name="index" options={{
                    headerShown:false,
                    title: "Home",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
                      ),
                }}/>
                <Tabs.Screen  name="orders" options={{
                    headerShown:false,
                    title: "Orders",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'bag' : 'bag-outline'} color={color} size={24} />
                      ),
                }}/>
                <Tabs.Screen  name="history" options={{
                        headerShown:false,
                        title: "History",
                        tabBarIcon: ({ color, focused }) => (
                            <Ionicons name={focused ? 'time' : 'time-outline'} color={color} size={24} />
                          ),
                    }}/>
                <Tabs.Screen  name="profile" options={{
                    headerShown:false,
                    title: "Profile",
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
                      ),
                }}/>
            </Tabs>
        </SafeAreaView>
    )
}