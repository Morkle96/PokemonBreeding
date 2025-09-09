// screens/PokemonListScreen.tsx
import { AnimatedSprite } from "@/components/Pokemon/AnimatedSprite";
import { usePokemon } from "@/components/Pokemon/globalPokemon";
import CustomText from "@/components/ui/CustomText";
import { Breed } from "@/constants/Data/Breeding";
import { Gender, GeneratePokemon, Pokemon } from "@/constants/Data/pokemon";
import { HeldItem } from "@/constants/Enums/items";
import { Nature } from "@/constants/Enums/nature";
import { SpeciesId } from "@/constants/Enums/species";
import React from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

const PokemonListScreen = ({ navigation }: any) => {

    const { addPokemon, pokemonList, addItem, addMoney } = usePokemon();

    return (
        <View style={{ flex: 1, padding: 20, paddingTop: 60 }}>

            {pokemonList.length > 0 && (
                <FlatList
                    data={pokemonList}
                    keyExtractor={(pokemon) => pokemon.uid}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: "space-between" }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("PokemonDetails", {
                                    pokemon: item,
                                });
                            }}
                            style={styles.itemContainer}
                        >
                            <View style={{ alignItems: "center" }}>
                                <AnimatedSprite
                                    pokemonId={item.id}
                                    isShiny={item.isShiny}
                                    customScale={1}
                                    play={false}
                                />
                                <CustomText style={styles.nameText}>
                                    {item.pokemonSpecies.getName()}
                                </CustomText>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            )}


            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("Breeding");
                }}
                style={{ left: 40, position: "absolute", bottom: 80, width: "40%", padding: 15, backgroundColor: "#eee", marginBottom: 10 }}
            >
                <CustomText style={{ textAlign: "center" }}>{"Breeding"}</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    const item: Pokemon = GeneratePokemon({ id: SpeciesId.CHARMANDER });
                    addPokemon(item);
                    navigation.navigate("PokemonDetails", {
                        pokemon: item,
                    })
                }}
                style={{ left: 40, position: "absolute", bottom: 10, width: "40%", padding: 15, backgroundColor: "#eee", marginBottom: 10 }}
            >
                <CustomText style={{ textAlign: "center" }}>{"Generate"}</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    addMoney(100);
                    addItem(HeldItem.EVERSTONE, 1);
                    addItem(HeldItem.DESTINY_KNOT, 1);
                    addItem(HeldItem.POWER_ANKLET, 1);
                    addItem(HeldItem.POWER_BAND, 1);
                    addItem(HeldItem.POWER_BELT, 1);
                    addItem(HeldItem.POWER_BRACER, 1);
                    addItem(HeldItem.POWER_LENS, 1);
                    addItem(HeldItem.POWER_WEIGHT, 1);
                }}
                style={{ right: 40, position: "absolute", bottom: 10, width: "40%", padding: 15, backgroundColor: "#eee", marginBottom: 10 }}
            >
                <CustomText style={{ textAlign: "center" }}>{"Add Items"}</CustomText>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    const p1: Pokemon = GeneratePokemon({ id: SpeciesId.CHARIZARD, ivs: [31, 31, 31, 31, 31, 31], gender: Gender.FEMALE, nature: Nature.LAX });
                    const p2: Pokemon = GeneratePokemon({ id: SpeciesId.CHARIZARD, ivs: [31, 31, 31, 31, 31, 31], gender: Gender.MALE, nature: Nature.ADAMANT, heldItem: HeldItem.DESTINY_KNOT });
                    const pc: Pokemon | null = Breed(p1, p2);
                    if (pc) {
                        addPokemon(pc);
                        navigation.navigate("PokemonDetails", {
                            pokemon: pc,
                        })
                    }
                }}
                style={{ right: 40, position: "absolute", bottom: 80, width: "40%", padding: 15, backgroundColor: "#eee", marginBottom: 10 }}
            >
                <CustomText style={{ textAlign: "center" }}>{"Breed"}</CustomText>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        marginBottom: 20,
        maxWidth: 200,
    },
    nameText: {
        textAlign: "center",
        alignSelf: "stretch", // match parent width (same as image container)
        marginTop: 5,
    },
    generateButton: {
        left: 40,
        position: "absolute",
        bottom: 10,
        width: "40%",
        padding: 15,
        backgroundColor: "#eee",
        marginBottom: 10,
    },
    saveButton: {
        right: 40,
        position: "absolute",
        bottom: 10,
        width: "40%",
        padding: 15,
        backgroundColor: "#eee",
        marginBottom: 10,
    },
});

export default PokemonListScreen;
