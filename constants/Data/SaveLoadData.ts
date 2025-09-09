import { Gender, Pokemon } from "@/constants/Data/pokemon"; // adjust import path
import { PokemonSpecies } from "@/constants/Data/pokemonSpecies";
import { HeldItem } from "@/constants/Enums/items";
import * as FileSystem from "expo-file-system";
import { AttackMove } from "../Enums/moves";
import { Nature } from "../Enums/nature";

const SAVE_FILE = FileSystem.documentDirectory + "save.json";

// --- Types ---

// Shape of Pokémon data in JSON
interface PokemonJson {
  uid?: string;
  id: number;
  pokemonSpecies: any; // plain object in JSON
  height: number;
  weight: number;
  ability: string;
  iv: number[]; // [Hp, Atk, Def, Spd, SpDef, SpAtk]
  isShiny: boolean;
  gender: Gender;
  nature: Nature;
  friendship: number;
  move: AttackMove | null;
  heldItem?: HeldItem | null;
}

// Inventory save data
export interface Inventory {
  money: number;
  items: { [key in HeldItem]?: number }; // key=HeldItem enum, value=count
}

// Entire save file shape
interface SaveDataJson {
  pokemon: PokemonJson[];
  inventory: Inventory;
}

// --- Helper: rehydrate species ---

function rehydratePokemonSpecies(data: any): PokemonSpecies {
  return Object.assign(
    new PokemonSpecies(
      data.speciesId,
      data.generation,
      data.subLegendary,
      data.legendary,
      data.mythical,
      data.category,
      data.type1,
      data.type2,
      data.height,
      data.weight,
      data.ability1,
      data.ability2,
      data.abilityHidden,
      data.baseTotal,
      data.baseHp,
      data.baseAtk,
      data.baseDef,
      data.baseSpatk,
      data.baseSpdef,
      data.baseSpd,
      data.catchRate,
      data.baseFriendship,
      data.baseExp,
      data.growthRate,
      data.malePercent,
      data.genderDiffs,
      data.canChangeForm,
      ...(data.forms ?? [])
    ),
    data // copy extra fields like name if present
  );
}

// --- Save / Load ---

/**
 * Load entire save file (pokemon + inventory)
 */
export async function loadSaveData(): Promise<{
  pokemon: Pokemon[];
  inventory: Inventory;
}> {
  const fileExists = await FileSystem.getInfoAsync(SAVE_FILE);

  if (!fileExists.exists) {
    console.warn("No save file found. Returning empty data.");
    return {
      pokemon: [],
      inventory: { money: 0, items: {} },
    };
  }

  const jsonData = await FileSystem.readAsStringAsync(SAVE_FILE);
  const saveData: SaveDataJson = JSON.parse(jsonData);

  const pokemon = saveData.pokemon.map((p) => {
    const species = rehydratePokemonSpecies(p.pokemonSpecies);
    return new Pokemon(
      p.id,
      species,
      p.height,
      p.weight,
      p.ability,
      p.iv[0],
      p.iv[1],
      p.iv[2],
      p.iv[3],
      p.iv[4],
      p.iv[5],
      p.isShiny,
      p.gender,
      p.nature,
      p.friendship,
      p.move ?? null,
      p.heldItem ?? HeldItem.NONE,
    );
  });

  return {
    pokemon,
    inventory: saveData.inventory ?? { money: 0, items: {} },
  };
}

/**
 * Save Pokémon + Inventory into one file
 */
export async function saveSaveData(
  pokemonList: Pokemon[],
  inventory: Inventory
): Promise<void> {
  const rawList: PokemonJson[] = pokemonList.map((p) => ({
    uid: p.uid,
    id: p.id,
    pokemonSpecies: { ...p.pokemonSpecies },
    height: p.height,
    weight: p.weight,
    ability: p.ability,
    iv: p.iv,
    isShiny: p.isShiny,
    gender: p.gender,
    nature: p.nature,
    friendship: p.friendship,
    move: p.move,
    heldItem: p.heldItem ?? null,
  }));

  const saveData: SaveDataJson = {
    pokemon: rawList,
    inventory,
  };

  await FileSystem.writeAsStringAsync(
    SAVE_FILE,
    JSON.stringify(saveData, null, 2)
  );
}
