// app/_layout.tsx
import { initPokemonPrevolutions } from "@/constants/Data/pokemonEvolutions";
import { initSpecies } from "@/constants/Data/pokemonSpecies";
import { initMoves } from "@/constants/Enums/moves";
import * as Font from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [loaded, error] = Font.useFonts({
        PokemonFont: require("@/assets/fonts/Pokemon Classic.ttf"),
    });

    useEffect(() => {
        if (loaded || error) {
            initSpecies();
            initMoves();
            initPokemonPrevolutions();
            SplashScreen.hideAsync();
        }
    }, [loaded, error]);

    if (!loaded) return null;

    return (
        <SafeAreaView style={styles.container} edges={[]}>
            <Stack
                screenOptions={{
                    headerShown: false,
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        fontWeight: '500',
    },
});