import { AnimatedSprite } from "@/components/Pokemon/AnimatedSprite";
import { usePokemon } from "@/components/Pokemon/globalPokemon";
import { PokemonBackground } from "@/components/Pokemon/PokemonBackground";
import CustomText from "@/components/ui/CustomText";
import { ChartRadarIVs } from "@/components/ui/RadarDiagram";
import { Gender, Pokemon } from "@/constants/Data/pokemon";
import { heldItemsImages, typesImages } from "@/constants/Data/spriteCollection/uiImages";
import { getAbilityName } from "@/constants/Enums/abilities";
import { Color, TypeColor } from "@/constants/Enums/color";
import { HeldItem } from "@/constants/Enums/items";
import { Nature } from "@/constants/Enums/nature";
import { getType } from "@/constants/Enums/type";
import { Canvas, FilterMode, MipmapMode, Image as SkiaImage, useImage } from '@shopify/react-native-skia';
import React, { useState } from "react";
import { Dimensions, FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

interface PokemonDetailsProps {
    route: {
        params: {
            pokemon: Pokemon;
        };
    };
    navigation: any;
}

const PokemonDetailsScreen: React.FC<PokemonDetailsProps> = ({ route, navigation }) => {
    const { pokemon } = route.params;
    const screenWidth = Dimensions.get("window").width;

    const [isSelecting, setIsSelecting] = useState(false);

    const { addPokemon, pokemonList, deletePokemon, inventory } = usePokemon();

    const ivLabels = ["HP", "ATK", "DEF", "SPD", "SP.DEF", "SP.ATK"];

    const tw = 80;
    const type1Image = pokemon.pokemonSpecies.type1
        ? useImage(typesImages[getType(pokemon.pokemonSpecies.type1)]())
        : null;

    const type2Image = pokemon.pokemonSpecies.type2
        ? useImage(typesImages[getType(pokemon.pokemonSpecies.type2)]())
        : null;

    const heldItem = pokemon.heldItem
        ? useImage(heldItemsImages[HeldItem[pokemon.heldItem]])
        : null;

    return (
        <>
            {isSelecting && (
                <View
                    style={{
                        width: "100%",
                        height: "100%",
                        position: "fixed",
                        backgroundColor: "red",
                    }}
                >
                    {inventory && Object.keys(inventory.items).length > 0 && (
                        <FlatList
                            data={Object.entries(inventory.items)} // [[itemKey, count], ...]
                            keyExtractor={([itemKey]) => itemKey}
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: "space-between" }}
                            renderItem={({ item }) => {
                                const [itemKey, count] = item; // itemKey = HeldItem, count = number
                                return (
                                    <TouchableOpacity
                                        onPress={() => { pokemon.heldItem =  }}
                                        style={styles.itemContainer}
                                    >
                                        <View style={{ alignItems: "center" }}>
                                            {/* Replace with your own Item sprite/icon */}
                                            <CustomText style={styles.nameText}>
                                                {itemKey} x{count}
                                            </CustomText>
                                        </View>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                    )}

                </View>
            )}


            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

                <View style={{
                    paddingTop: 100,
                    backgroundColor: "white", width: "100%", padding: 20,
                    borderBottomWidth: 5, borderBottomColor: TypeColor[getType(pokemon.pokemonSpecies.type1) as keyof typeof TypeColor]
                }}>
                    <CustomText
                        style={{
                            fontSize: 25,
                            fontWeight: "bold",
                            marginBottom: 10,
                            alignSelf: "center",
                            color: pokemon.isShiny ? Color.YELLOW : Color.DARK_GREY,
                        }}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                    >
                        {pokemon.isShiny ? (
                            <>
                                <CustomText style={{ color: Color.YELLOW }} >✧˖° </CustomText>
                                {pokemon.pokemonSpecies.getName()}
                                <CustomText style={{ color: Color.YELLOW }} >°˖✧</CustomText>
                            </>
                        ) : (
                            pokemon.pokemonSpecies.getName()
                        )}
                    </CustomText>
                </View>

                {/* Pokémon Sprite */}
                <View style={{ left: 0, top: 0 }}>
                    <PokemonBackground type={pokemon.pokemonSpecies.type1} scaleX={4} scaleY={5} />
                </View>

                <View style={{ alignSelf: "center", marginBottom: 40 }}>
                    <AnimatedSprite pokemonId={pokemon.id} isShiny={pokemon.isShiny} customScale={3} />
                </View>


                {/* POKEMON NAME */}
                <View style={{ top: -30, paddingBottom: 50, backgroundColor: "white", width: "100%", padding: 20, borderTopWidth: 5, borderTopColor: TypeColor[getType(pokemon.pokemonSpecies.type1) as keyof typeof TypeColor] }}>



                    <Canvas style={{ width: type2Image ? tw * 2 + 10 : tw * 2 + 10, height: 80, alignSelf: "center" }}>
                        {type1Image && (
                            <SkiaImage
                                image={type1Image}
                                x={0}
                                y={0}
                                width={tw}
                                height={tw}
                                fit="contain"
                                sampling={{
                                    filter: FilterMode.Nearest,
                                    mipmap: MipmapMode.None,
                                }}
                            />
                        )}
                        {type2Image && (
                            <SkiaImage
                                image={type2Image}
                                x={tw + 10}
                                y={0}
                                width={tw}
                                height={tw}
                                fit="contain"
                                sampling={{
                                    filter: FilterMode.Nearest,
                                    mipmap: MipmapMode.None,
                                }}
                            />
                        )}
                        {heldItem && (
                            <SkiaImage
                                image={heldItem}
                                x={tw + 10}
                                y={0}
                                width={tw}
                                height={tw}
                                fit="contain"
                                sampling={{
                                    filter: FilterMode.Nearest,
                                    mipmap: MipmapMode.None,
                                }}
                            />
                        )}
                    </Canvas>

                    <CustomText style={{ fontSize: 18, marginBottom: 20 }}>
                        Ability: {getAbilityName(pokemon.pokemonSpecies.getAbility(pokemon.ability))}
                    </CustomText>

                    <CustomText>{pokemon.gender}</CustomText>
                    <CustomText>{pokemon.gender == Gender.FEMALE ? "♀" : (pokemon.gender == Gender.MALE ? "♂" : "GENDERLESS")}</CustomText>

                    <CustomText>{pokemon.ability}</CustomText>
                    <CustomText>{pokemon.ability == "ah" ? "HIDDEN" : "REGULAR"}</CustomText>

                    <CustomText>{pokemon.heldItem ? pokemon.heldItem.toString() : "No item"}</CustomText>

                    <CustomText>{Nature[pokemon.nature]}</CustomText>
                </View>


                {/* ADD ITEM */}
                <TouchableOpacity
                    onPress={() => { setIsSelecting(true) }}
                    style={{ width: "100%", flex: 1 }}
                >
                    <View style={{ alignItems: "center", borderWidth: 1, width: 150, height: 50, alignSelf: "center" }}>
                        {/* Replace with your own Item sprite/icon */}
                        <CustomText style={styles.nameText}>
                            Add Item
                        </CustomText>
                    </View>
                </TouchableOpacity>

                {/* RADAR */}
                <ChartRadarIVs pokemon={{ name: pokemon.pokemonSpecies.name, iv: pokemon.iv }} />


                {/* DELETE BUTTON */}
                <View style={{ width: "100%", flex: 1, alignItems: "center" }}>
                    <TouchableOpacity
                        onPress={() => {
                            deletePokemon(pokemon.uid);
                            navigation.goBack();
                        }}
                        style={{ width: 100, marginBottom: 20, paddingBottom: 30, paddingTop: 30 }}
                    >
                        <CustomText style={{ textAlign: "center", color: Color.RED }}>DELETE</CustomText>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        </>
    );
};

export default PokemonDetailsScreen;

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