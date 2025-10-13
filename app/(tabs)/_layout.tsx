import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

import { SafeAreaView } from 'react-native-safe-area-context';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {

    return (
        <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
            <Tabs
                screenOptions={{

                }}>
                <Tabs.Screen
                    name="index"
                    options={{
                        title: 'Home',
                        headerShown: false,
                        tabBarIcon: ({ color }) => <Ionicons name="home" size={25} color={color} />,
                    }}
                />
                <Tabs.Screen
                    name="orders"
                    options={{
                        title: 'Orders',
                        headerShown: false,
                        tabBarIcon: ({ color }) => <Ionicons name="bag" size={25} color={color} />,
                    }}
                />

                <Tabs.Screen name="history"
                    options={{
                        title: "History",
                        tabBarIcon: ({ color }) => <Ionicons name="calendar" size={25}
                            color={color} />
                    }}

                />

                <Tabs.Screen name='profile'
                    options={{ title: "Profile", tabBarIcon: ({ color }) => <Ionicons name="person" size={25} color={color} /> }}
                />
            </Tabs>
        </SafeAreaView>
    );
}
