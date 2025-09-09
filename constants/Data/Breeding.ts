import { Gender, Pokemon } from "@/constants/Data/pokemon";
import { GetSpeciesFromID, PokemonSpecies } from "@/constants/Data/pokemonSpecies";
import { AbilityId } from "../Enums/abilities";
import { HeldItem } from "../Enums/items";
import { getRandomNature } from "../Enums/nature";
import { SpeciesId } from "../Enums/species";
import { pokemonPrevolutions } from "./pokemonEvolutions";


export const powerItemMap: Partial<Record<HeldItem, number>> = {
  [HeldItem.POWER_WEIGHT]: 0,   // HP
  [HeldItem.POWER_BRACER]: 1,   // Attack
  [HeldItem.POWER_BELT]: 2,     // Defense
  [HeldItem.POWER_LENS]: 3,     // Special Attack
  [HeldItem.POWER_BAND]: 4,     // Special Defense
  [HeldItem.POWER_ANKLET]: 5,   // Speed
};


const shinyConfig = {
  enabled: true,
  baseOdds: 8192,   // default S
  multiplier: 4,    // default N
  masudaMethod: true,
  crystalMethod: true,
  alwaysBoost: false,
};

// Helpers
function randChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isDitto(p: Pokemon): boolean {
  return p.pokemonSpecies.speciesId === SpeciesId.DITTO;
}

function isGenderless(p: Pokemon): boolean {
  if (isDitto(p)) {
    return true; // Ditto treated as genderless except special case
  }
  return !p.pokemonSpecies.malePercent;
}

function isFemale(p: Pokemon): boolean {
  return p.gender == Gender.FEMALE;
}

function isSameGender(p1: Pokemon, p2: Pokemon): boolean {
  return isFemale(p1) === isFemale(p2);
}

function abilityFromKey(species: PokemonSpecies, key: string | null): AbilityId | null {
  if (key === "a1") return species.ability1;
  if (key === "a2") return species.ability2;
  if (key === "ah") return species.abilityHidden;
  return null;
}

function getShinyOdds(p1: Pokemon, p2: Pokemon): number {
  if (!shinyConfig.enabled) {
    return 1 / shinyConfig.baseOdds;
  }

  let power = 0;

  // Masuda Method
  if (shinyConfig.masudaMethod) {
    power++;
  }

  // Crystal Method
  if (shinyConfig.crystalMethod) {
    if (p1.isShiny) power++;
    if (p2.isShiny) power++;
  }

  // Always Method
  if (shinyConfig.alwaysBoost) {
    power++;
  }

  // Final odds = N^power / S
  const numerator = Math.pow(shinyConfig.multiplier, power);
  return numerator / shinyConfig.baseOdds;
}


function calculateIV(p1: Pokemon, p2: Pokemon): number[] {

  const ivs: number[] = Array.from({ length: 6 }, () => randInt(1, 31));

  // --- Destiny Knot Check ---
  const p1DestinyKnot = p1.heldItem === HeldItem.DESTINY_KNOT;
  const p2DestinyKnot = p2.heldItem === HeldItem.DESTINY_KNOT;
  const hasDestinyKnot = p1DestinyKnot || p2DestinyKnot;


  console.log("Held items:");
  console.log(p1.heldItem);
  console.log(p2.heldItem);


  // --- Power Item Check ---
  const p1PowerStat = powerItemMap[p1.heldItem] ?? null;
  const p2PowerStat = powerItemMap[p2.heldItem] ?? null;

  let guaranteedStat: number | null = null;
  let guaranteedParent: Pokemon | null = null;

  if (p1PowerStat !== null && p2PowerStat !== null) {
    // Both parents have different Power items -> randomly pick one
    if (Math.random() < 0.5) {
      guaranteedStat = p1PowerStat;
      guaranteedParent = p1;
    } else {
      guaranteedStat = p2PowerStat;
      guaranteedParent = p2;
    }
  } else if (p1PowerStat !== null) {
    guaranteedStat = p1PowerStat;
    guaranteedParent = p1;
  } else if (p2PowerStat !== null) {
    guaranteedStat = p2PowerStat;
    guaranteedParent = p2;
  }

  if (guaranteedStat !== null && guaranteedParent !== null) {
    // Apply Power item inheritance
    ivs[guaranteedStat] = guaranteedParent.iv[guaranteedStat];
    console.log(ivs);
  }

  if (hasDestinyKnot) {
  let numInherited = guaranteedStat !== null ? 4 : 5;
  const inheritedStats = getRandomUniqueStats(numInherited, guaranteedStat);

  for (const statIndex of inheritedStats) {
    if (Math.random() < 0.5) {
      ivs[statIndex] = p1.iv[statIndex];
    } else {
      ivs[statIndex] = p2.iv[statIndex];
    }
  }
  } else {
    let numInherited = guaranteedStat !== null ? 2 : 3;
    const inheritedStats = getRandomUniqueStats(numInherited, guaranteedStat);

    for (const statIndex of inheritedStats) {
      if (Math.random() < 0.5) {
        ivs[statIndex] = p1.iv[statIndex];
      } else {
        ivs[statIndex] = p2.iv[statIndex];
      }
    }
  }
  return ivs;
}

