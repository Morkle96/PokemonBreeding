import { Moves } from "../Enums/moves";
import { SpeciesId } from "../Enums/species";
import { SpeciesFormKey } from "../Enums/species-form-key";
import { Type } from "../Enums/type";
import { Gender, Pokemon } from "./pokemon";
import { getTimeOfDay, TimeOfDay } from "./time";

export enum SpeciesWildEvolutionDelay {
  NONE,
  SHORT,
  MEDIUM,
  LONG,
  VERY_LONG,
  NEVER
}

export enum EvolutionItem {
  NONE,

  LINKING_CORD,
  SUN_STONE,
  MOON_STONE,
  LEAF_STONE,
  FIRE_STONE,
  WATER_STONE,
  THUNDER_STONE,
  ICE_STONE,
  DUSK_STONE,
  DAWN_STONE,
  SHINY_STONE,
  CRACKED_POT,
  SWEET_APPLE,
  TART_APPLE,
  STRAWBERRY_SWEET,
  UNREMARKABLE_TEACUP,
  UPGRADE,
  DUBIOUS_DISC,
  DRAGON_SCALE,
  PRISM_SCALE,
  RAZOR_CLAW,
  RAZOR_FANG,
  REAPER_CLOTH,
  ELECTIRIZER,
  MAGMARIZER,
  PROTECTOR,
  SACHET,
  WHIPPED_DREAM,
  SYRUPY_APPLE,
  CHIPPED_POT,
  GALARICA_CUFF,
  GALARICA_WREATH,
  AUSPICIOUS_ARMOR,
  MALICIOUS_ARMOR,
  MASTERPIECE_TEACUP,
  SUN_FLUTE,
  MOON_FLUTE,

  BLACK_AUGURITE = 51,
  PEAT_BLOCK,
  METAL_ALLOY,
  SCROLL_OF_DARKNESS,
  SCROLL_OF_WATERS,
  LEADERS_CREST
}

/**
 * Pokemon Evolution tuple type consisting of:
 * @property 0 {@linkcode Species} The species of the Pokemon.
 * @property 1 {@linkcode number} The level at which the Pokemon evolves.
 */
export type EvolutionLevel = [species: SpeciesId, level: number];

export type EvolutionConditionPredicate = (p: Pokemon) => boolean;
export type EvolutionConditionEnforceFunc = (p: Pokemon) => void;

export class SpeciesFormEvolution {
  public speciesId: SpeciesId;
  public preFormKey: string | null;
  public evoFormKey: string | null;
  public level: number;
  public item: EvolutionItem | null;
  public condition: SpeciesEvolutionCondition | null;
  public wildDelay: SpeciesWildEvolutionDelay;

  constructor(speciesId: SpeciesId, preFormKey: string | null, evoFormKey: string | null, level: number, item: EvolutionItem | null, condition: SpeciesEvolutionCondition | null, wildDelay?: SpeciesWildEvolutionDelay) {
    this.speciesId = speciesId;
    this.preFormKey = preFormKey;
    this.evoFormKey = evoFormKey;
    this.level = level;
    this.item = item || EvolutionItem.NONE;
    this.condition = condition;
    this.wildDelay = wildDelay ?? SpeciesWildEvolutionDelay.NONE;
  }
}

export class SpeciesEvolution extends SpeciesFormEvolution {
  constructor(speciesId: SpeciesId, level: number, item: EvolutionItem | null, condition: SpeciesEvolutionCondition | null, wildDelay?: SpeciesWildEvolutionDelay) {
    super(speciesId, null, null, level, item, condition, wildDelay);
  }
}

export class FusionSpeciesFormEvolution extends SpeciesFormEvolution {
  public primarySpeciesId: SpeciesId;

  constructor(primarySpeciesId: SpeciesId, evolution: SpeciesFormEvolution) {
    super(evolution.speciesId, evolution.preFormKey, evolution.evoFormKey, evolution.level, evolution.item, evolution.condition, evolution.wildDelay);

    this.primarySpeciesId = primarySpeciesId;
  }
}

export class SpeciesEvolutionCondition {
  public predicate: EvolutionConditionPredicate;
  public enforceFunc: EvolutionConditionEnforceFunc | undefined;

  constructor(predicate: EvolutionConditionPredicate, enforceFunc?: EvolutionConditionEnforceFunc) {
    this.predicate = predicate;
    this.enforceFunc = enforceFunc;
  }
}

export class SpeciesFriendshipEvolutionCondition extends SpeciesEvolutionCondition {
  constructor(friendshipAmount: number, predicate?: EvolutionConditionPredicate, enforceFunc?: EvolutionConditionEnforceFunc) {
    super(p => p.friendship >= friendshipAmount && (!predicate || predicate(p)), enforceFunc);
  }
}

interface PokemonEvolutions {
  [key: string]: SpeciesFormEvolution[]
}

