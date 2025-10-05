import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";

export default function RootLayout(){
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <Stack>
                <Stack.Screen name="(tabs)" options={{
                    headerShown: false
                }}/>
            </Stack>
        </SafeAreaProvider>
    )
}