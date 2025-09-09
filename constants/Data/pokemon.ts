import { AbilityId } from "../Enums/abilities";
import { HeldItem } from "../Enums/items";
import { AttackMove } from "../Enums/moves";
import { getRandomNature, Nature } from "../Enums/nature";
import { GetSpeciesFromID, PokemonSpecies } from "./pokemonSpecies";

export enum Gender {
    GENDERLESS = -1,
    NONE,
    MALE,
    FEMALE
}

function randomIntFromInterval(min: number, max: number) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateUid(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

function applyAbility(a1: AbilityId | null, a2: AbilityId | null, ah: AbilityId | null): string {
  // 1/10 chance for hidden ability if it exists
  if (ah && randomIntFromInterval(1, 10) === 1) {
    return "ah";
  }

  // If species has both ability1 and ability2 → 50/50
  if (a1 && a2) {
    return randomIntFromInterval(0, 1) === 0 ? "a1" : "a2";
  }

  // Otherwise default to ability1 (some Pokémon only have 1 ability)
  return "a1";
}


export function GeneratePokemon({
  id,
  uid,
  ivs,
  shiny,
  gender = Gender.NONE,
  nature = getRandomNature(),
  friendship = 0,
  move = null,
  heldItem = HeldItem.NONE,
  height,
  weight,
  ability,
}: {
  id: number;
  uid?: string;
  ivs?: number[] | null;
  shiny?: boolean;
  gender?: Gender;
  nature?: Nature;
  friendship?: number;
  move?: AttackMove | null;
  heldItem?: HeldItem | null;
  height?: number;
  weight?: number;
  ability?: string;
}): Pokemon {
  const species = GetSpeciesFromID(id)!;

  // IVs default to random if not provided
  const finalIvs = ivs ?? Array.from({ length: 6 }, () => randomIntFromInterval(1, 31));

  // Ability: use provided or roll one
  const chosenAbility =
    ability ??
    applyAbility(species.ability1, species.ability2, species.abilityHidden);

  // Height/Weight: use provided or species defaults
  const finalHeight = height ?? species.height;
  const finalWeight = weight ?? species.weight;

  // Shiny: use provided or random 1/10 chance
  const finalShiny = shiny ?? (randomIntFromInterval(1, 10) === 1);

  // Gender: random if NONE
  const finalGender =
    gender === Gender.NONE
      ? randomIntFromInterval(1, 16) === 1
        ? Gender.FEMALE
        : Gender.MALE
      : gender;

  return new Pokemon(
    id,
    species,
    finalHeight,
    finalWeight,
    chosenAbility,
    finalIvs[0],
    finalIvs[1],
    finalIvs[2],
    finalIvs[3],
    finalIvs[4],
    finalIvs[5],
    finalShiny,
    finalGender,
    nature,
    friendship,
    move,
    heldItem,
    uid
  );
}


export class Pokemon {
  public uid: string;
  public id: number;
  public pokemonSpecies: PokemonSpecies;
  readonly height: number;
  readonly weight: number;
  readonly ability: string;
  readonly iv: number[];
  readonly isShiny: boolean;
  public gender: Gender;
  public nature: Nature;
  public friendship: number;
  public move: AttackMove | null;
  public heldItem: HeldItem | HeldItem.NONE;

  constructor(
    id: number,
    pokemonSpecies: PokemonSpecies,
    height: number,
    weight: number,
    ability: string,
    ivHp: number,
    ivAtk: number,
    ivDef: number,
    ivSpatk: number,
    ivSpdef: number,
    ivSpd: number,
    isShiny: boolean,
    gender: Gender,
    nature: Nature,
    friendship: number,
    move: AttackMove | null = null,
    heldItem: HeldItem | null = HeldItem.NONE,
    uid?: string
  ) {
    this.uid = uid ?? generateUid();
    this.id = id;
    this.pokemonSpecies = pokemonSpecies;
    this.height = height;
    this.weight = weight;
    this.ability = ability;
    this.iv = [ivHp, ivAtk, ivDef, ivSpatk, ivSpdef, ivSpd];
    this.isShiny = isShiny;
    this.gender = gender;
    this.nature = nature ?? getRandomNature();
    this.friendship = friendship;
    this.move = move ?? null;
    this.heldItem = heldItem ?? HeldItem.NONE;
  }
}