export const pokemonEvolutions: PokemonEvolutions = {
  [SpeciesId.BULBASAUR]: [
    new SpeciesEvolution(SpeciesId.IVYSAUR, 16, null, null)
  ],
  [SpeciesId.IVYSAUR]: [
    new SpeciesEvolution(SpeciesId.VENUSAUR, 32, null, null)
  ],
  [SpeciesId.CHARMANDER]: [
    new SpeciesEvolution(SpeciesId.CHARMELEON, 16, null, null)
  ],
  [SpeciesId.CHARMELEON]: [
    new SpeciesEvolution(SpeciesId.CHARIZARD, 36, null, null)
  ],
  [SpeciesId.SQUIRTLE]: [
    new SpeciesEvolution(SpeciesId.WARTORTLE, 16, null, null)
  ],
  [SpeciesId.WARTORTLE]: [
    new SpeciesEvolution(SpeciesId.BLASTOISE, 36, null, null)
  ],
  [SpeciesId.CATERPIE]: [
    new SpeciesEvolution(SpeciesId.METAPOD, 7, null, null)
  ],
  [SpeciesId.METAPOD]: [
    new SpeciesEvolution(SpeciesId.BUTTERFREE, 10, null, null)
  ],
  [SpeciesId.WEEDLE]: [
    new SpeciesEvolution(SpeciesId.KAKUNA, 7, null, null)
  ],
  [SpeciesId.KAKUNA]: [
    new SpeciesEvolution(SpeciesId.BEEDRILL, 10, null, null)
  ],
  [SpeciesId.PIDGEY]: [
    new SpeciesEvolution(SpeciesId.PIDGEOTTO, 18, null, null)
  ],
  [SpeciesId.PIDGEOTTO]: [
    new SpeciesEvolution(SpeciesId.PIDGEOT, 36, null, null)
  ],
  [SpeciesId.RATTATA]: [
    new SpeciesEvolution(SpeciesId.RATICATE, 20, null, null)
  ],
  [SpeciesId.SPEAROW]: [
    new SpeciesEvolution(SpeciesId.FEAROW, 20, null, null)
  ],
  [SpeciesId.EKANS]: [
    new SpeciesEvolution(SpeciesId.ARBOK, 22, null, null)
  ],
  [SpeciesId.SANDSHREW]: [
    new SpeciesEvolution(SpeciesId.SANDSLASH, 22, null, null)
  ],
  [SpeciesId.NIDORAN_F]: [
    new SpeciesEvolution(SpeciesId.NIDORINA, 16, null, null)
  ],
  [SpeciesId.NIDORAN_M]: [
    new SpeciesEvolution(SpeciesId.NIDORINO, 16, null, null)
  ],
  [SpeciesId.ZUBAT]: [
    new SpeciesEvolution(SpeciesId.GOLBAT, 22, null, null)
  ],
  [SpeciesId.ODDISH]: [
    new SpeciesEvolution(SpeciesId.GLOOM, 21, null, null)
  ],
  [SpeciesId.PARAS]: [
    new SpeciesEvolution(SpeciesId.PARASECT, 24, null, null)
  ],
  [SpeciesId.VENONAT]: [
    new SpeciesEvolution(SpeciesId.VENOMOTH, 31, null, null)
  ],
  [SpeciesId.DIGLETT]: [
    new SpeciesEvolution(SpeciesId.DUGTRIO, 26, null, null)
  ],
  [SpeciesId.MEOWTH]: [
    new SpeciesFormEvolution(SpeciesId.PERSIAN, "", "", 28, null, null)
  ],
  [SpeciesId.PSYDUCK]: [
    new SpeciesEvolution(SpeciesId.GOLDUCK, 33, null, null)
  ],
  [SpeciesId.MANKEY]: [
    new SpeciesEvolution(SpeciesId.PRIMEAPE, 28, null, null)
  ],
  [SpeciesId.POLIWAG]: [
    new SpeciesEvolution(SpeciesId.POLIWHIRL, 25, null, null)
  ],
  [SpeciesId.ABRA]: [
    new SpeciesEvolution(SpeciesId.KADABRA, 16, null, null)
  ],
  [SpeciesId.MACHOP]: [
    new SpeciesEvolution(SpeciesId.MACHOKE, 28, null, null)
  ],
  [SpeciesId.BELLSPROUT]: [
    new SpeciesEvolution(SpeciesId.WEEPINBELL, 21, null, null)
  ],
  [SpeciesId.TENTACOOL]: [
    new SpeciesEvolution(SpeciesId.TENTACRUEL, 30, null, null)
  ],
  [SpeciesId.GEODUDE]: [
    new SpeciesEvolution(SpeciesId.GRAVELER, 25, null, null)
  ],
  [SpeciesId.PONYTA]: [
    new SpeciesEvolution(SpeciesId.RAPIDASH, 40, null, null)
  ],
  [SpeciesId.SLOWPOKE]: [
    new SpeciesEvolution(SpeciesId.SLOWBRO, 37, null, null),
    new SpeciesEvolution(SpeciesId.SLOWKING, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.MAGNEMITE]: [
    new SpeciesEvolution(SpeciesId.MAGNETON, 30, null, null)
  ],
  [SpeciesId.DODUO]: [
    new SpeciesEvolution(SpeciesId.DODRIO, 31, null, null)
  ],
  [SpeciesId.SEEL]: [
    new SpeciesEvolution(SpeciesId.DEWGONG, 34, null, null)
  ],
  [SpeciesId.GRIMER]: [
    new SpeciesEvolution(SpeciesId.MUK, 38, null, null)
  ],
  [SpeciesId.GASTLY]: [
    new SpeciesEvolution(SpeciesId.HAUNTER, 25, null, null)
  ],
  [SpeciesId.DROWZEE]: [
    new SpeciesEvolution(SpeciesId.HYPNO, 26, null, null)
  ],
  [SpeciesId.KRABBY]: [
    new SpeciesEvolution(SpeciesId.KINGLER, 28, null, null)
  ],
  [SpeciesId.VOLTORB]: [
    new SpeciesEvolution(SpeciesId.ELECTRODE, 30, null, null)
  ],
  [SpeciesId.CUBONE]: [
    new SpeciesEvolution(SpeciesId.ALOLA_MAROWAK, 28, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT)),
    new SpeciesEvolution(SpeciesId.MAROWAK, 28, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.TYROGUE]: [
    /**
     * Custom: Evolves into Hitmonlee, Hitmonchan or Hitmontop at level 20
     * if it knows Low Sweep, Mach Punch, or Rapid Spin, respectively.
     * If Tyrogue knows multiple of these moves, its evolution is based on
     * the first qualifying move in its moveset.
     */
    new SpeciesEvolution(SpeciesId.HITMONLEE, 20, null, new SpeciesEvolutionCondition(p =>
      p.move? p.move.id === Moves.LOW_SWEEP : false
    )),
    new SpeciesEvolution(SpeciesId.HITMONCHAN, 20, null, new SpeciesEvolutionCondition(p =>
      p.move? p.move.id === Moves.MACH_PUNCH : false
    )),
    new SpeciesEvolution(SpeciesId.HITMONTOP, 20, null, new SpeciesEvolutionCondition(p =>
      p.move? p.move.id === Moves.RAPID_SPIN : false
    )),
  ],
  [SpeciesId.KOFFING]: [
    new SpeciesEvolution(SpeciesId.GALAR_WEEZING, 35, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT)),
    new SpeciesEvolution(SpeciesId.WEEZING, 35, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.RHYHORN]: [
    new SpeciesEvolution(SpeciesId.RHYDON, 42, null, null)
  ],
  [SpeciesId.HORSEA]: [
    new SpeciesEvolution(SpeciesId.SEADRA, 32, null, null)
  ],
  [SpeciesId.GOLDEEN]: [
    new SpeciesEvolution(SpeciesId.SEAKING, 33, null, null)
  ],
  [SpeciesId.SMOOCHUM]: [
    new SpeciesEvolution(SpeciesId.JYNX, 30, null, null)
  ],
  [SpeciesId.ELEKID]: [
    new SpeciesEvolution(SpeciesId.ELECTABUZZ, 30, null, null)
  ],
  [SpeciesId.MAGBY]: [
    new SpeciesEvolution(SpeciesId.MAGMAR, 30, null, null)
  ],
  [SpeciesId.MAGIKARP]: [
    new SpeciesEvolution(SpeciesId.GYARADOS, 20, null, null)
  ],
  [SpeciesId.OMANYTE]: [
    new SpeciesEvolution(SpeciesId.OMASTAR, 40, null, null)
  ],
  [SpeciesId.KABUTO]: [
    new SpeciesEvolution(SpeciesId.KABUTOPS, 40, null, null)
  ],
  [SpeciesId.DRATINI]: [
    new SpeciesEvolution(SpeciesId.DRAGONAIR, 30, null, null)
  ],
  [SpeciesId.DRAGONAIR]: [
    new SpeciesEvolution(SpeciesId.DRAGONITE, 55, null, null)
  ],
  [SpeciesId.CHIKORITA]: [
    new SpeciesEvolution(SpeciesId.BAYLEEF, 16, null, null)
  ],
  [SpeciesId.BAYLEEF]: [
    new SpeciesEvolution(SpeciesId.MEGANIUM, 32, null, null)
  ],
  [SpeciesId.CYNDAQUIL]: [
    new SpeciesEvolution(SpeciesId.QUILAVA, 14, null, null)
  ],
  [SpeciesId.QUILAVA]: [
    new SpeciesEvolution(SpeciesId.HISUI_TYPHLOSION, 36, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT)),
    new SpeciesEvolution(SpeciesId.TYPHLOSION, 36, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.TOTODILE]: [
    new SpeciesEvolution(SpeciesId.CROCONAW, 18, null, null)
  ],
  [SpeciesId.CROCONAW]: [
    new SpeciesEvolution(SpeciesId.FERALIGATR, 30, null, null)
  ],
  [SpeciesId.SENTRET]: [
    new SpeciesEvolution(SpeciesId.FURRET, 15, null, null)
  ],
  [SpeciesId.HOOTHOOT]: [
    new SpeciesEvolution(SpeciesId.NOCTOWL, 20, null, null)
  ],
  [SpeciesId.LEDYBA]: [
    new SpeciesEvolution(SpeciesId.LEDIAN, 18, null, null)
  ],
  [SpeciesId.SPINARAK]: [
    new SpeciesEvolution(SpeciesId.ARIADOS, 22, null, null)
  ],
  [SpeciesId.CHINCHOU]: [
    new SpeciesEvolution(SpeciesId.LANTURN, 27, null, null)
  ],
  [SpeciesId.NATU]: [
    new SpeciesEvolution(SpeciesId.XATU, 25, null, null)
  ],
  [SpeciesId.MAREEP]: [
    new SpeciesEvolution(SpeciesId.FLAAFFY, 15, null, null)
  ],
  [SpeciesId.FLAAFFY]: [
    new SpeciesEvolution(SpeciesId.AMPHAROS, 30, null, null)
  ],
  [SpeciesId.MARILL]: [
    new SpeciesEvolution(SpeciesId.AZUMARILL, 18, null, null)
  ],
  [SpeciesId.HOPPIP]: [
    new SpeciesEvolution(SpeciesId.SKIPLOOM, 18, null, null)
  ],
  [SpeciesId.SKIPLOOM]: [
    new SpeciesEvolution(SpeciesId.JUMPLUFF, 27, null, null)
  ],
  [SpeciesId.WOOPER]: [
    new SpeciesEvolution(SpeciesId.QUAGSIRE, 20, null, null)
  ],
  [SpeciesId.WYNAUT]: [
    new SpeciesEvolution(SpeciesId.WOBBUFFET, 15, null, null)
  ],
  [SpeciesId.PINECO]: [
    new SpeciesEvolution(SpeciesId.FORRETRESS, 31, null, null)
  ],
  [SpeciesId.SNUBBULL]: [
    new SpeciesEvolution(SpeciesId.GRANBULL, 23, null, null)
  ],
  [SpeciesId.TEDDIURSA]: [
    new SpeciesEvolution(SpeciesId.URSARING, 30, null, null)
  ],
  [SpeciesId.SLUGMA]: [
    new SpeciesEvolution(SpeciesId.MAGCARGO, 38, null, null)
  ],
  [SpeciesId.SWINUB]: [
    new SpeciesEvolution(SpeciesId.PILOSWINE, 33, null, null)
  ],
  [SpeciesId.REMORAID]: [
    new SpeciesEvolution(SpeciesId.OCTILLERY, 25, null, null)
  ],
  [SpeciesId.HOUNDOUR]: [
    new SpeciesEvolution(SpeciesId.HOUNDOOM, 24, null, null)
  ],
  [SpeciesId.PHANPY]: [
    new SpeciesEvolution(SpeciesId.DONPHAN, 25, null, null)
  ],
  [SpeciesId.LARVITAR]: [
    new SpeciesEvolution(SpeciesId.PUPITAR, 30, null, null)
  ],
  [SpeciesId.PUPITAR]: [
    new SpeciesEvolution(SpeciesId.TYRANITAR, 55, null, null)
  ],
  [SpeciesId.TREECKO]: [
    new SpeciesEvolution(SpeciesId.GROVYLE, 16, null, null)
  ],
  [SpeciesId.GROVYLE]: [
    new SpeciesEvolution(SpeciesId.SCEPTILE, 36, null, null)
  ],
  [SpeciesId.TORCHIC]: [
    new SpeciesEvolution(SpeciesId.COMBUSKEN, 16, null, null)
  ],
  [SpeciesId.COMBUSKEN]: [
    new SpeciesEvolution(SpeciesId.BLAZIKEN, 36, null, null)
  ],
  [SpeciesId.MUDKIP]: [
    new SpeciesEvolution(SpeciesId.MARSHTOMP, 16, null, null)
  ],
  [SpeciesId.MARSHTOMP]: [
    new SpeciesEvolution(SpeciesId.SWAMPERT, 36, null, null)
  ],
  [SpeciesId.POOCHYENA]: [
    new SpeciesEvolution(SpeciesId.MIGHTYENA, 18, null, null)
  ],
  [SpeciesId.ZIGZAGOON]: [
    new SpeciesEvolution(SpeciesId.LINOONE, 20, null, null)
  ],
  [SpeciesId.WURMPLE]: [
    new SpeciesEvolution(SpeciesId.SILCOON, 7, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY)),
    new SpeciesEvolution(SpeciesId.CASCOON, 7, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT))
  ],
  [SpeciesId.SILCOON]: [
    new SpeciesEvolution(SpeciesId.BEAUTIFLY, 10, null, null)
  ],
  [SpeciesId.CASCOON]: [
    new SpeciesEvolution(SpeciesId.DUSTOX, 10, null, null)
  ],
  [SpeciesId.LOTAD]: [
    new SpeciesEvolution(SpeciesId.LOMBRE, 14, null, null)
  ],
  [SpeciesId.SEEDOT]: [
    new SpeciesEvolution(SpeciesId.NUZLEAF, 14, null, null)
  ],
  [SpeciesId.TAILLOW]: [
    new SpeciesEvolution(SpeciesId.SWELLOW, 22, null, null)
  ],
  [SpeciesId.WINGULL]: [
    new SpeciesEvolution(SpeciesId.PELIPPER, 25, null, null)
  ],
  [SpeciesId.RALTS]: [
    new SpeciesEvolution(SpeciesId.KIRLIA, 20, null, null)
  ],
  [SpeciesId.KIRLIA]: [
    new SpeciesEvolution(SpeciesId.GARDEVOIR, 30, null, new SpeciesEvolutionCondition(p => p.gender === Gender.FEMALE, p => p.gender = Gender.FEMALE)),
    new SpeciesEvolution(SpeciesId.GALLADE, 30, null, new SpeciesEvolutionCondition(p => p.gender === Gender.MALE, p => p.gender = Gender.MALE))
  ],
  [SpeciesId.SURSKIT]: [
    new SpeciesEvolution(SpeciesId.MASQUERAIN, 22, null, null)
  ],
  [SpeciesId.SHROOMISH]: [
    new SpeciesEvolution(SpeciesId.BRELOOM, 23, null, null)
  ],
  [SpeciesId.SLAKOTH]: [
    new SpeciesEvolution(SpeciesId.VIGOROTH, 18, null, null)
  ],
  [SpeciesId.VIGOROTH]: [
    new SpeciesEvolution(SpeciesId.SLAKING, 36, null, null)
  ],
  [SpeciesId.NINCADA]: [
    new SpeciesEvolution(SpeciesId.NINJASK, 20, null, null),
    new SpeciesEvolution(SpeciesId.SHEDINJA, 20, null, null),//new SpeciesEvolutionCondition(p => p.scene.getPlayerParty().length < 6 && p.scene.pokeballCounts[PokeballType.POKEBALL] > 0))
  ],
  [SpeciesId.WHISMUR]: [
    new SpeciesEvolution(SpeciesId.LOUDRED, 20, null, null)
  ],
  [SpeciesId.LOUDRED]: [
    new SpeciesEvolution(SpeciesId.EXPLOUD, 40, null, null)
  ],
  [SpeciesId.MAKUHITA]: [
    new SpeciesEvolution(SpeciesId.HARIYAMA, 24, null, null)
  ],
  [SpeciesId.ARON]: [
    new SpeciesEvolution(SpeciesId.LAIRON, 32, null, null)
  ],
  [SpeciesId.LAIRON]: [
    new SpeciesEvolution(SpeciesId.AGGRON, 42, null, null)
  ],
  [SpeciesId.MEDITITE]: [
    new SpeciesEvolution(SpeciesId.MEDICHAM, 37, null, null)
  ],
  [SpeciesId.ELECTRIKE]: [
    new SpeciesEvolution(SpeciesId.MANECTRIC, 26, null, null)
  ],
  [SpeciesId.GULPIN]: [
    new SpeciesEvolution(SpeciesId.SWALOT, 26, null, null)
  ],
  [SpeciesId.CARVANHA]: [
    new SpeciesEvolution(SpeciesId.SHARPEDO, 30, null, null)
  ],
  [SpeciesId.WAILMER]: [
    new SpeciesEvolution(SpeciesId.WAILORD, 40, null, null)
  ],
  [SpeciesId.NUMEL]: [
    new SpeciesEvolution(SpeciesId.CAMERUPT, 33, null, null)
  ],
  [SpeciesId.SPOINK]: [
    new SpeciesEvolution(SpeciesId.GRUMPIG, 32, null, null)
  ],
  [SpeciesId.TRAPINCH]: [
    new SpeciesEvolution(SpeciesId.VIBRAVA, 35, null, null)
  ],
  [SpeciesId.VIBRAVA]: [
    new SpeciesEvolution(SpeciesId.FLYGON, 45, null, null)
  ],
  [SpeciesId.CACNEA]: [
    new SpeciesEvolution(SpeciesId.CACTURNE, 32, null, null)
  ],
  [SpeciesId.SWABLU]: [
    new SpeciesEvolution(SpeciesId.ALTARIA, 35, null, null)
  ],
  [SpeciesId.BARBOACH]: [
    new SpeciesEvolution(SpeciesId.WHISCASH, 30, null, null)
  ],
  [SpeciesId.CORPHISH]: [
    new SpeciesEvolution(SpeciesId.CRAWDAUNT, 30, null, null)
  ],
  [SpeciesId.BALTOY]: [
    new SpeciesEvolution(SpeciesId.CLAYDOL, 36, null, null)
  ],
  [SpeciesId.LILEEP]: [
    new SpeciesEvolution(SpeciesId.CRADILY, 40, null, null)
  ],
  [SpeciesId.ANORITH]: [
    new SpeciesEvolution(SpeciesId.ARMALDO, 40, null, null)
  ],
  [SpeciesId.SHUPPET]: [
    new SpeciesEvolution(SpeciesId.BANETTE, 37, null, null)
  ],
  [SpeciesId.DUSKULL]: [
    new SpeciesEvolution(SpeciesId.DUSCLOPS, 37, null, null)
  ],
  [SpeciesId.SNORUNT]: [
    new SpeciesEvolution(SpeciesId.GLALIE, 42, null, new SpeciesEvolutionCondition(p => p.gender === Gender.MALE, p => p.gender = Gender.MALE)),
    new SpeciesEvolution(SpeciesId.FROSLASS, 42, null, new SpeciesEvolutionCondition(p => p.gender === Gender.FEMALE, p => p.gender = Gender.FEMALE))
  ],
  [SpeciesId.SPHEAL]: [
    new SpeciesEvolution(SpeciesId.SEALEO, 32, null, null)
  ],
  [SpeciesId.SEALEO]: [
    new SpeciesEvolution(SpeciesId.WALREIN, 44, null, null)
  ],
  [SpeciesId.BAGON]: [
    new SpeciesEvolution(SpeciesId.SHELGON, 30, null, null)
  ],
  [SpeciesId.SHELGON]: [
    new SpeciesEvolution(SpeciesId.SALAMENCE, 50, null, null)
  ],
  [SpeciesId.BELDUM]: [
    new SpeciesEvolution(SpeciesId.METANG, 20, null, null)
  ],
  [SpeciesId.METANG]: [
    new SpeciesEvolution(SpeciesId.METAGROSS, 45, null, null)
  ],
  [SpeciesId.TURTWIG]: [
    new SpeciesEvolution(SpeciesId.GROTLE, 18, null, null)
  ],
  [SpeciesId.GROTLE]: [
    new SpeciesEvolution(SpeciesId.TORTERRA, 32, null, null)
  ],
  [SpeciesId.CHIMCHAR]: [
    new SpeciesEvolution(SpeciesId.MONFERNO, 14, null, null)
  ],
  [SpeciesId.MONFERNO]: [
    new SpeciesEvolution(SpeciesId.INFERNAPE, 36, null, null)
  ],
  [SpeciesId.PIPLUP]: [
    new SpeciesEvolution(SpeciesId.PRINPLUP, 16, null, null)
  ],
  [SpeciesId.PRINPLUP]: [
    new SpeciesEvolution(SpeciesId.EMPOLEON, 36, null, null)
  ],
  [SpeciesId.STARLY]: [
    new SpeciesEvolution(SpeciesId.STARAVIA, 14, null, null)
  ],
  [SpeciesId.STARAVIA]: [
    new SpeciesEvolution(SpeciesId.STARAPTOR, 34, null, null)
  ],
  [SpeciesId.BIDOOF]: [
    new SpeciesEvolution(SpeciesId.BIBAREL, 15, null, null)
  ],
  [SpeciesId.KRICKETOT]: [
    new SpeciesEvolution(SpeciesId.KRICKETUNE, 10, null, null)
  ],
  [SpeciesId.SHINX]: [
    new SpeciesEvolution(SpeciesId.LUXIO, 15, null, null)
  ],
  [SpeciesId.LUXIO]: [
    new SpeciesEvolution(SpeciesId.LUXRAY, 30, null, null)
  ],
  [SpeciesId.CRANIDOS]: [
    new SpeciesEvolution(SpeciesId.RAMPARDOS, 30, null, null)
  ],
  [SpeciesId.SHIELDON]: [
    new SpeciesEvolution(SpeciesId.BASTIODON, 30, null, null)
  ],
  [SpeciesId.BURMY]: [
    new SpeciesEvolution(SpeciesId.MOTHIM, 20, null, new SpeciesEvolutionCondition(p => p.gender === Gender.MALE, p => p.gender = Gender.MALE)),
    new SpeciesEvolution(SpeciesId.WORMADAM, 20, null, new SpeciesEvolutionCondition(p => p.gender === Gender.FEMALE, p => p.gender = Gender.FEMALE))
  ],
  [SpeciesId.COMBEE]: [
    new SpeciesEvolution(SpeciesId.VESPIQUEN, 21, null, new SpeciesEvolutionCondition(p => p.gender === Gender.FEMALE, p => p.gender = Gender.FEMALE))
  ],
  [SpeciesId.BUIZEL]: [
    new SpeciesEvolution(SpeciesId.FLOATZEL, 26, null, null)
  ],
  [SpeciesId.CHERUBI]: [
    new SpeciesEvolution(SpeciesId.CHERRIM, 25, null, null)
  ],
  [SpeciesId.SHELLOS]: [
    new SpeciesEvolution(SpeciesId.GASTRODON, 30, null, null)
  ],
  [SpeciesId.DRIFLOON]: [
    new SpeciesEvolution(SpeciesId.DRIFBLIM, 28, null, null)
  ],
  [SpeciesId.GLAMEOW]: [
    new SpeciesEvolution(SpeciesId.PURUGLY, 38, null, null)
  ],
  [SpeciesId.STUNKY]: [
    new SpeciesEvolution(SpeciesId.SKUNTANK, 34, null, null)
  ],
  [SpeciesId.BRONZOR]: [
    new SpeciesEvolution(SpeciesId.BRONZONG, 33, null, null)
  ],
  [SpeciesId.GIBLE]: [
    new SpeciesEvolution(SpeciesId.GABITE, 24, null, null)
  ],
  [SpeciesId.GABITE]: [
    new SpeciesEvolution(SpeciesId.GARCHOMP, 48, null, null)
  ],
  [SpeciesId.HIPPOPOTAS]: [
    new SpeciesEvolution(SpeciesId.HIPPOWDON, 34, null, null)
  ],
  [SpeciesId.SKORUPI]: [
    new SpeciesEvolution(SpeciesId.DRAPION, 40, null, null)
  ],
  [SpeciesId.CROAGUNK]: [
    new SpeciesEvolution(SpeciesId.TOXICROAK, 37, null, null)
  ],
  [SpeciesId.FINNEON]: [
    new SpeciesEvolution(SpeciesId.LUMINEON, 31, null, null)
  ],
  [SpeciesId.MANTYKE]: [
    new SpeciesEvolution(SpeciesId.MANTINE, 32, null, null),// new SpeciesEvolutionCondition(p => !!p.scene.gameData.dexData[SpeciesId.REMORAID].caughtAttr), SpeciesWildEvolutionDelay.MEDIUM)
  ],
  [SpeciesId.SNOVER]: [
    new SpeciesEvolution(SpeciesId.ABOMASNOW, 40, null, null)
  ],
  [SpeciesId.SNIVY]: [
    new SpeciesEvolution(SpeciesId.SERVINE, 17, null, null)
  ],
  [SpeciesId.SERVINE]: [
    new SpeciesEvolution(SpeciesId.SERPERIOR, 36, null, null)
  ],
  [SpeciesId.TEPIG]: [
    new SpeciesEvolution(SpeciesId.PIGNITE, 17, null, null)
  ],
  [SpeciesId.PIGNITE]: [
    new SpeciesEvolution(SpeciesId.EMBOAR, 36, null, null)
  ],
  [SpeciesId.OSHAWOTT]: [
    new SpeciesEvolution(SpeciesId.DEWOTT, 17, null, null)
  ],
  [SpeciesId.DEWOTT]: [
    new SpeciesEvolution(SpeciesId.HISUI_SAMUROTT, 36, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT)),
    new SpeciesEvolution(SpeciesId.SAMUROTT, 36, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.PATRAT]: [
    new SpeciesEvolution(SpeciesId.WATCHOG, 20, null, null)
  ],
  [SpeciesId.LILLIPUP]: [
    new SpeciesEvolution(SpeciesId.HERDIER, 16, null, null)
  ],
  [SpeciesId.HERDIER]: [
    new SpeciesEvolution(SpeciesId.STOUTLAND, 32, null, null)
  ],
  [SpeciesId.PURRLOIN]: [
    new SpeciesEvolution(SpeciesId.LIEPARD, 20, null, null)
  ],
  [SpeciesId.PIDOVE]: [
    new SpeciesEvolution(SpeciesId.TRANQUILL, 21, null, null)
  ],
  [SpeciesId.TRANQUILL]: [
    new SpeciesEvolution(SpeciesId.UNFEZANT, 32, null, null)
  ],
  [SpeciesId.BLITZLE]: [
    new SpeciesEvolution(SpeciesId.ZEBSTRIKA, 27, null, null)
  ],
  [SpeciesId.ROGGENROLA]: [
    new SpeciesEvolution(SpeciesId.BOLDORE, 25, null, null)
  ],
  [SpeciesId.DRILBUR]: [
    new SpeciesEvolution(SpeciesId.EXCADRILL, 31, null, null)
  ],
  [SpeciesId.TIMBURR]: [
    new SpeciesEvolution(SpeciesId.GURDURR, 25, null, null)
  ],
  [SpeciesId.TYMPOLE]: [
    new SpeciesEvolution(SpeciesId.PALPITOAD, 25, null, null)
  ],
  [SpeciesId.PALPITOAD]: [
    new SpeciesEvolution(SpeciesId.SEISMITOAD, 36, null, null)
  ],
  [SpeciesId.SEWADDLE]: [
    new SpeciesEvolution(SpeciesId.SWADLOON, 20, null, null)
  ],
  [SpeciesId.VENIPEDE]: [
    new SpeciesEvolution(SpeciesId.WHIRLIPEDE, 22, null, null)
  ],
  [SpeciesId.WHIRLIPEDE]: [
    new SpeciesEvolution(SpeciesId.SCOLIPEDE, 30, null, null)
  ],
  [SpeciesId.SANDILE]: [
    new SpeciesEvolution(SpeciesId.KROKOROK, 29, null, null)
  ],
  [SpeciesId.KROKOROK]: [
    new SpeciesEvolution(SpeciesId.KROOKODILE, 40, null, null)
  ],
  [SpeciesId.DARUMAKA]: [
    new SpeciesEvolution(SpeciesId.DARMANITAN, 35, null, null)
  ],
  [SpeciesId.DWEBBLE]: [
    new SpeciesEvolution(SpeciesId.CRUSTLE, 34, null, null)
  ],
  [SpeciesId.SCRAGGY]: [
    new SpeciesEvolution(SpeciesId.SCRAFTY, 39, null, null)
  ],
  [SpeciesId.YAMASK]: [
    new SpeciesEvolution(SpeciesId.COFAGRIGUS, 34, null, null)
  ],
  [SpeciesId.TIRTOUGA]: [
    new SpeciesEvolution(SpeciesId.CARRACOSTA, 37, null, null)
  ],
  [SpeciesId.ARCHEN]: [
    new SpeciesEvolution(SpeciesId.ARCHEOPS, 37, null, null)
  ],
  [SpeciesId.TRUBBISH]: [
    new SpeciesEvolution(SpeciesId.GARBODOR, 36, null, null)
  ],
  [SpeciesId.ZORUA]: [
    new SpeciesEvolution(SpeciesId.ZOROARK, 30, null, null)
  ],
  [SpeciesId.GOTHITA]: [
    new SpeciesEvolution(SpeciesId.GOTHORITA, 32, null, null)
  ],
  [SpeciesId.GOTHORITA]: [
    new SpeciesEvolution(SpeciesId.GOTHITELLE, 41, null, null)
  ],
  [SpeciesId.SOLOSIS]: [
    new SpeciesEvolution(SpeciesId.DUOSION, 32, null, null)
  ],
  [SpeciesId.DUOSION]: [
    new SpeciesEvolution(SpeciesId.REUNICLUS, 41, null, null)
  ],
  [SpeciesId.DUCKLETT]: [
    new SpeciesEvolution(SpeciesId.SWANNA, 35, null, null)
  ],
  [SpeciesId.VANILLITE]: [
    new SpeciesEvolution(SpeciesId.VANILLISH, 35, null, null)
  ],
  [SpeciesId.VANILLISH]: [
    new SpeciesEvolution(SpeciesId.VANILLUXE, 47, null, null)
  ],
  [SpeciesId.DEERLING]: [
    new SpeciesEvolution(SpeciesId.SAWSBUCK, 34, null, null)
  ],
  [SpeciesId.FOONGUS]: [
    new SpeciesEvolution(SpeciesId.AMOONGUSS, 39, null, null)
  ],
  [SpeciesId.FRILLISH]: [
    new SpeciesEvolution(SpeciesId.JELLICENT, 40, null, null)
  ],
  [SpeciesId.JOLTIK]: [
    new SpeciesEvolution(SpeciesId.GALVANTULA, 36, null, null)
  ],
  [SpeciesId.FERROSEED]: [
    new SpeciesEvolution(SpeciesId.FERROTHORN, 40, null, null)
  ],
  [SpeciesId.KLINK]: [
    new SpeciesEvolution(SpeciesId.KLANG, 38, null, null)
  ],
  [SpeciesId.KLANG]: [
    new SpeciesEvolution(SpeciesId.KLINKLANG, 49, null, null)
  ],
  [SpeciesId.TYNAMO]: [
    new SpeciesEvolution(SpeciesId.EELEKTRIK, 39, null, null)
  ],
  [SpeciesId.ELGYEM]: [
    new SpeciesEvolution(SpeciesId.BEHEEYEM, 42, null, null)
  ],
  [SpeciesId.LITWICK]: [
    new SpeciesEvolution(SpeciesId.LAMPENT, 41, null, null)
  ],
  [SpeciesId.AXEW]: [
    new SpeciesEvolution(SpeciesId.FRAXURE, 38, null, null)
  ],
  [SpeciesId.FRAXURE]: [
    new SpeciesEvolution(SpeciesId.HAXORUS, 48, null, null)
  ],
  [SpeciesId.CUBCHOO]: [
    new SpeciesEvolution(SpeciesId.BEARTIC, 37, null, null)
  ],
  [SpeciesId.MIENFOO]: [
    new SpeciesEvolution(SpeciesId.MIENSHAO, 50, null, null)
  ],
  [SpeciesId.GOLETT]: [
    new SpeciesEvolution(SpeciesId.GOLURK, 43, null, null)
  ],
  [SpeciesId.PAWNIARD]: [
    new SpeciesEvolution(SpeciesId.BISHARP, 52, null, null)
  ],
  [SpeciesId.BISHARP]: [
    new SpeciesEvolution(SpeciesId.KINGAMBIT, 1, EvolutionItem.LEADERS_CREST, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.RUFFLET]: [
    new SpeciesEvolution(SpeciesId.HISUI_BRAVIARY, 54, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT)),
    new SpeciesEvolution(SpeciesId.BRAVIARY, 54, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.VULLABY]: [
    new SpeciesEvolution(SpeciesId.MANDIBUZZ, 54, null, null)
  ],
  [SpeciesId.DEINO]: [
    new SpeciesEvolution(SpeciesId.ZWEILOUS, 50, null, null)
  ],
  [SpeciesId.ZWEILOUS]: [
    new SpeciesEvolution(SpeciesId.HYDREIGON, 64, null, null)
  ],
  [SpeciesId.LARVESTA]: [
    new SpeciesEvolution(SpeciesId.VOLCARONA, 59, null, null)
  ],
  [SpeciesId.CHESPIN]: [
    new SpeciesEvolution(SpeciesId.QUILLADIN, 16, null, null)
  ],
  [SpeciesId.QUILLADIN]: [
    new SpeciesEvolution(SpeciesId.CHESNAUGHT, 36, null, null)
  ],
  [SpeciesId.FENNEKIN]: [
    new SpeciesEvolution(SpeciesId.BRAIXEN, 16, null, null)
  ],
  [SpeciesId.BRAIXEN]: [
    new SpeciesEvolution(SpeciesId.DELPHOX, 36, null, null)
  ],
  [SpeciesId.FROAKIE]: [
    new SpeciesEvolution(SpeciesId.FROGADIER, 16, null, null)
  ],
  [SpeciesId.FROGADIER]: [
    new SpeciesEvolution(SpeciesId.GRENINJA, 36, null, null)
  ],
  [SpeciesId.BUNNELBY]: [
    new SpeciesEvolution(SpeciesId.DIGGERSBY, 20, null, null)
  ],
  [SpeciesId.FLETCHLING]: [
    new SpeciesEvolution(SpeciesId.FLETCHINDER, 17, null, null)
  ],
  [SpeciesId.FLETCHINDER]: [
    new SpeciesEvolution(SpeciesId.TALONFLAME, 35, null, null)
  ],
  [SpeciesId.SCATTERBUG]: [
    new SpeciesEvolution(SpeciesId.SPEWPA, 9, null, null)
  ],
  [SpeciesId.SPEWPA]: [
    new SpeciesEvolution(SpeciesId.VIVILLON, 12, null, null)
  ],
  [SpeciesId.LITLEO]: [
    new SpeciesEvolution(SpeciesId.PYROAR, 35, null, null)
  ],
  [SpeciesId.FLABEBE]: [
    new SpeciesEvolution(SpeciesId.FLOETTE, 19, null, null)
  ],
  [SpeciesId.SKIDDO]: [
    new SpeciesEvolution(SpeciesId.GOGOAT, 32, null, null)
  ],
  [SpeciesId.PANCHAM]: [
    new SpeciesEvolution(SpeciesId.PANGORO, 32, null, null), // new SpeciesEvolutionCondition(p => !!p.scene.getPlayerParty().find(p => p.getTypes(false, false, true).indexOf(Type.DARK) > -1)), SpeciesWildEvolutionDelay.MEDIUM)
  ],
  [SpeciesId.ESPURR]: [
    new SpeciesFormEvolution(SpeciesId.MEOWSTIC, "", "female", 25, null, new SpeciesEvolutionCondition(p => p.gender === Gender.FEMALE, p => p.gender = Gender.FEMALE)),
    new SpeciesFormEvolution(SpeciesId.MEOWSTIC, "", "", 25, null, new SpeciesEvolutionCondition(p => p.gender === Gender.MALE, p => p.gender = Gender.MALE))
  ],
  [SpeciesId.HONEDGE]: [
    new SpeciesEvolution(SpeciesId.DOUBLADE, 35, null, null)
  ],
  [SpeciesId.INKAY]: [
    new SpeciesEvolution(SpeciesId.MALAMAR, 30, null, null)
  ],
  [SpeciesId.BINACLE]: [
    new SpeciesEvolution(SpeciesId.BARBARACLE, 39, null, null)
  ],
  [SpeciesId.SKRELP]: [
    new SpeciesEvolution(SpeciesId.DRAGALGE, 48, null, null)
  ],
  [SpeciesId.CLAUNCHER]: [
    new SpeciesEvolution(SpeciesId.CLAWITZER, 37, null, null)
  ],
  [SpeciesId.TYRUNT]: [
    new SpeciesEvolution(SpeciesId.TYRANTRUM, 39, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.AMAURA]: [
    new SpeciesEvolution(SpeciesId.AURORUS, 39, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT))
  ],
  [SpeciesId.GOOMY]: [
    new SpeciesEvolution(SpeciesId.HISUI_SLIGGOO, 40, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT)),
    new SpeciesEvolution(SpeciesId.SLIGGOO, 40, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.SLIGGOO]: [
    new SpeciesEvolution(SpeciesId.GOODRA, 50, null, null), //new SpeciesEvolutionCondition(p => [ WeatherType.RAIN, WeatherType.FOG, WeatherType.HEAVY_RAIN ].indexOf(weather?.weatherType || WeatherType.NONE) > -1), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.BERGMITE]: [
    new SpeciesEvolution(SpeciesId.HISUI_AVALUGG, 37, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT)),
    new SpeciesEvolution(SpeciesId.AVALUGG, 37, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.NOIBAT]: [
    new SpeciesEvolution(SpeciesId.NOIVERN, 48, null, null)
  ],
  [SpeciesId.ROWLET]: [
    new SpeciesEvolution(SpeciesId.DARTRIX, 17, null, null)
  ],
  [SpeciesId.DARTRIX]: [
    new SpeciesEvolution(SpeciesId.HISUI_DECIDUEYE, 36, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT)),
    new SpeciesEvolution(SpeciesId.DECIDUEYE, 34, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.LITTEN]: [
    new SpeciesEvolution(SpeciesId.TORRACAT, 17, null, null)
  ],
  [SpeciesId.TORRACAT]: [
    new SpeciesEvolution(SpeciesId.INCINEROAR, 34, null, null)
  ],
  [SpeciesId.POPPLIO]: [
    new SpeciesEvolution(SpeciesId.BRIONNE, 17, null, null)
  ],
  [SpeciesId.BRIONNE]: [
    new SpeciesEvolution(SpeciesId.PRIMARINA, 34, null, null)
  ],
  [SpeciesId.PIKIPEK]: [
    new SpeciesEvolution(SpeciesId.TRUMBEAK, 14, null, null)
  ],
  [SpeciesId.TRUMBEAK]: [
    new SpeciesEvolution(SpeciesId.TOUCANNON, 28, null, null)
  ],
  [SpeciesId.YUNGOOS]: [
    new SpeciesEvolution(SpeciesId.GUMSHOOS, 20, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.GRUBBIN]: [
    new SpeciesEvolution(SpeciesId.CHARJABUG, 20, null, null)
  ],
  [SpeciesId.CUTIEFLY]: [
    new SpeciesEvolution(SpeciesId.RIBOMBEE, 25, null, null)
  ],
  [SpeciesId.MAREANIE]: [
    new SpeciesEvolution(SpeciesId.TOXAPEX, 38, null, null)
  ],
  [SpeciesId.MUDBRAY]: [
    new SpeciesEvolution(SpeciesId.MUDSDALE, 30, null, null)
  ],
  [SpeciesId.DEWPIDER]: [
    new SpeciesEvolution(SpeciesId.ARAQUANID, 22, null, null)
  ],
  [SpeciesId.FOMANTIS]: [
    new SpeciesEvolution(SpeciesId.LURANTIS, 34, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY))
  ],
  [SpeciesId.MORELULL]: [
    new SpeciesEvolution(SpeciesId.SHIINOTIC, 24, null, null)
  ],
  [SpeciesId.SALANDIT]: [
    new SpeciesEvolution(SpeciesId.SALAZZLE, 33, null, new SpeciesEvolutionCondition(p => p.gender === Gender.FEMALE, p => p.gender = Gender.FEMALE))
  ],
  [SpeciesId.STUFFUL]: [
    new SpeciesEvolution(SpeciesId.BEWEAR, 27, null, null)
  ],
  [SpeciesId.BOUNSWEET]: [
    new SpeciesEvolution(SpeciesId.STEENEE, 18, null, null)
  ],
  [SpeciesId.WIMPOD]: [
    new SpeciesEvolution(SpeciesId.GOLISOPOD, 30, null, null)
  ],
  [SpeciesId.SANDYGAST]: [
    new SpeciesEvolution(SpeciesId.PALOSSAND, 42, null, null)
  ],
  [SpeciesId.JANGMO_O]: [
    new SpeciesEvolution(SpeciesId.HAKAMO_O, 35, null, null)
  ],
  [SpeciesId.HAKAMO_O]: [
    new SpeciesEvolution(SpeciesId.KOMMO_O, 45, null, null)
  ],
  [SpeciesId.COSMOG]: [
    new SpeciesEvolution(SpeciesId.COSMOEM, 23, null, null)
  ],
  [SpeciesId.COSMOEM]: [
    new SpeciesEvolution(SpeciesId.SOLGALEO, 1, EvolutionItem.SUN_FLUTE, null, SpeciesWildEvolutionDelay.VERY_LONG),
    new SpeciesEvolution(SpeciesId.LUNALA, 1, EvolutionItem.MOON_FLUTE, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.MELTAN]: [
    new SpeciesEvolution(SpeciesId.MELMETAL, 48, null, null)
  ],
  [SpeciesId.ALOLA_RATTATA]: [
    new SpeciesEvolution(SpeciesId.ALOLA_RATICATE, 20, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT))
  ],
  [SpeciesId.ALOLA_DIGLETT]: [
    new SpeciesEvolution(SpeciesId.ALOLA_DUGTRIO, 26, null, null)
  ],
  [SpeciesId.ALOLA_GEODUDE]: [
    new SpeciesEvolution(SpeciesId.ALOLA_GRAVELER, 25, null, null)
  ],
  [SpeciesId.ALOLA_GRIMER]: [
    new SpeciesEvolution(SpeciesId.ALOLA_MUK, 38, null, null)
  ],
  [SpeciesId.GROOKEY]: [
    new SpeciesEvolution(SpeciesId.THWACKEY, 16, null, null)
  ],
  [SpeciesId.THWACKEY]: [
    new SpeciesEvolution(SpeciesId.RILLABOOM, 35, null, null)
  ],
  [SpeciesId.SCORBUNNY]: [
    new SpeciesEvolution(SpeciesId.RABOOT, 16, null, null)
  ],
  [SpeciesId.RABOOT]: [
    new SpeciesEvolution(SpeciesId.CINDERACE, 35, null, null)
  ],
  [SpeciesId.SOBBLE]: [
    new SpeciesEvolution(SpeciesId.DRIZZILE, 16, null, null)
  ],
  [SpeciesId.DRIZZILE]: [
    new SpeciesEvolution(SpeciesId.INTELEON, 35, null, null)
  ],
  [SpeciesId.SKWOVET]: [
    new SpeciesEvolution(SpeciesId.GREEDENT, 24, null, null)
  ],
  [SpeciesId.ROOKIDEE]: [
    new SpeciesEvolution(SpeciesId.CORVISQUIRE, 18, null, null)
  ],
  [SpeciesId.CORVISQUIRE]: [
    new SpeciesEvolution(SpeciesId.CORVIKNIGHT, 38, null, null)
  ],
  [SpeciesId.BLIPBUG]: [
    new SpeciesEvolution(SpeciesId.DOTTLER, 10, null, null)
  ],
  [SpeciesId.DOTTLER]: [
    new SpeciesEvolution(SpeciesId.ORBEETLE, 30, null, null)
  ],
  [SpeciesId.NICKIT]: [
    new SpeciesEvolution(SpeciesId.THIEVUL, 18, null, null)
  ],
  [SpeciesId.GOSSIFLEUR]: [
    new SpeciesEvolution(SpeciesId.ELDEGOSS, 20, null, null)
  ],
  [SpeciesId.WOOLOO]: [
    new SpeciesEvolution(SpeciesId.DUBWOOL, 24, null, null)
  ],
  [SpeciesId.CHEWTLE]: [
    new SpeciesEvolution(SpeciesId.DREDNAW, 22, null, null)
  ],
  [SpeciesId.YAMPER]: [
    new SpeciesEvolution(SpeciesId.BOLTUND, 25, null, null)
  ],
  [SpeciesId.ROLYCOLY]: [
    new SpeciesEvolution(SpeciesId.CARKOL, 18, null, null)
  ],
  [SpeciesId.CARKOL]: [
    new SpeciesEvolution(SpeciesId.COALOSSAL, 34, null, null)
  ],
  [SpeciesId.SILICOBRA]: [
    new SpeciesEvolution(SpeciesId.SANDACONDA, 36, null, null)
  ],
  [SpeciesId.ARROKUDA]: [
    new SpeciesEvolution(SpeciesId.BARRASKEWDA, 26, null, null)
  ],
  [SpeciesId.TOXEL]: [
    new SpeciesFormEvolution(SpeciesId.TOXTRICITY, "", "lowkey", 30, null, null),
      //new SpeciesEvolutionCondition(p => [ Nature.LONELY, Nature.BOLD, Nature.RELAXED, Nature.TIMID, Nature.SERIOUS, Nature.MODEST, Nature.MILD, Nature.QUIET, Nature.BASHFUL, Nature.CALM, Nature.GENTLE, Nature.CAREFUL ].indexOf(p.getNature()) > -1)),
    new SpeciesFormEvolution(SpeciesId.TOXTRICITY, "", "amped", 30, null, null)
  ],
  [SpeciesId.SIZZLIPEDE]: [
    new SpeciesEvolution(SpeciesId.CENTISKORCH, 28, null, null)
  ],
  [SpeciesId.HATENNA]: [
    new SpeciesEvolution(SpeciesId.HATTREM, 32, null, null)
  ],
  [SpeciesId.HATTREM]: [
    new SpeciesEvolution(SpeciesId.HATTERENE, 42, null, null)
  ],
  [SpeciesId.IMPIDIMP]: [
    new SpeciesEvolution(SpeciesId.MORGREM, 32, null, null)
  ],
  [SpeciesId.MORGREM]: [
    new SpeciesEvolution(SpeciesId.GRIMMSNARL, 42, null, null)
  ],
  [SpeciesId.CUFANT]: [
    new SpeciesEvolution(SpeciesId.COPPERAJAH, 34, null, null)
  ],
  [SpeciesId.DREEPY]: [
    new SpeciesEvolution(SpeciesId.DRAKLOAK, 50, null, null)
  ],
  [SpeciesId.DRAKLOAK]: [
    new SpeciesEvolution(SpeciesId.DRAGAPULT, 60, null, null)
  ],
  [SpeciesId.GALAR_MEOWTH]: [
    new SpeciesEvolution(SpeciesId.PERRSERKER, 28, null, null)
  ],
  [SpeciesId.GALAR_PONYTA]: [
    new SpeciesEvolution(SpeciesId.GALAR_RAPIDASH, 40, null, null)
  ],
  [SpeciesId.GALAR_FARFETCHD]: [
    new SpeciesEvolution(SpeciesId.SIRFETCHD, 30, null, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.GALAR_SLOWPOKE]: [
    new SpeciesEvolution(SpeciesId.GALAR_SLOWBRO, 1, EvolutionItem.GALARICA_CUFF, null, SpeciesWildEvolutionDelay.VERY_LONG),
    new SpeciesEvolution(SpeciesId.GALAR_SLOWKING, 1, EvolutionItem.GALARICA_WREATH, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.GALAR_MR_MIME]: [
    new SpeciesEvolution(SpeciesId.MR_RIME, 42, null, null)
  ],
  [SpeciesId.GALAR_CORSOLA]: [
    new SpeciesEvolution(SpeciesId.CURSOLA, 38, null, null)
  ],
  [SpeciesId.GALAR_ZIGZAGOON]: [
    new SpeciesEvolution(SpeciesId.GALAR_LINOONE, 20, null, null)
  ],
  [SpeciesId.GALAR_LINOONE]: [
    new SpeciesEvolution(SpeciesId.OBSTAGOON, 35, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT))
  ],
  [SpeciesId.GALAR_YAMASK]: [
    new SpeciesEvolution(SpeciesId.RUNERIGUS, 34, null, null)
  ],
  [SpeciesId.HISUI_ZORUA]: [
    new SpeciesEvolution(SpeciesId.HISUI_ZOROARK, 30, null, null)
  ],
  [SpeciesId.HISUI_SLIGGOO]: [
    new SpeciesEvolution(SpeciesId.HISUI_GOODRA, 50, null, null), //new SpeciesEvolutionCondition(p => [ WeatherType.RAIN, WeatherType.FOG, WeatherType.HEAVY_RAIN ].indexOf(weather?.weatherType || WeatherType.NONE) > -1), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.SPRIGATITO]: [
    new SpeciesEvolution(SpeciesId.FLORAGATO, 16, null, null)
  ],
  [SpeciesId.FLORAGATO]: [
    new SpeciesEvolution(SpeciesId.MEOWSCARADA, 36, null, null)
  ],
  [SpeciesId.FUECOCO]: [
    new SpeciesEvolution(SpeciesId.CROCALOR, 16, null, null)
  ],
  [SpeciesId.CROCALOR]: [
    new SpeciesEvolution(SpeciesId.SKELEDIRGE, 36, null, null)
  ],
  [SpeciesId.QUAXLY]: [
    new SpeciesEvolution(SpeciesId.QUAXWELL, 16, null, null)
  ],
  [SpeciesId.QUAXWELL]: [
    new SpeciesEvolution(SpeciesId.QUAQUAVAL, 36, null, null)
  ],
  [SpeciesId.LECHONK]: [
    new SpeciesFormEvolution(SpeciesId.OINKOLOGNE, "", "female", 18, null, new SpeciesEvolutionCondition(p => p.gender === Gender.FEMALE, p => p.gender = Gender.FEMALE)),
    new SpeciesFormEvolution(SpeciesId.OINKOLOGNE, "", "", 18, null, new SpeciesEvolutionCondition(p => p.gender === Gender.MALE, p => p.gender = Gender.MALE))
  ],
  [SpeciesId.TAROUNTULA]: [
    new SpeciesEvolution(SpeciesId.SPIDOPS, 15, null, null)
  ],
  [SpeciesId.NYMBLE]: [
    new SpeciesEvolution(SpeciesId.LOKIX, 24, null, null)
  ],
  [SpeciesId.PAWMI]: [
    new SpeciesEvolution(SpeciesId.PAWMO, 18, null, null)
  ],
  [SpeciesId.PAWMO]: [
    new SpeciesEvolution(SpeciesId.PAWMOT, 32, null, null)
  ],
  [SpeciesId.TANDEMAUS]: [
    new SpeciesFormEvolution(SpeciesId.MAUSHOLD, "", "three", 25, null, null), //new SpeciesEvolutionCondition(p => {
    //   let ret = false;
    //   p.scene.executeWithSeedOffset(() => ret = !Utils.randSeedInt(4), p.id);
    //   return ret;
    // })),
    new SpeciesEvolution(SpeciesId.MAUSHOLD, 25, null, null)
  ],
  [SpeciesId.FIDOUGH]: [
    new SpeciesEvolution(SpeciesId.DACHSBUN, 26, null, null)
  ],
  [SpeciesId.SMOLIV]: [
    new SpeciesEvolution(SpeciesId.DOLLIV, 25, null, null)
  ],
  [SpeciesId.DOLLIV]: [
    new SpeciesEvolution(SpeciesId.ARBOLIVA, 35, null, null)
  ],
  [SpeciesId.NACLI]: [
    new SpeciesEvolution(SpeciesId.NACLSTACK, 24, null, null)
  ],
  [SpeciesId.NACLSTACK]: [
    new SpeciesEvolution(SpeciesId.GARGANACL, 38, null, null)
  ],
  [SpeciesId.WATTREL]: [
    new SpeciesEvolution(SpeciesId.KILOWATTREL, 25, null, null)
  ],
  [SpeciesId.MASCHIFF]: [
    new SpeciesEvolution(SpeciesId.MABOSSTIFF, 30, null, null)
  ],
  [SpeciesId.SHROODLE]: [
    new SpeciesEvolution(SpeciesId.GRAFAIAI, 28, null, null)
  ],
  [SpeciesId.BRAMBLIN]: [
    new SpeciesEvolution(SpeciesId.BRAMBLEGHAST, 30, null, null)
  ],
  [SpeciesId.TOEDSCOOL]: [
    new SpeciesEvolution(SpeciesId.TOEDSCRUEL, 30, null, null)
  ],
  [SpeciesId.RELLOR]: [
    new SpeciesEvolution(SpeciesId.RABSCA, 29, null, null)
  ],
  [SpeciesId.FLITTLE]: [
    new SpeciesEvolution(SpeciesId.ESPATHRA, 35, null, null)
  ],
  [SpeciesId.TINKATINK]: [
    new SpeciesEvolution(SpeciesId.TINKATUFF, 24, null, null)
  ],
  [SpeciesId.TINKATUFF]: [
    new SpeciesEvolution(SpeciesId.TINKATON, 38, null, null)
  ],
  [SpeciesId.WIGLETT]: [
    new SpeciesEvolution(SpeciesId.WUGTRIO, 26, null, null)
  ],
  [SpeciesId.FINIZEN]: [
    new SpeciesEvolution(SpeciesId.PALAFIN, 38, null, null)
  ],
  [SpeciesId.VAROOM]: [
    new SpeciesEvolution(SpeciesId.REVAVROOM, 40, null, null)
  ],
  [SpeciesId.GLIMMET]: [
    new SpeciesEvolution(SpeciesId.GLIMMORA, 35, null, null)
  ],
  [SpeciesId.GREAVARD]: [
    new SpeciesEvolution(SpeciesId.HOUNDSTONE, 30, null, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT))
  ],
  [SpeciesId.FRIGIBAX]: [
    new SpeciesEvolution(SpeciesId.ARCTIBAX, 35, null, null)
  ],
  [SpeciesId.ARCTIBAX]: [
    new SpeciesEvolution(SpeciesId.BAXCALIBUR, 54, null, null)
  ],
  [SpeciesId.PALDEA_WOOPER]: [
    new SpeciesEvolution(SpeciesId.CLODSIRE, 20, null, null)
  ],
  [SpeciesId.PIKACHU]: [
    new SpeciesFormEvolution(SpeciesId.ALOLA_RAICHU, "", "", 1, EvolutionItem.SHINY_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ALOLA_RAICHU, "partner", "", 1, EvolutionItem.SHINY_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.RAICHU, "", "", 1, EvolutionItem.THUNDER_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.RAICHU, "partner", "", 1, EvolutionItem.THUNDER_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.NIDORINA]: [
    new SpeciesEvolution(SpeciesId.NIDOQUEEN, 1, EvolutionItem.MOON_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.NIDORINO]: [
    new SpeciesEvolution(SpeciesId.NIDOKING, 1, EvolutionItem.MOON_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.CLEFAIRY]: [
    new SpeciesEvolution(SpeciesId.CLEFABLE, 1, EvolutionItem.MOON_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.VULPIX]: [
    new SpeciesEvolution(SpeciesId.NINETALES, 1, EvolutionItem.FIRE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.JIGGLYPUFF]: [
    new SpeciesEvolution(SpeciesId.WIGGLYTUFF, 1, EvolutionItem.MOON_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.GLOOM]: [
    new SpeciesEvolution(SpeciesId.VILEPLUME, 1, EvolutionItem.LEAF_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesEvolution(SpeciesId.BELLOSSOM, 1, EvolutionItem.SUN_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.GROWLITHE]: [
    new SpeciesEvolution(SpeciesId.ARCANINE, 1, EvolutionItem.FIRE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.POLIWHIRL]: [
    new SpeciesEvolution(SpeciesId.POLIWRATH, 1, EvolutionItem.WATER_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesEvolution(SpeciesId.POLITOED, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.WEEPINBELL]: [
    new SpeciesEvolution(SpeciesId.VICTREEBEL, 1, EvolutionItem.LEAF_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.MAGNETON]: [
    new SpeciesEvolution(SpeciesId.MAGNEZONE, 1, EvolutionItem.THUNDER_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.SHELLDER]: [
    new SpeciesEvolution(SpeciesId.CLOYSTER, 1, EvolutionItem.WATER_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.EXEGGCUTE]: [
    new SpeciesEvolution(SpeciesId.ALOLA_EXEGGUTOR, 1, EvolutionItem.SUN_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesEvolution(SpeciesId.EXEGGUTOR, 1, EvolutionItem.LEAF_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.TANGELA]: [
    new SpeciesEvolution(SpeciesId.TANGROWTH, 34, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.ANCIENT_POWER : false), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.LICKITUNG]: [
    new SpeciesEvolution(SpeciesId.LICKILICKY, 32, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.ROLLOUT : false), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.STARYU]: [
    new SpeciesEvolution(SpeciesId.STARMIE, 1, EvolutionItem.WATER_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.EEVEE]: [
    new SpeciesFormEvolution(SpeciesId.SYLVEON, "", "", 1, null, new SpeciesFriendshipEvolutionCondition(120, p =>  p.move? p.move.type === Type.FAIRY : false), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.SYLVEON, "partner", "", 1, null, new SpeciesFriendshipEvolutionCondition(120, p => p.move? p.move.type === Type.FAIRY : false), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ESPEON, "", "", 1, null, new SpeciesFriendshipEvolutionCondition(120, p => getTimeOfDay() === TimeOfDay.DAY), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ESPEON, "partner", "", 1, null, new SpeciesFriendshipEvolutionCondition(120, p => getTimeOfDay() === TimeOfDay.DAY), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.UMBREON, "", "", 1, null, new SpeciesFriendshipEvolutionCondition(120, p => getTimeOfDay() === TimeOfDay.NIGHT), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.UMBREON, "partner", "", 1, null, new SpeciesFriendshipEvolutionCondition(120, p => getTimeOfDay() === TimeOfDay.NIGHT), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.VAPOREON, "", "", 1, EvolutionItem.WATER_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.VAPOREON, "partner", "", 1, EvolutionItem.WATER_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.JOLTEON, "", "", 1, EvolutionItem.THUNDER_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.JOLTEON, "partner", "", 1, EvolutionItem.THUNDER_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.FLAREON, "", "", 1, EvolutionItem.FIRE_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.FLAREON, "partner", "", 1, EvolutionItem.FIRE_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.LEAFEON, "", "", 1, EvolutionItem.LEAF_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.LEAFEON, "partner", "", 1, EvolutionItem.LEAF_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.GLACEON, "", "", 1, EvolutionItem.ICE_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.GLACEON, "partner", "", 1, EvolutionItem.ICE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.TOGETIC]: [
    new SpeciesEvolution(SpeciesId.TOGEKISS, 1, EvolutionItem.SHINY_STONE, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.AIPOM]: [
    new SpeciesEvolution(SpeciesId.AMBIPOM, 32, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.DOUBLE_HIT : false), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.SUNKERN]: [
    new SpeciesEvolution(SpeciesId.SUNFLORA, 1, EvolutionItem.SUN_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.YANMA]: [
    new SpeciesEvolution(SpeciesId.YANMEGA, 33, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.ANCIENT_POWER : false), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.MURKROW]: [
    new SpeciesEvolution(SpeciesId.HONCHKROW, 1, EvolutionItem.DUSK_STONE, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.MISDREAVUS]: [
    new SpeciesEvolution(SpeciesId.MISMAGIUS, 1, EvolutionItem.DUSK_STONE, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.GIRAFARIG]: [
    new SpeciesEvolution(SpeciesId.FARIGIRAF, 32, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.TWIN_BEAM : false), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.DUNSPARCE]: [
    new SpeciesFormEvolution(SpeciesId.DUDUNSPARCE, "", "three-segment", 32, null, null, SpeciesWildEvolutionDelay.LONG),
     //new SpeciesEvolutionCondition(p => {
    //   let ret = false;
    //   if (p.moveset.filter(m => m?.moveId === Moves.HYPER_DRILL).length > 0) {
    //     p.scene.executeWithSeedOffset(() => ret = !Utils.randSeedInt(4), p.id);
    //   }
    //   return ret;
    // })
    //new SpeciesWildEvolutionDelay.LONG),
    new SpeciesEvolution(SpeciesId.DUDUNSPARCE, 32, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.HYPER_DRILL : false), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.GLIGAR]: [
    new SpeciesEvolution(SpeciesId.GLISCOR, 1, EvolutionItem.RAZOR_FANG, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT /* Razor fang at night*/), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.SNEASEL]: [
    new SpeciesEvolution(SpeciesId.WEAVILE, 1, EvolutionItem.RAZOR_CLAW, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT /* Razor claw at night*/), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.URSARING]: [
    new SpeciesEvolution(SpeciesId.URSALUNA, 1, EvolutionItem.PEAT_BLOCK, null, SpeciesWildEvolutionDelay.VERY_LONG) //Ursaring does not evolve into Bloodmoon Ursaluna
  ],
  [SpeciesId.PILOSWINE]: [
    new SpeciesEvolution(SpeciesId.MAMOSWINE, 1, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.ANCIENT_POWER : false), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.STANTLER]: [
    new SpeciesEvolution(SpeciesId.WYRDEER, 25, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.PSYSHIELD_BASH : false), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.LOMBRE]: [
    new SpeciesEvolution(SpeciesId.LUDICOLO, 1, EvolutionItem.WATER_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.NUZLEAF]: [
    new SpeciesEvolution(SpeciesId.SHIFTRY, 1, EvolutionItem.LEAF_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.NOSEPASS]: [
    new SpeciesEvolution(SpeciesId.PROBOPASS, 1, EvolutionItem.THUNDER_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.SKITTY]: [
    new SpeciesEvolution(SpeciesId.DELCATTY, 1, EvolutionItem.MOON_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.ROSELIA]: [
    new SpeciesEvolution(SpeciesId.ROSERADE, 1, EvolutionItem.SHINY_STONE, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.BONSLY]: [
    new SpeciesEvolution(SpeciesId.SUDOWOODO, 1, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.MIMIC : false), SpeciesWildEvolutionDelay.MEDIUM)
  ],
  [SpeciesId.MIME_JR]: [
    new SpeciesEvolution(SpeciesId.GALAR_MR_MIME, 1, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.MIMIC : false && (getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT)), SpeciesWildEvolutionDelay.MEDIUM),
    new SpeciesEvolution(SpeciesId.MR_MIME, 1, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.MIMIC : false && (getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY)), SpeciesWildEvolutionDelay.MEDIUM)
  ],
  [SpeciesId.PANSAGE]: [
    new SpeciesEvolution(SpeciesId.SIMISAGE, 1, EvolutionItem.LEAF_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.PANSEAR]: [
    new SpeciesEvolution(SpeciesId.SIMISEAR, 1, EvolutionItem.FIRE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.PANPOUR]: [
    new SpeciesEvolution(SpeciesId.SIMIPOUR, 1, EvolutionItem.WATER_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.MUNNA]: [
    new SpeciesEvolution(SpeciesId.MUSHARNA, 1, EvolutionItem.MOON_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.COTTONEE]: [
    new SpeciesEvolution(SpeciesId.WHIMSICOTT, 1, EvolutionItem.SUN_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.PETILIL]: [
    new SpeciesEvolution(SpeciesId.HISUI_LILLIGANT, 1, EvolutionItem.SHINY_STONE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesEvolution(SpeciesId.LILLIGANT, 1, EvolutionItem.SUN_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.BASCULIN]: [
    new SpeciesFormEvolution(SpeciesId.BASCULEGION, "white-striped", "female", 40, null, new SpeciesEvolutionCondition(p => p.gender === Gender.FEMALE, p => p.gender = Gender.FEMALE), SpeciesWildEvolutionDelay.VERY_LONG),
    new SpeciesFormEvolution(SpeciesId.BASCULEGION, "white-striped", "male", 40, null, new SpeciesEvolutionCondition(p => p.gender === Gender.MALE, p => p.gender = Gender.MALE), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.MINCCINO]: [
    new SpeciesEvolution(SpeciesId.CINCCINO, 1, EvolutionItem.SHINY_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.EELEKTRIK]: [
    new SpeciesEvolution(SpeciesId.EELEKTROSS, 1, EvolutionItem.THUNDER_STONE, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.LAMPENT]: [
    new SpeciesEvolution(SpeciesId.CHANDELURE, 1, EvolutionItem.DUSK_STONE, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.FLOETTE]: [
    new SpeciesEvolution(SpeciesId.FLORGES, 1, EvolutionItem.SHINY_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.DOUBLADE]: [
    new SpeciesEvolution(SpeciesId.AEGISLASH, 1, EvolutionItem.DUSK_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.HELIOPTILE]: [
    new SpeciesEvolution(SpeciesId.HELIOLISK, 1, EvolutionItem.SUN_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.CHARJABUG]: [
    new SpeciesEvolution(SpeciesId.VIKAVOLT, 1, EvolutionItem.THUNDER_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.CRABRAWLER]: [
    new SpeciesEvolution(SpeciesId.CRABOMINABLE, 1, EvolutionItem.ICE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.ROCKRUFF]: [
    new SpeciesFormEvolution(SpeciesId.LYCANROC, "", "midday", 25, null, null),// new SpeciesEvolutionCondition(p => (getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY) && (p.formIndex === 0))),
    new SpeciesFormEvolution(SpeciesId.LYCANROC, "own-tempo", "dusk", 25, null, null),//new SpeciesEvolutionCondition(p =>  p.formIndex === 1)),
    new SpeciesFormEvolution(SpeciesId.LYCANROC, "", "midnight", 25, null, null),// new SpeciesEvolutionCondition(p => (getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT) && (p.formIndex === 0)))
  ],
  [SpeciesId.STEENEE]: [
    new SpeciesEvolution(SpeciesId.TSAREENA, 28, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.STOMP : false), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.POIPOLE]: [
    new SpeciesEvolution(SpeciesId.NAGANADEL, 1, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.DRAGON_PULSE : false), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.ALOLA_SANDSHREW]: [
    new SpeciesEvolution(SpeciesId.ALOLA_SANDSLASH, 1, EvolutionItem.ICE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.ALOLA_VULPIX]: [
    new SpeciesEvolution(SpeciesId.ALOLA_NINETALES, 1, EvolutionItem.ICE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.APPLIN]: [
    new SpeciesEvolution(SpeciesId.DIPPLIN, 1, EvolutionItem.SYRUPY_APPLE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesEvolution(SpeciesId.FLAPPLE, 1, EvolutionItem.TART_APPLE, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesEvolution(SpeciesId.APPLETUN, 1, EvolutionItem.SWEET_APPLE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.CLOBBOPUS]: [
    new SpeciesEvolution(SpeciesId.GRAPPLOCT, 35, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.TAUNT : false)/*Once Taunt is implemented, change evo level to 1 and delay to LONG*/)
  ],
  [SpeciesId.SINISTEA]: [
    new SpeciesFormEvolution(SpeciesId.POLTEAGEIST, "phony", "phony", 1, EvolutionItem.CRACKED_POT, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.POLTEAGEIST, "antique", "antique", 1, EvolutionItem.CHIPPED_POT, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.MILCERY]: [
    new SpeciesFormEvolution(SpeciesId.ALCREMIE, "", "vanilla-cream", 1, EvolutionItem.STRAWBERRY_SWEET, null),// new SpeciesEvolutionCondition(p => biomeType === Biome.TOWN || biomeType === Biome.PLAINS || biomeType === Biome.GRASS || biomeType === Biome.TALL_GRASS || biomeType === Biome.METROPOLIS), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ALCREMIE, "", "ruby-cream", 1, EvolutionItem.STRAWBERRY_SWEET, null),// new SpeciesEvolutionCondition(p => biomeType === Biome.BADLANDS || biomeType === Biome.VOLCANO || biomeType === Biome.GRAVEYARD || biomeType === Biome.FACTORY || biomeType === Biome.SLUM), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ALCREMIE, "", "matcha-cream", 1, EvolutionItem.STRAWBERRY_SWEET, null),// new SpeciesEvolutionCondition(p => biomeType === Biome.FOREST || biomeType === Biome.SWAMP || biomeType === Biome.MEADOW || biomeType === Biome.JUNGLE), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ALCREMIE, "", "mint-cream", 1, EvolutionItem.STRAWBERRY_SWEET, null),// new SpeciesEvolutionCondition(p => biomeType === Biome.SEA || biomeType === Biome.BEACH || biomeType === Biome.LAKE || biomeType === Biome.SEABED), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ALCREMIE, "", "lemon-cream", 1, EvolutionItem.STRAWBERRY_SWEET, null),// new SpeciesEvolutionCondition(p => biomeType === Biome.DESERT || biomeType === Biome.POWER_PLANT || biomeType === Biome.DOJO || biomeType === Biome.RUINS || biomeType === Biome.CONSTRUCTION_SITE), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ALCREMIE, "", "salted-cream", 1, EvolutionItem.STRAWBERRY_SWEET, null),// new SpeciesEvolutionCondition(p => biomeType === Biome.MOUNTAIN || biomeType === Biome.CAVE || biomeType === Biome.ICE_CAVE || biomeType === Biome.FAIRY_CAVE || biomeType === Biome.SNOWY_FOREST), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ALCREMIE, "", "ruby-swirl", 1, EvolutionItem.STRAWBERRY_SWEET, null),// new SpeciesEvolutionCondition(p => biomeType === Biome.WASTELAND || biomeType === Biome.LABORATORY), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ALCREMIE, "", "caramel-swirl", 1, EvolutionItem.STRAWBERRY_SWEET, null),// new SpeciesEvolutionCondition(p => biomeType === Biome.TEMPLE || biomeType === Biome.ISLAND), SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.ALCREMIE, "", "rainbow-swirl", 1, EvolutionItem.STRAWBERRY_SWEET, null),// new SpeciesEvolutionCondition(p => biomeType === Biome.ABYSS || biomeType === Biome.SPACE || biomeType === Biome.END), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.DURALUDON]: [
    new SpeciesFormEvolution(SpeciesId.ARCHALUDON, "", "", 1, EvolutionItem.METAL_ALLOY, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.KUBFU]: [
    new SpeciesFormEvolution(SpeciesId.URSHIFU, "", "single-strike", 1, EvolutionItem.SCROLL_OF_DARKNESS, null, SpeciesWildEvolutionDelay.VERY_LONG),
    new SpeciesFormEvolution(SpeciesId.URSHIFU, "", "rapid-strike", 1, EvolutionItem.SCROLL_OF_WATERS, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.GALAR_DARUMAKA]: [
    new SpeciesEvolution(SpeciesId.GALAR_DARMANITAN, 1, EvolutionItem.ICE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.HISUI_GROWLITHE]: [
    new SpeciesEvolution(SpeciesId.HISUI_ARCANINE, 1, EvolutionItem.FIRE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.HISUI_VOLTORB]: [
    new SpeciesEvolution(SpeciesId.HISUI_ELECTRODE, 1, EvolutionItem.LEAF_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.HISUI_QWILFISH]: [
    new SpeciesEvolution(SpeciesId.OVERQWIL, 28, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.BARB_BARRAGE : false), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.HISUI_SNEASEL]: [
    new SpeciesEvolution(SpeciesId.SNEASLER, 1, EvolutionItem.RAZOR_CLAW, new SpeciesEvolutionCondition(p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY /* Razor claw at day*/), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.CHARCADET]: [
    new SpeciesEvolution(SpeciesId.ARMAROUGE, 1, EvolutionItem.AUSPICIOUS_ARMOR, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesEvolution(SpeciesId.CERULEDGE, 1, EvolutionItem.MALICIOUS_ARMOR, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.TADBULB]: [
    new SpeciesEvolution(SpeciesId.BELLIBOLT, 1, EvolutionItem.THUNDER_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.CAPSAKID]: [
    new SpeciesEvolution(SpeciesId.SCOVILLAIN, 1, EvolutionItem.FIRE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.CETODDLE]: [
    new SpeciesEvolution(SpeciesId.CETITAN, 1, EvolutionItem.ICE_STONE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.POLTCHAGEIST]: [
    new SpeciesFormEvolution(SpeciesId.SINISTCHA, "counterfeit", "unremarkable", 1, EvolutionItem.UNREMARKABLE_TEACUP, null, SpeciesWildEvolutionDelay.LONG),
    new SpeciesFormEvolution(SpeciesId.SINISTCHA, "artisan", "masterpiece", 1, EvolutionItem.MASTERPIECE_TEACUP, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.DIPPLIN]: [
    new SpeciesEvolution(SpeciesId.HYDRAPPLE, 1, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.DRAGON_CHEER : false), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.KADABRA]: [
    new SpeciesEvolution(SpeciesId.ALAKAZAM, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.MACHOKE]: [
    new SpeciesEvolution(SpeciesId.MACHAMP, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.GRAVELER]: [
    new SpeciesEvolution(SpeciesId.GOLEM, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.HAUNTER]: [
    new SpeciesEvolution(SpeciesId.GENGAR, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.ONIX]: [
    new SpeciesEvolution(SpeciesId.STEELIX, 1, EvolutionItem.LINKING_CORD, new SpeciesEvolutionCondition(
      p => p.move? p.move.type === Type.STEEL : false),
    SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.RHYDON]: [
    new SpeciesEvolution(SpeciesId.RHYPERIOR, 1, EvolutionItem.PROTECTOR, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.SEADRA]: [
    new SpeciesEvolution(SpeciesId.KINGDRA, 1, EvolutionItem.DRAGON_SCALE, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.SCYTHER]: [
    new SpeciesEvolution(SpeciesId.SCIZOR, 1, EvolutionItem.LINKING_CORD, new SpeciesEvolutionCondition(
      p => p.move? p.move.type === Type.STEEL : false),
    SpeciesWildEvolutionDelay.VERY_LONG),
    new SpeciesEvolution(SpeciesId.KLEAVOR, 1, EvolutionItem.BLACK_AUGURITE, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.ELECTABUZZ]: [
    new SpeciesEvolution(SpeciesId.ELECTIVIRE, 1, EvolutionItem.ELECTIRIZER, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.MAGMAR]: [
    new SpeciesEvolution(SpeciesId.MAGMORTAR, 1, EvolutionItem.MAGMARIZER, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.PORYGON]: [
    new SpeciesEvolution(SpeciesId.PORYGON2, 1, EvolutionItem.UPGRADE, null, SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.PORYGON2]: [
    new SpeciesEvolution(SpeciesId.PORYGON_Z, 1, EvolutionItem.DUBIOUS_DISC, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.FEEBAS]: [
    new SpeciesEvolution(SpeciesId.MILOTIC, 1, EvolutionItem.PRISM_SCALE, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.DUSCLOPS]: [
    new SpeciesEvolution(SpeciesId.DUSKNOIR, 1, EvolutionItem.REAPER_CLOTH, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.CLAMPERL]: [
    new SpeciesEvolution(SpeciesId.HUNTAIL, 1, EvolutionItem.LINKING_CORD, new SpeciesEvolutionCondition(p => p.gender === Gender.MALE, p => p.gender = Gender.MALE /* Deep Sea Tooth */), SpeciesWildEvolutionDelay.VERY_LONG),
    new SpeciesEvolution(SpeciesId.GOREBYSS, 1, EvolutionItem.LINKING_CORD, new SpeciesEvolutionCondition(p => p.gender === Gender.FEMALE, p => p.gender = Gender.FEMALE /* Deep Sea Scale */), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.BOLDORE]: [
    new SpeciesEvolution(SpeciesId.GIGALITH, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.GURDURR]: [
    new SpeciesEvolution(SpeciesId.CONKELDURR, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.KARRABLAST]: [
    new SpeciesEvolution(SpeciesId.ESCAVALIER, 1, EvolutionItem.LINKING_CORD, null), //new SpeciesEvolutionCondition(p => !!p.scene.gameData.dexData[SpeciesId.SHELMET].caughtAttr), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.SHELMET]: [
    new SpeciesEvolution(SpeciesId.ACCELGOR, 1, EvolutionItem.LINKING_CORD, null),// new SpeciesEvolutionCondition(p => !!p.scene.gameData.dexData[SpeciesId.KARRABLAST].caughtAttr), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.SPRITZEE]: [
    new SpeciesEvolution(SpeciesId.AROMATISSE, 1, EvolutionItem.SACHET, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.SWIRLIX]: [
    new SpeciesEvolution(SpeciesId.SLURPUFF, 1, EvolutionItem.WHIPPED_DREAM, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.PHANTUMP]: [
    new SpeciesEvolution(SpeciesId.TREVENANT, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.PUMPKABOO]: [
    new SpeciesEvolution(SpeciesId.GOURGEIST, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.ALOLA_GRAVELER]: [
    new SpeciesEvolution(SpeciesId.ALOLA_GOLEM, 1, EvolutionItem.LINKING_CORD, null, SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.PRIMEAPE]: [
    new SpeciesEvolution(SpeciesId.ANNIHILAPE, 35, null, new SpeciesEvolutionCondition(p => p.move? p.move.id === Moves.RAGE_FIST : false), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.GOLBAT]: [
    new SpeciesEvolution(SpeciesId.CROBAT, 1, null, new SpeciesFriendshipEvolutionCondition(120), SpeciesWildEvolutionDelay.VERY_LONG)
  ],
  [SpeciesId.CHANSEY]: [
    new SpeciesEvolution(SpeciesId.BLISSEY, 1, null, new SpeciesFriendshipEvolutionCondition(200), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.PICHU]: [
    new SpeciesFormEvolution(SpeciesId.PIKACHU, "spiky", "partner", 1, null, new SpeciesFriendshipEvolutionCondition(90), SpeciesWildEvolutionDelay.SHORT),
    new SpeciesFormEvolution(SpeciesId.PIKACHU, "", "", 1, null, new SpeciesFriendshipEvolutionCondition(90), SpeciesWildEvolutionDelay.SHORT),
  ],
  [SpeciesId.CLEFFA]: [
    new SpeciesEvolution(SpeciesId.CLEFAIRY, 1, null, new SpeciesFriendshipEvolutionCondition(160), SpeciesWildEvolutionDelay.SHORT)
  ],
  [SpeciesId.IGGLYBUFF]: [
    new SpeciesEvolution(SpeciesId.JIGGLYPUFF, 1, null, new SpeciesFriendshipEvolutionCondition(70), SpeciesWildEvolutionDelay.SHORT)
  ],
  [SpeciesId.TOGEPI]: [
    new SpeciesEvolution(SpeciesId.TOGETIC, 1, null, new SpeciesFriendshipEvolutionCondition(70), SpeciesWildEvolutionDelay.SHORT)
  ],
  [SpeciesId.AZURILL]: [
    new SpeciesEvolution(SpeciesId.MARILL, 1, null, new SpeciesFriendshipEvolutionCondition(70), SpeciesWildEvolutionDelay.SHORT)
  ],
  [SpeciesId.BUDEW]: [
    new SpeciesEvolution(SpeciesId.ROSELIA, 1, null, new SpeciesFriendshipEvolutionCondition(70, p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY), SpeciesWildEvolutionDelay.SHORT)
  ],
  [SpeciesId.BUNEARY]: [
    new SpeciesEvolution(SpeciesId.LOPUNNY, 1, null, new SpeciesFriendshipEvolutionCondition(70), SpeciesWildEvolutionDelay.MEDIUM)
  ],
  [SpeciesId.CHINGLING]: [
    new SpeciesEvolution(SpeciesId.CHIMECHO, 1, null, new SpeciesFriendshipEvolutionCondition(90, p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT), SpeciesWildEvolutionDelay.MEDIUM)
  ],
  [SpeciesId.HAPPINY]: [
    new SpeciesEvolution(SpeciesId.CHANSEY, 1, null, new SpeciesFriendshipEvolutionCondition(160), SpeciesWildEvolutionDelay.SHORT)
  ],
  [SpeciesId.MUNCHLAX]: [
    new SpeciesEvolution(SpeciesId.SNORLAX, 1, null, new SpeciesFriendshipEvolutionCondition(120), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.RIOLU]: [
    new SpeciesEvolution(SpeciesId.LUCARIO, 1, null, new SpeciesFriendshipEvolutionCondition(120, p => getTimeOfDay() === TimeOfDay.DAWN || getTimeOfDay() === TimeOfDay.DAY), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.WOOBAT]: [
    new SpeciesEvolution(SpeciesId.SWOOBAT, 1, null, new SpeciesFriendshipEvolutionCondition(90), SpeciesWildEvolutionDelay.MEDIUM)
  ],
  [SpeciesId.SWADLOON]: [
    new SpeciesEvolution(SpeciesId.LEAVANNY, 1, null, new SpeciesFriendshipEvolutionCondition(120), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.TYPE_NULL]: [
    new SpeciesEvolution(SpeciesId.SILVALLY, 1, null, new SpeciesFriendshipEvolutionCondition(100), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.ALOLA_MEOWTH]: [
    new SpeciesEvolution(SpeciesId.ALOLA_PERSIAN, 1, null, new SpeciesFriendshipEvolutionCondition(120), SpeciesWildEvolutionDelay.LONG)
  ],
  [SpeciesId.SNOM]: [
    new SpeciesEvolution(SpeciesId.FROSMOTH, 1, null, new SpeciesFriendshipEvolutionCondition(90, p => getTimeOfDay() === TimeOfDay.DUSK || getTimeOfDay() === TimeOfDay.NIGHT), SpeciesWildEvolutionDelay.MEDIUM)
  ],
  [SpeciesId.GIMMIGHOUL]: [
    new SpeciesFormEvolution(SpeciesId.GHOLDENGO, "chest", "", 1, null, null,
    //     new SpeciesEvolutionCondition(p => p.evoCounter
    //   + p.getHeldItems().filter(m => m instanceof DamageMoneyRewardModifier).length
    //   + p.scene.findModifiers(m => m instanceof MoneyMultiplierModifier
    //     || m instanceof ExtraModifierModifier || m instanceof TempExtraModifierModifier).length > 9), 
        SpeciesWildEvolutionDelay.VERY_LONG),
    new SpeciesFormEvolution(SpeciesId.GHOLDENGO, "roaming", "", 1, null, null,
    //      new SpeciesEvolutionCondition(p => p.evoCounter
    //   + p.getHeldItems().filter(m => m instanceof DamageMoneyRewardModifier).length
    //   + p.scene.findModifiers(m => m instanceof MoneyMultiplierModifier
    //     || m instanceof ExtraModifierModifier || m instanceof TempExtraModifierModifier).length > 9), 
        SpeciesWildEvolutionDelay.VERY_LONG)
  ]
};

interface PokemonPrevolutions {
  [key: string]: SpeciesId
}

export const pokemonPrevolutions: PokemonPrevolutions = {};

export function initPokemonPrevolutions(): void {
  const megaFormKeys = [ SpeciesFormKey.MEGA, "", SpeciesFormKey.MEGA_X, "", SpeciesFormKey.MEGA_Y ].map(sfk => sfk as string);
  const prevolutionKeys = Object.keys(pokemonEvolutions);
  prevolutionKeys.forEach(pk => {
    const evolutions = pokemonEvolutions[pk];
    for (const ev of evolutions) {
      if (ev.evoFormKey && megaFormKeys.indexOf(ev.evoFormKey) > -1) {
        continue;
      }
      pokemonPrevolutions[ev.speciesId] = parseInt(pk) as SpeciesId;
    }
  });
}
