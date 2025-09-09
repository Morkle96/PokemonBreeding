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

/** Return N unique stats in [0..5], excluding any in `excludes`. */
function getRandomUniqueStats(count: number, excludes?: number[] | null): number[] {
  const ex = new Set(excludes ?? []);
  const available = [0, 1, 2, 3, 4, 5].filter(i => !ex.has(i));
  const chosen: number[] = [];

  while (chosen.length < count && available.length > 0) {
    const idx = Math.floor(Math.random() * available.length);
    chosen.push(available[idx]);
    available.splice(idx, 1); // remove so it can’t repeat
  }

  return chosen;
}

/**
 * Calculate child IVs with support for:
 * - Multiple Power items applying simultaneously (e.g., Band + Anklet)
 * - Destiny Knot (5 total inherited stats, including any guaranteed by Power items)
 * - No Destiny Knot (3 total inherited stats, incl. guarantees)
 */
function calculateIV(p1: Pokemon, p2: Pokemon): number[] {
  // Start random baseline (1..31)
  const ivs: number[] = Array.from({ length: 6 }, () => randInt(1, 31));

  // Destiny Knot?
  const p1DestinyKnot = p1.heldItem === HeldItem.DESTINY_KNOT;
  const p2DestinyKnot = p2.heldItem === HeldItem.DESTINY_KNOT;
  const hasDestinyKnot = p1DestinyKnot || p2DestinyKnot;

  // --- Power Items (allow multiple) ---
  const p1PowerStat = powerItemMap[p1.heldItem] ?? null;
  const p2PowerStat = powerItemMap[p2.heldItem] ?? null;

  const guaranteedStats: number[] = [];
  const guaranteedSources: Pokemon[] = [];

  if (p1PowerStat !== null) {
    guaranteedStats.push(p1PowerStat);
    guaranteedSources.push(p1);
  }

  if (p2PowerStat !== null) {
    if (p2PowerStat === p1PowerStat && p1PowerStat !== null) {
      // Same stat on both parents → pick which parent's IV to use for that stat.
      const idx = guaranteedStats.indexOf(p2PowerStat);
      if (idx >= 0) {
        guaranteedSources[idx] = Math.random() < 0.5 ? p1 : p2;
      }
    } else {
      guaranteedStats.push(p2PowerStat);
      guaranteedSources.push(p2);
    }
  }

  // Apply all guaranteed (Power item) stats
  for (let i = 0; i < guaranteedStats.length; i++) {
    const s = guaranteedStats[i];
    const parent = guaranteedSources[i];
    ivs[s] = parent.iv[s];
  }

  // Determine how many total stats are inherited (including guarantees)
  const totalInherited = hasDestinyKnot ? 5 : 3;
  const remainingToInherit = Math.max(0, totalInherited - guaranteedStats.length);

  // Choose the remaining inherited stats, excluding already guaranteed
  const inheritedStats = getRandomUniqueStats(remainingToInherit, guaranteedStats);

  // For each of those, copy from a random parent
  for (const statIndex of inheritedStats) {
    ivs[statIndex] = Math.random() < 0.5 ? p1.iv[statIndex] : p2.iv[statIndex];
  }

  return ivs;
}

export function Breed(p1: Pokemon, p2: Pokemon): Pokemon | null {
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

  // ability: randomly from either parent, with HA handling
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

  // Calculate IVs (supports multi Power items + Destiny Knot logic)
  const ivs = calculateIV(p1, p2);

  // Nature (Everstone logic)
  let nature = getRandomNature();
  if (p1.heldItem == HeldItem.EVERSTONE && p2.heldItem == HeldItem.EVERSTONE) {
    nature = Math.random() < 0.5 ? p1.nature : p2.nature;
  } else if (p1.heldItem == HeldItem.EVERSTONE) {
    nature = p1.nature;
  } else if (p2.heldItem == HeldItem.EVERSTONE) {
    nature = p2.nature;
  }

  // Gender (12.5% female in your example; adjust if you later want species-based rates)
  const finalGender = randInt(1, 16) === 1 ? Gender.FEMALE : Gender.MALE;

  return new Pokemon(
    pre,
    species,
    height,
    weight,
    chosenAbility,
    ivs[0], // hp
    ivs[1], // atk
    ivs[2], // def
    ivs[3], // spatk
    ivs[4], // spdef
    ivs[5], // spd
    isShiny,
    finalGender,
    nature,
    0,
    null,
    null,
  );
}
