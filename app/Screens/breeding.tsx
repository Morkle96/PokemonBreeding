// screens/PokemonListScreen.tsx
import { AnimatedSprite } from "@/components/Pokemon/AnimatedSprite";
import { usePokemon } from "@/components/Pokemon/globalPokemon";
import CustomText from "@/components/ui/CustomText";
import { Breed } from "@/constants/Data/Breeding";
import { Pokemon } from "@/constants/Data/pokemon";
import React, { useState } from "react";
import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

const BreedingScreen = ({ navigation }: any) => {

    const [p1, setP1] = useState<Pokemon | null>(null);
    const [p2, setP2] = useState<Pokemon | null>(null);
    const [selected, setSelected] = useState<string | null>(null);

    const { addPokemon, pokemonList } = usePokemon();



    return (
        <>
            {selected != null && (
                <View style={{ width: "100%", height: "100%", position: "fixed", backgroundColor: "red" }}>

                    {pokemonList.length > 0 && (
                        <FlatList
                            data={pokemonList.filter(
                                (pokemon) => pokemon.uid !== p1?.uid && pokemon.uid !== p2?.uid
                            )}
                            keyExtractor={(pokemon) => pokemon.uid}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: "space-between" }}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    onPress={() => {
                                        selected === "p1" ? setP1(item) : setP2(item);
                                        setSelected(null);
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

                </View>
            )}

            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{
                    paddingTop: 100,
                    backgroundColor: "white",
                    width: "100%",
                    padding: 20
                }}>

                    <View style={{ flex: 1, width: "100%", height: 200, backgroundColor: "white", borderRadius: 8, borderWidth: 1 }}>
                        {/* <CustomText style={{ marginTop: 20, width: "100%", textAlign: "center" }}>Breed</CustomText> */}

                        <TouchableOpacity
                            onPress={() => { setSelected("p1") }}
                            style={{ position: "absolute", width: 100, height: 100, backgroundColor: "white", top: 20, left: 50, borderRadius: 8, borderWidth: 1 }}>
                            <View style={{ alignItems: "center" }}>

                                {p1 ? (
                                    <AnimatedSprite
                                        pokemonId={p1?.pokemonSpecies.speciesId}
                                        isShiny={p1?.isShiny}
                                        customScale={1}
                                        play={false}
                                    />
                                ) : (

                                    <CustomText style={{ top: 35 }}>?</CustomText>

                                )}

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => { setSelected("p2") }}
                            style={{ position: "absolute", width: 100, height: 100, backgroundColor: "white", top: 20, right: 50, borderRadius: 8, borderWidth: 1 }}>
                            <View style={{ alignItems: "center" }}>

                                {p2 ? (
                                    <AnimatedSprite
                                        pokemonId={p2?.pokemonSpecies.speciesId}
                                        isShiny={p2?.isShiny}
                                        customScale={1}
                                        play={false}
                                    />
                                ) : (

                                    <CustomText style={{ top: 35 }}>?</CustomText>

                                )}

                            </View>
                        </TouchableOpacity>


                        {/* BREED BUTTON */}

                        <TouchableOpacity
                            onPress={() => {
                                var pc: Pokemon | null = null;
                                (p1 && p2) ? pc = Breed(p1, p2) : console.log("NOPE")
                                if (pc) {
                                    addPokemon(pc);
                                    navigation.navigate("PokemonDetails", {
                                        pokemon: pc,
                                    })
                                }
                            }}
                            style={{ position: "absolute", width: 253, height: 50, backgroundColor: "white", bottom: 20, right: 50, borderRadius: 8, borderWidth: 1 }}>
                            <View style={{ alignItems: "center" }}>

                                <CustomText style={{ top: 15 }}>Breed</CustomText>

                            </View>
                        </TouchableOpacity>

                    </View>

                </View>
            </ScrollView>
        </>
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

export default BreedingScreen;
