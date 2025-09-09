// App.tsx
import { PokemonProvider } from "@/components/Pokemon/globalPokemon";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import React from "react";
import { View } from "react-native";
import BreedingScreen from "./Screens/breeding";
import PokemonListScreen from "./Screens/pokemonList";
import PokemonDetailsScreen from "./Screens/pokemonWindow";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = Font.useFonts({
    PokemonFont: require("@/assets/fonts/Pokemon Classic.ttf"),
  });

  if (!loaded) return null;

  return (
    <PokemonProvider>
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <View style={{ flex: 1 }}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "white", height: "100%" },
            }}
          >
            <Stack.Screen
              name="PokemonList"
              component={PokemonListScreen}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="PokemonDetails"
              component={PokemonDetailsScreen}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="Breeding"
              component={BreedingScreen}
              options={{ animation: "none" }}
            />
          </Stack.Navigator>
        </View>
      </View>
    </PokemonProvider>
  );
}