function getRandomUniqueStats(count: number, exclude: number | null): number[] {
  const available = [0, 1, 2, 3, 4, 5].filter(i => i !== exclude);
  const chosen: number[] = [];

  while (chosen.length < count) {
    const idx = Math.floor(Math.random() * available.length);
    chosen.push(available[idx]);
    available.splice(idx, 1); // remove so it can’t repeat
  }

  return chosen;
}


export function Breed(p1: Pokemon, p2: Pokemon): Pokemon | null {

  console.log(p1);
  console.log(p2);

  // Genderless rule
  if (isGenderless(p1) && isGenderless(p2)) {
    return null;
  }

  // Same gender rule
  if (isSameGender(p1, p2)) {
    return null;
  }

  // Double Ditto rule
  if (isDitto(p1) && isDitto(p2)) {
    return null;
  }

  // Get preEvolution
  let pre: SpeciesId;
  
  if (isDitto(p1)) {
    pre = p2.pokemonSpecies.speciesId;
  } else if (isDitto(p2)) {
    pre = p1.pokemonSpecies.speciesId;
  } else {
    pre = isFemale(p1) ? p1.pokemonSpecies.speciesId : p2.pokemonSpecies.speciesId;
  }

  while (true) {
    const p = pokemonPrevolutions[pre];
    if (p) {
      pre = p;
    } else {
      break;
    }
  }

  // Get species
  const species: PokemonSpecies = GetSpeciesFromID(pre)!;

  // small variation on height/weight
  const height = species.height * (0.9 + Math.random() * 0.2);
  const weight = species.weight * (0.9 + Math.random() * 0.2);

  // ability: randomly from either parent
  let chosenAbility: string;

// figure out who the "mother" is (non-Ditto female if possible)
const mother = isDitto(p1) ? p2 : isDitto(p2) ? p1 : (isFemale(p1) ? p1 : p2);

// ability count (only count non-null)
const abilityCount =
  (species.ability1 ? 1 : 0) +
  (species.ability2 ? 1 : 0) +
  (species.abilityHidden ? 1 : 0);

if (species.abilityHidden) {
  if (mother.ability === "ah") {
    // Mother already has HA → 60% chance
    chosenAbility = Math.random() < 0.6
      ? "ah"
      : randChoice(
          ["a1", "a2"].filter(
            a => abilityFromKey(species, a) !== null
          )
        );
  } else {
    // Mother has regular ability → slim HA chance
    let haChance = 0;
    if (abilityCount === 3) {
      haChance = 0.1;
    } else if (abilityCount === 2) {
      haChance = 0.2;
    }

    if (Math.random() < haChance) {
      chosenAbility = "ah";
    } else {
      chosenAbility = randChoice(
        [p1.ability, p2.ability].filter(
          a => a !== "ah" && abilityFromKey(species, a) !== null
        )
      );
    }
  }
} else {
  // no HA
  chosenAbility = randChoice([p1.ability, p2.ability]);
}
  

  // ---- Shiny odds ----
  const shinyOdds = getShinyOdds(p1, p2);
  const isShiny = Math.random() < shinyOdds;


  // Calculate IV
  console.log("IV");
  
  console.log(p1.iv)
  console.log(p2.iv)

  var ivs = calculateIV(p1, p2);

   console.log("IV AFTER");
  
  console.log(ivs)

  // Nature
  var nature = getRandomNature();
  if(p1.heldItem == HeldItem.EVERSTONE && p2.heldItem == HeldItem.EVERSTONE){
    (Math.random() < 0.5)? nature = p1.nature : nature = p2.nature;
  }
  else if(p1.heldItem == HeldItem.EVERSTONE){
    nature = p1.nature;
  }
  else if(p2.heldItem == HeldItem.EVERSTONE){
    nature = p2.nature;
  }

  return new Pokemon(
    pre,
    species,
    height,
    weight,
    chosenAbility,
    ivs[0], // hp
    ivs[1], // atk
    ivs[2], // def
    ivs[3], // spatk ✅
    ivs[4], // spdef ✅
    ivs[5], // spd ✅
    isShiny,
    Gender.MALE,
    nature,
    0,
    null,
    null,
  );
}
