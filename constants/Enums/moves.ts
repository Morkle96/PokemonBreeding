import { Type } from "./type";

export const allMoves: AttackMove[] = [];

export enum MoveCategory {
  PHYSICAL,
  SPECIAL,
  STATUS
}

export enum MoveTarget {
  /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_target_the_user Moves that target the User} */
  USER,
  OTHER,
  ALL_OTHERS,
  NEAR_OTHER,
  /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_target_all_adjacent_Pok%C3%A9mon Moves that target all adjacent Pokemon} */
  ALL_NEAR_OTHERS,
  NEAR_ENEMY,
  /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_target_all_adjacent_foes Moves that target all adjacent foes} */
  ALL_NEAR_ENEMIES,
  RANDOM_NEAR_ENEMY,
  ALL_ENEMIES,
  /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Counterattacks Counterattacks} */
  ATTACKER,
  /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_target_one_adjacent_ally Moves that target one adjacent ally} */
  NEAR_ALLY,
  ALLY,
  USER_OR_NEAR_ALLY,
  USER_AND_ALLIES,
  /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Moves_that_target_all_Pok%C3%A9mon Moves that target all Pokemon} */
  ALL,
  USER_SIDE,
  /** {@link https://bulbapedia.bulbagarden.net/wiki/Category:Entry_hazard-creating_moves Entry hazard-creating moves} */
  ENEMY_SIDE,
  BOTH_SIDES,
  PARTY,
  CURSE
}

export enum StatusEffect {
  NONE,
  POISON,
  TOXIC,
  PARALYSIS,
  SLEEP,
  FREEZE,
  BURN,
  FAINT,
}

export default class Move {
  public id: Moves;
  public type: Type;
  public category: MoveCategory;
  public moveTarget: MoveTarget;
  public power: number;
  public accuracy: number;
  public pp: number;

  public chance: number;
  public priority: number;
  public generation: number;

  constructor(id: Moves, type: Type, category: MoveCategory, defaultMoveTarget: MoveTarget, power: number, accuracy: number, pp: number, chance: number, priority: number, generation: number) {
    this.id = id;
    this.type = type;
    this.category = category;
    this.moveTarget = defaultMoveTarget;
    this.power = power;
    this.accuracy = accuracy;
    this.pp = pp;
    this.chance = chance;
    this.priority = priority;
    this.generation = generation;
  }
}


export class AttackMove extends Move {
  constructor(id: Moves, type: Type, category: MoveCategory, power: number, accuracy: number, pp: number, chance: number, priority: number, generation: number) {
    super(id, type, category, MoveTarget.NEAR_OTHER, power, accuracy, pp, chance, priority, generation);
  }
}


export function initMoves() {
  allMoves.push(
    new AttackMove(Moves.POUND, Type.NORMAL, MoveCategory.PHYSICAL, 40, 100, 35, -1, 0, 1),
    new AttackMove(Moves.KARATE_CHOP, Type.FIGHTING, MoveCategory.PHYSICAL, 50, 100, 25, -1, 0, 1),
    new AttackMove(Moves.DOUBLE_SLAP, Type.NORMAL, MoveCategory.PHYSICAL, 15, 85, 10, -1, 0, 1),
    new AttackMove(Moves.COMET_PUNCH, Type.NORMAL, MoveCategory.PHYSICAL, 18, 85, 15, -1, 0, 1),
    new AttackMove(Moves.MEGA_PUNCH, Type.NORMAL, MoveCategory.PHYSICAL, 80, 85, 20, -1, 0, 1),
    new AttackMove(Moves.PAY_DAY, Type.NORMAL, MoveCategory.PHYSICAL, 40, 100, 20, -1, 0, 1),
    new AttackMove(Moves.FIRE_PUNCH, Type.FIRE, MoveCategory.PHYSICAL, 75, 100, 15, 10, 0, 1),
    new AttackMove(Moves.ICE_PUNCH, Type.ICE, MoveCategory.PHYSICAL, 75, 100, 15, 10, 0, 1),
    new AttackMove(Moves.THUNDER_PUNCH, Type.ELECTRIC, MoveCategory.PHYSICAL, 75, 100, 15, 10, 0, 1),
    new AttackMove(Moves.SCRATCH, Type.NORMAL, MoveCategory.PHYSICAL, 40, 100, 35, -1, 0, 1),
    new AttackMove(Moves.VISE_GRIP, Type.NORMAL, MoveCategory.PHYSICAL, 55, 100, 30, -1, 0, 1),
    new AttackMove(Moves.GUILLOTINE, Type.NORMAL, MoveCategory.PHYSICAL, 200, 30, 5, -1, 0, 1),
    new AttackMove(Moves.CUT, Type.NORMAL, MoveCategory.PHYSICAL, 50, 95, 30, -1, 0, 1),
    new AttackMove(Moves.GUST, Type.FLYING, MoveCategory.SPECIAL, 40, 100, 35, -1, 0, 1),
    new AttackMove(Moves.WING_ATTACK, Type.FLYING, MoveCategory.PHYSICAL, 60, 100, 35, -1, 0, 1),
    new AttackMove(Moves.BIND, Type.NORMAL, MoveCategory.PHYSICAL, 15, 85, 20, -1, 0, 1),
    new AttackMove(Moves.SLAM, Type.NORMAL, MoveCategory.PHYSICAL, 80, 75, 20, -1, 0, 1),
    new AttackMove(Moves.VINE_WHIP, Type.GRASS, MoveCategory.PHYSICAL, 45, 100, 25, -1, 0, 1),
    new AttackMove(Moves.STOMP, Type.NORMAL, MoveCategory.PHYSICAL, 65, 100, 20, 30, 0, 1),
    new AttackMove(Moves.DOUBLE_KICK, Type.FIGHTING, MoveCategory.PHYSICAL, 30, 100, 30, -1, 0, 1),
    new AttackMove(Moves.MEGA_KICK, Type.NORMAL, MoveCategory.PHYSICAL, 120, 75, 5, -1, 0, 1),
    new AttackMove(Moves.JUMP_KICK, Type.FIGHTING, MoveCategory.PHYSICAL, 100, 95, 10, -1, 0, 1),
    new AttackMove(Moves.ROLLING_KICK, Type.FIGHTING, MoveCategory.PHYSICAL, 60, 85, 15, 30, 0, 1),
    new AttackMove(Moves.HEADBUTT, Type.NORMAL, MoveCategory.PHYSICAL, 70, 100, 15, 30, 0, 1),
    new AttackMove(Moves.HORN_ATTACK, Type.NORMAL, MoveCategory.PHYSICAL, 65, 100, 25, -1, 0, 1),
    new AttackMove(Moves.FURY_ATTACK, Type.NORMAL, MoveCategory.PHYSICAL, 15, 85, 20, -1, 0, 1),
    new AttackMove(Moves.HORN_DRILL, Type.NORMAL, MoveCategory.PHYSICAL, 200, 30, 5, -1, 0, 1),
    new AttackMove(Moves.TACKLE, Type.NORMAL, MoveCategory.PHYSICAL, 40, 100, 35, -1, 0, 1),
    new AttackMove(Moves.BODY_SLAM, Type.NORMAL, MoveCategory.PHYSICAL, 85, 100, 15, 30, 0, 1),
    new AttackMove(Moves.WRAP, Type.NORMAL, MoveCategory.PHYSICAL, 15, 90, 20, -1, 0, 1),
    new AttackMove(Moves.TAKE_DOWN, Type.NORMAL, MoveCategory.PHYSICAL, 90, 85, 20, -1, 0, 1),
    new AttackMove(Moves.THRASH, Type.NORMAL, MoveCategory.PHYSICAL, 120, 100, 10, -1, 0, 1),
    new AttackMove(Moves.DOUBLE_EDGE, Type.NORMAL, MoveCategory.PHYSICAL, 120, 100, 15, -1, 0, 1),
    new AttackMove(Moves.POISON_STING, Type.POISON, MoveCategory.PHYSICAL, 15, 100, 35, 30, 0, 1),
    new AttackMove(Moves.TWINEEDLE, Type.BUG, MoveCategory.PHYSICAL, 25, 100, 20, 20, 0, 1),
    new AttackMove(Moves.PIN_MISSILE, Type.BUG, MoveCategory.PHYSICAL, 25, 95, 20, -1, 0, 1),
    new AttackMove(Moves.BITE, Type.DARK, MoveCategory.PHYSICAL, 60, 100, 25, 30, 0, 1),
    new AttackMove(Moves.SONIC_BOOM, Type.NORMAL, MoveCategory.SPECIAL, -1, 90, 20, -1, 0, 1),
    new AttackMove(Moves.ACID, Type.POISON, MoveCategory.SPECIAL, 40, 100, 30, 10, 0, 1),
    new AttackMove(Moves.EMBER, Type.FIRE, MoveCategory.SPECIAL, 40, 100, 25, 10, 0, 1),
    new AttackMove(Moves.FLAMETHROWER, Type.FIRE, MoveCategory.SPECIAL, 90, 100, 15, 10, 0, 1),
    new AttackMove(Moves.WATER_GUN, Type.WATER, MoveCategory.SPECIAL, 40, 100, 25, -1, 0, 1),
    new AttackMove(Moves.HYDRO_PUMP, Type.WATER, MoveCategory.SPECIAL, 110, 80, 5, -1, 0, 1),
    new AttackMove(Moves.SURF, Type.WATER, MoveCategory.SPECIAL, 90, 100, 15, -1, 0, 1),
    new AttackMove(Moves.ICE_BEAM, Type.ICE, MoveCategory.SPECIAL, 90, 100, 10, 10, 0, 1),
    new AttackMove(Moves.BLIZZARD, Type.ICE, MoveCategory.SPECIAL, 110, 70, 5, 10, 0, 1),
    new AttackMove(Moves.PSYBEAM, Type.PSYCHIC, MoveCategory.SPECIAL, 65, 100, 20, 10, 0, 1),
    new AttackMove(Moves.BUBBLE_BEAM, Type.WATER, MoveCategory.SPECIAL, 65, 100, 20, 10, 0, 1),
    new AttackMove(Moves.AURORA_BEAM, Type.ICE, MoveCategory.SPECIAL, 65, 100, 20, 10, 0, 1),
    new AttackMove(Moves.HYPER_BEAM, Type.NORMAL, MoveCategory.SPECIAL, 150, 90, 5, -1, 0, 1),
    new AttackMove(Moves.PECK, Type.FLYING, MoveCategory.PHYSICAL, 35, 100, 35, -1, 0, 1),
    new AttackMove(Moves.DRILL_PECK, Type.FLYING, MoveCategory.PHYSICAL, 80, 100, 20, -1, 0, 1),
    new AttackMove(Moves.SUBMISSION, Type.FIGHTING, MoveCategory.PHYSICAL, 80, 80, 20, -1, 0, 1),
    new AttackMove(Moves.LOW_KICK, Type.FIGHTING, MoveCategory.PHYSICAL, -1, 100, 20, -1, 0, 1),
    new AttackMove(Moves.COUNTER, Type.FIGHTING, MoveCategory.PHYSICAL, -1, 100, 20, -1, -5, 1),
    new AttackMove(Moves.SEISMIC_TOSS, Type.FIGHTING, MoveCategory.PHYSICAL, -1, 100, 20, -1, 0, 1),
    new AttackMove(Moves.STRENGTH, Type.NORMAL, MoveCategory.PHYSICAL, 80, 100, 15, -1, 0, 1),
    new AttackMove(Moves.ABSORB, Type.GRASS, MoveCategory.SPECIAL, 20, 100, 25, -1, 0, 1),
    new AttackMove(Moves.MEGA_DRAIN, Type.GRASS, MoveCategory.SPECIAL, 40, 100, 15, -1, 0, 1),
    new AttackMove(Moves.RAZOR_LEAF, Type.GRASS, MoveCategory.PHYSICAL, 55, 95, 25, -1, 0, 1),
    new AttackMove(Moves.PETAL_DANCE, Type.GRASS, MoveCategory.SPECIAL, 120, 100, 10, -1, 0, 1),
    new AttackMove(Moves.DRAGON_RAGE, Type.DRAGON, MoveCategory.SPECIAL, -1, 100, 10, -1, 0, 1),
    new AttackMove(Moves.FIRE_SPIN, Type.FIRE, MoveCategory.SPECIAL, 35, 85, 15, -1, 0, 1),
    new AttackMove(Moves.THUNDER_SHOCK, Type.ELECTRIC, MoveCategory.SPECIAL, 40, 100, 30, 10, 0, 1),
    new AttackMove(Moves.THUNDERBOLT, Type.ELECTRIC, MoveCategory.SPECIAL, 90, 100, 15, 10, 0, 1),
    new AttackMove(Moves.THUNDER, Type.ELECTRIC, MoveCategory.SPECIAL, 110, 70, 10, 30, 0, 1),
    new AttackMove(Moves.ROCK_THROW, Type.ROCK, MoveCategory.PHYSICAL, 50, 90, 15, -1, 0, 1),
    new AttackMove(Moves.EARTHQUAKE, Type.GROUND, MoveCategory.PHYSICAL, 100, 100, 10, -1, 0, 1),
    new AttackMove(Moves.FISSURE, Type.GROUND, MoveCategory.PHYSICAL, 200, 30, 5, -1, 0, 1),
    new AttackMove(Moves.CONFUSION, Type.PSYCHIC, MoveCategory.SPECIAL, 50, 100, 25, 10, 0, 1),
    new AttackMove(Moves.PSYCHIC, Type.PSYCHIC, MoveCategory.SPECIAL, 90, 100, 10, 10, 0, 1),
    new AttackMove(Moves.QUICK_ATTACK, Type.NORMAL, MoveCategory.PHYSICAL, 40, 100, 30, -1, 1, 1),
    new AttackMove(Moves.RAGE, Type.NORMAL, MoveCategory.PHYSICAL, 20, 100, 20, -1, 0, 1),
    new AttackMove(Moves.NIGHT_SHADE, Type.GHOST, MoveCategory.SPECIAL, -1, 100, 15, -1, 0, 1),
    new AttackMove(Moves.BIDE, Type.NORMAL, MoveCategory.PHYSICAL, -1, -1, 10, -1, 1, 1),
    new AttackMove(Moves.SELF_DESTRUCT, Type.NORMAL, MoveCategory.PHYSICAL, 200, 100, 5, -1, 0, 1),
    new AttackMove(Moves.EGG_BOMB, Type.NORMAL, MoveCategory.PHYSICAL, 100, 75, 10, -1, 0, 1),
    new AttackMove(Moves.LICK, Type.GHOST, MoveCategory.PHYSICAL, 30, 100, 30, 30, 0, 1),
    new AttackMove(Moves.SMOG, Type.POISON, MoveCategory.SPECIAL, 30, 70, 20, 40, 0, 1),
    new AttackMove(Moves.SLUDGE, Type.POISON, MoveCategory.SPECIAL, 65, 100, 20, 30, 0, 1),
    new AttackMove(Moves.BONE_CLUB, Type.GROUND, MoveCategory.PHYSICAL, 65, 85, 20, 10, 0, 1),
    new AttackMove(Moves.FIRE_BLAST, Type.FIRE, MoveCategory.SPECIAL, 110, 85, 5, 10, 0, 1),
    new AttackMove(Moves.WATERFALL, Type.WATER, MoveCategory.PHYSICAL, 80, 100, 15, 20, 0, 1),
    new AttackMove(Moves.CLAMP, Type.WATER, MoveCategory.PHYSICAL, 35, 85, 15, -1, 0, 1),
    new AttackMove(Moves.SWIFT, Type.NORMAL, MoveCategory.SPECIAL, 60, -1, 20, -1, 0, 1),
    new AttackMove(Moves.SPIKE_CANNON, Type.NORMAL, MoveCategory.PHYSICAL, 20, 100, 15, -1, 0, 1),
    new AttackMove(Moves.CONSTRICT, Type.NORMAL, MoveCategory.PHYSICAL, 10, 100, 35, 10, 0, 1),
    new AttackMove(Moves.HIGH_JUMP_KICK, Type.FIGHTING, MoveCategory.PHYSICAL, 130, 90, 10, -1, 0, 1),
    new AttackMove(Moves.DREAM_EATER, Type.PSYCHIC, MoveCategory.SPECIAL, 100, 100, 15, -1, 0, 1),
    new AttackMove(Moves.BARRAGE, Type.NORMAL, MoveCategory.PHYSICAL, 15, 85, 20, -1, 0, 1),
    new AttackMove(Moves.LEECH_LIFE, Type.BUG, MoveCategory.PHYSICAL, 80, 100, 10, -1, 0, 1),
    new AttackMove(Moves.BUBBLE, Type.WATER, MoveCategory.SPECIAL, 40, 100, 30, 10, 0, 1),
    new AttackMove(Moves.DIZZY_PUNCH, Type.NORMAL, MoveCategory.PHYSICAL, 70, 100, 10, 20, 0, 1),
    new AttackMove(Moves.PSYWAVE, Type.PSYCHIC, MoveCategory.SPECIAL, -1, 100, 15, -1, 0, 1),
    new AttackMove(Moves.CRABHAMMER, Type.WATER, MoveCategory.PHYSICAL, 100, 90, 10, -1, 0, 1),
    new AttackMove(Moves.EXPLOSION, Type.NORMAL, MoveCategory.PHYSICAL, 250, 100, 5, -1, 0, 1),
    new AttackMove(Moves.FURY_SWIPES, Type.NORMAL, MoveCategory.PHYSICAL, 18, 80, 15, -1, 0, 1),
    new AttackMove(Moves.BONEMERANG, Type.GROUND, MoveCategory.PHYSICAL, 50, 90, 10, -1, 0, 1),
    new AttackMove(Moves.ROCK_SLIDE, Type.ROCK, MoveCategory.PHYSICAL, 75, 90, 10, 30, 0, 1),
    new AttackMove(Moves.HYPER_FANG, Type.NORMAL, MoveCategory.PHYSICAL, 80, 90, 15, 10, 0, 1),
    new AttackMove(Moves.TRI_ATTACK, Type.NORMAL, MoveCategory.SPECIAL, 80, 100, 10, 20, 0, 1),
    new AttackMove(Moves.SUPER_FANG, Type.NORMAL, MoveCategory.PHYSICAL, -1, 90, 10, -1, 0, 1),
    new AttackMove(Moves.SLASH, Type.NORMAL, MoveCategory.PHYSICAL, 70, 100, 20, -1, 0, 1),
    new AttackMove(Moves.STRUGGLE, Type.NORMAL, MoveCategory.PHYSICAL, 50, -1, 1, -1, 0, 1),
    new AttackMove(Moves.TRIPLE_KICK, Type.FIGHTING, MoveCategory.PHYSICAL, 10, 90, 10, -1, 0, 2),
    new AttackMove(Moves.THIEF, Type.DARK, MoveCategory.PHYSICAL, 60, 100, 25, -1, 0, 2),
    new AttackMove(Moves.FLAME_WHEEL, Type.FIRE, MoveCategory.PHYSICAL, 60, 100, 25, 10, 0, 2),
    new AttackMove(Moves.SNORE, Type.NORMAL, MoveCategory.SPECIAL, 50, 100, 15, 30, 0, 2),
    new AttackMove(Moves.FLAIL, Type.NORMAL, MoveCategory.PHYSICAL, -1, 100, 15, -1, 0, 2),
    new AttackMove(Moves.AEROBLAST, Type.FLYING, MoveCategory.SPECIAL, 100, 95, 5, -1, 0, 2),
    new AttackMove(Moves.REVERSAL, Type.FIGHTING, MoveCategory.PHYSICAL, -1, 100, 15, -1, 0, 2),
    new AttackMove(Moves.POWDER_SNOW, Type.ICE, MoveCategory.SPECIAL, 40, 100, 25, 10, 0, 2),
    new AttackMove(Moves.MACH_PUNCH, Type.FIGHTING, MoveCategory.PHYSICAL, 40, 100, 30, -1, 1, 2),
    new AttackMove(Moves.FEINT_ATTACK, Type.DARK, MoveCategory.PHYSICAL, 60, -1, 20, -1, 0, 2),
    new AttackMove(Moves.SLUDGE_BOMB, Type.POISON, MoveCategory.SPECIAL, 90, 100, 10, 30, 0, 2),
    new AttackMove(Moves.MUD_SLAP, Type.GROUND, MoveCategory.SPECIAL, 20, 100, 10, 100, 0, 2),
    new AttackMove(Moves.OCTAZOOKA, Type.WATER, MoveCategory.SPECIAL, 65, 85, 10, 50, 0, 2),
    new AttackMove(Moves.ZAP_CANNON, Type.ELECTRIC, MoveCategory.SPECIAL, 120, 50, 5, 100, 0, 2),
    new AttackMove(Moves.ICY_WIND, Type.ICE, MoveCategory.SPECIAL, 55, 95, 15, 100, 0, 2),
    new AttackMove(Moves.BONE_RUSH, Type.GROUND, MoveCategory.PHYSICAL, 25, 90, 10, -1, 0, 2),
    new AttackMove(Moves.OUTRAGE, Type.DRAGON, MoveCategory.PHYSICAL, 120, 100, 10, -1, 0, 2),
    new AttackMove(Moves.GIGA_DRAIN, Type.GRASS, MoveCategory.SPECIAL, 75, 100, 10, -1, 0, 2),
    new AttackMove(Moves.ROLLOUT, Type.ROCK, MoveCategory.PHYSICAL, 30, 90, 20, -1, 0, 2),
    new AttackMove(Moves.FALSE_SWIPE, Type.NORMAL, MoveCategory.PHYSICAL, 40, 100, 40, -1, 0, 2),
    new AttackMove(Moves.SPARK, Type.ELECTRIC, MoveCategory.PHYSICAL, 65, 100, 20, 30, 0, 2),
    new AttackMove(Moves.FURY_CUTTER, Type.BUG, MoveCategory.PHYSICAL, 40, 95, 20, -1, 0, 2),
    new AttackMove(Moves.STEEL_WING, Type.STEEL, MoveCategory.PHYSICAL, 70, 90, 25, 10, 0, 2),
    new AttackMove(Moves.RETURN, Type.NORMAL, MoveCategory.PHYSICAL, -1, 100, 20, -1, 0, 2),
    new AttackMove(Moves.PRESENT, Type.NORMAL, MoveCategory.PHYSICAL, -1, 90, 15, -1, 0, 2),
    new AttackMove(Moves.FRUSTRATION, Type.NORMAL, MoveCategory.PHYSICAL, -1, 100, 20, -1, 0, 2),
    new AttackMove(Moves.SACRED_FIRE, Type.FIRE, MoveCategory.PHYSICAL, 100, 95, 5, 50, 0, 2),
    new AttackMove(Moves.MAGNITUDE, Type.GROUND, MoveCategory.PHYSICAL, -1, 100, 30, -1, 0, 2),
    new AttackMove(Moves.DYNAMIC_PUNCH, Type.FIGHTING, MoveCategory.PHYSICAL, 100, 50, 5, 100, 0, 2),
    new AttackMove(Moves.MEGAHORN, Type.BUG, MoveCategory.PHYSICAL, 120, 85, 10, -1, 0, 2),
    new AttackMove(Moves.DRAGON_BREATH, Type.DRAGON, MoveCategory.SPECIAL, 60, 100, 20, 30, 0, 2),
    new AttackMove(Moves.PURSUIT, Type.DARK, MoveCategory.PHYSICAL, 40, 100, 20, -1, 0, 2),
    new AttackMove(Moves.RAPID_SPIN, Type.NORMAL, MoveCategory.PHYSICAL, 50, 100, 40, 100, 0, 2),
    new AttackMove(Moves.IRON_TAIL, Type.STEEL, MoveCategory.PHYSICAL, 100, 75, 15, 30, 0, 2),
    new AttackMove(Moves.METAL_CLAW, Type.STEEL, MoveCategory.PHYSICAL, 50, 95, 35, 10, 0, 2),
    new AttackMove(Moves.VITAL_THROW, Type.FIGHTING, MoveCategory.PHYSICAL, 70, -1, 10, -1, -1, 2),
    new AttackMove(Moves.HIDDEN_POWER, Type.NORMAL, MoveCategory.SPECIAL, 60, 100, 15, -1, 0, 2),
    new AttackMove(Moves.CROSS_CHOP, Type.FIGHTING, MoveCategory.PHYSICAL, 100, 80, 5, -1, 0, 2),
    new AttackMove(Moves.TWISTER, Type.DRAGON, MoveCategory.SPECIAL, 40, 100, 20, 20, 0, 2),
    new AttackMove(Moves.CRUNCH, Type.DARK, MoveCategory.PHYSICAL, 80, 100, 15, 20, 0, 2),
    new AttackMove(Moves.MIRROR_COAT, Type.PSYCHIC, MoveCategory.SPECIAL, -1, 100, 20, -1, -5, 2),
    new AttackMove(Moves.EXTREME_SPEED, Type.NORMAL, MoveCategory.PHYSICAL, 80, 100, 5, -1, 2, 2),
    new AttackMove(Moves.ANCIENT_POWER, Type.ROCK, MoveCategory.SPECIAL, 60, 100, 5, 10, 0, 2),
    new AttackMove(Moves.SHADOW_BALL, Type.GHOST, MoveCategory.SPECIAL, 80, 100, 15, 20, 0, 2),
    new AttackMove(Moves.FUTURE_SIGHT, Type.PSYCHIC, MoveCategory.SPECIAL, 120, 100, 10, -1, 0, 2),
    new AttackMove(Moves.ROCK_SMASH, Type.FIGHTING, MoveCategory.PHYSICAL, 40, 100, 15, 50, 0, 2),
    new AttackMove(Moves.WHIRLPOOL, Type.WATER, MoveCategory.SPECIAL, 35, 85, 15, -1, 0, 2),
    new AttackMove(Moves.BEAT_UP, Type.DARK, MoveCategory.PHYSICAL, -1, 100, 10, -1, 0, 2),
    new AttackMove(Moves.FAKE_OUT, Type.NORMAL, MoveCategory.PHYSICAL, 40, 100, 10, 100, 3, 3),
    new AttackMove(Moves.UPROAR, Type.NORMAL, MoveCategory.SPECIAL, 90, 100, 10, -1, 0, 3),
    new AttackMove(Moves.SPIT_UP, Type.NORMAL, MoveCategory.SPECIAL, -1, -1, 10, -1, 0, 3),
    new AttackMove(Moves.HEAT_WAVE, Type.FIRE, MoveCategory.SPECIAL, 95, 90, 10, 10, 0, 3),
    new AttackMove(Moves.FACADE, Type.NORMAL, MoveCategory.PHYSICAL, 70, 100, 20, -1, 0, 3),
    new AttackMove(Moves.FOCUS_PUNCH, Type.FIGHTING, MoveCategory.PHYSICAL, 150, 100, 20, -1, -3, 3),
    new AttackMove(Moves.SMELLING_SALTS, Type.NORMAL, MoveCategory.PHYSICAL, 70, 100, 10, -1, 0, 3),
    new AttackMove(Moves.SUPERPOWER, Type.FIGHTING, MoveCategory.PHYSICAL, 120, 100, 5, -1, 0, 3),
    new AttackMove(Moves.REVENGE, Type.FIGHTING, MoveCategory.PHYSICAL, 60, 100, 10, -1, -4, 3),
    new AttackMove(Moves.BRICK_BREAK, Type.FIGHTING, MoveCategory.PHYSICAL, 75, 100, 15, -1, 0, 3),
    new AttackMove(Moves.KNOCK_OFF, Type.DARK, MoveCategory.PHYSICAL, 65, 100, 20, -1, 0, 3),
    new AttackMove(Moves.ENDEAVOR, Type.NORMAL, MoveCategory.PHYSICAL, -1, 100, 5, -1, 0, 3),
    new AttackMove(Moves.ERUPTION, Type.FIRE, MoveCategory.SPECIAL, 150, 100, 5, -1, 0, 3),
    new AttackMove(Moves.SECRET_POWER, Type.NORMAL, MoveCategory.PHYSICAL, 70, 100, 20, 30, 0, 3),
    new AttackMove(Moves.ARM_THRUST, Type.FIGHTING, MoveCategory.PHYSICAL, 15, 100, 20, -1, 0, 3),
    new AttackMove(Moves.LUSTER_PURGE, Type.PSYCHIC, MoveCategory.SPECIAL, 95, 100, 5, 50, 0, 3),
    new AttackMove(Moves.MIST_BALL, Type.PSYCHIC, MoveCategory.SPECIAL, 95, 100, 5, 50, 0, 3),
    new AttackMove(Moves.BLAZE_KICK, Type.FIRE, MoveCategory.PHYSICAL, 85, 90, 10, 10, 0, 3),
    new AttackMove(Moves.ICE_BALL, Type.ICE, MoveCategory.PHYSICAL, 30, 90, 20, -1, 0, 3),
    new AttackMove(Moves.NEEDLE_ARM, Type.GRASS, MoveCategory.PHYSICAL, 60, 100, 15, 30, 0, 3),
    new AttackMove(Moves.HYPER_VOICE, Type.NORMAL, MoveCategory.SPECIAL, 90, 100, 10, -1, 0, 3),
    new AttackMove(Moves.POISON_FANG, Type.POISON, MoveCategory.PHYSICAL, 50, 100, 15, 50, 0, 3),
    new AttackMove(Moves.CRUSH_CLAW, Type.NORMAL, MoveCategory.PHYSICAL, 75, 95, 10, 50, 0, 3),
    new AttackMove(Moves.BLAST_BURN, Type.FIRE, MoveCategory.SPECIAL, 150, 90, 5, -1, 0, 3),
    new AttackMove(Moves.HYDRO_CANNON, Type.WATER, MoveCategory.SPECIAL, 150, 90, 5, -1, 0, 3),
    new AttackMove(Moves.METEOR_MASH, Type.STEEL, MoveCategory.PHYSICAL, 90, 90, 10, 20, 0, 3),
    new AttackMove(Moves.ASTONISH, Type.GHOST, MoveCategory.PHYSICAL, 30, 100, 15, 30, 0, 3),
    new AttackMove(Moves.WEATHER_BALL, Type.NORMAL, MoveCategory.SPECIAL, 50, 100, 10, -1, 0, 3),
    new AttackMove(Moves.AIR_CUTTER, Type.FLYING, MoveCategory.SPECIAL, 60, 95, 25, -1, 0, 3),
    new AttackMove(Moves.OVERHEAT, Type.FIRE, MoveCategory.SPECIAL, 130, 90, 5, -1, 0, 3),
    new AttackMove(Moves.ROCK_TOMB, Type.ROCK, MoveCategory.PHYSICAL, 60, 95, 15, 100, 0, 3),
    new AttackMove(Moves.SILVER_WIND, Type.BUG, MoveCategory.SPECIAL, 60, 100, 5, 10, 0, 3),
    new AttackMove(Moves.WATER_SPOUT, Type.WATER, MoveCategory.SPECIAL, 150, 100, 5, -1, 0, 3),
    new AttackMove(Moves.SIGNAL_BEAM, Type.BUG, MoveCategory.SPECIAL, 75, 100, 15, 10, 0, 3),
    new AttackMove(Moves.SHADOW_PUNCH, Type.GHOST, MoveCategory.PHYSICAL, 60, -1, 20, -1, 0, 3),
    new AttackMove(Moves.EXTRASENSORY, Type.PSYCHIC, MoveCategory.SPECIAL, 80, 100, 20, 10, 0, 3),
    new AttackMove(Moves.SKY_UPPERCUT, Type.FIGHTING, MoveCategory.PHYSICAL, 85, 90, 15, -1, 0, 3),
    new AttackMove(Moves.SAND_TOMB, Type.GROUND, MoveCategory.PHYSICAL, 35, 85, 15, -1, 0, 3),
    new AttackMove(Moves.SHEER_COLD, Type.ICE, MoveCategory.SPECIAL, 200, 20, 5, -1, 0, 3),
    new AttackMove(Moves.MUDDY_WATER, Type.WATER, MoveCategory.SPECIAL, 90, 85, 10, 30, 0, 3),
    new AttackMove(Moves.BULLET_SEED, Type.GRASS, MoveCategory.PHYSICAL, 25, 100, 30, -1, 0, 3),
    new AttackMove(Moves.AERIAL_ACE, Type.FLYING, MoveCategory.PHYSICAL, 60, -1, 20, -1, 0, 3),
    new AttackMove(Moves.ICICLE_SPEAR, Type.ICE, MoveCategory.PHYSICAL, 25, 100, 30, -1, 0, 3),
    new AttackMove(Moves.DRAGON_CLAW, Type.DRAGON, MoveCategory.PHYSICAL, 80, 100, 15, -1, 0, 3),
    new AttackMove(Moves.FRENZY_PLANT, Type.GRASS, MoveCategory.SPECIAL, 150, 90, 5, -1, 0, 3),
    new AttackMove(Moves.MUD_SHOT, Type.GROUND, MoveCategory.SPECIAL, 55, 95, 15, 100, 0, 3),
    new AttackMove(Moves.POISON_TAIL, Type.POISON, MoveCategory.PHYSICAL, 50, 100, 25, 10, 0, 3),
    new AttackMove(Moves.COVET, Type.NORMAL, MoveCategory.PHYSICAL, 60, 100, 25, -1, 0, 3),
    new AttackMove(Moves.VOLT_TACKLE, Type.ELECTRIC, MoveCategory.PHYSICAL, 120, 100, 15, 10, 0, 3),
    new AttackMove(Moves.MAGICAL_LEAF, Type.GRASS, MoveCategory.SPECIAL, 60, -1, 20, -1, 0, 3),
    new AttackMove(Moves.LEAF_BLADE, Type.GRASS, MoveCategory.PHYSICAL, 90, 100, 15, -1, 0, 3),
    new AttackMove(Moves.ROCK_BLAST, Type.ROCK, MoveCategory.PHYSICAL, 25, 90, 10, -1, 0, 3),
    new AttackMove(Moves.SHOCK_WAVE, Type.ELECTRIC, MoveCategory.SPECIAL, 60, -1, 20, -1, 0, 3),
    new AttackMove(Moves.WATER_PULSE, Type.WATER, MoveCategory.SPECIAL, 60, 100, 20, 20, 0, 3),
    new AttackMove(Moves.DOOM_DESIRE, Type.STEEL, MoveCategory.SPECIAL, 140, 100, 5, -1, 0, 3),
    new AttackMove(Moves.PSYCHO_BOOST, Type.PSYCHIC, MoveCategory.SPECIAL, 140, 90, 5, -1, 0, 3),
    new AttackMove(Moves.WAKE_UP_SLAP, Type.FIGHTING, MoveCategory.PHYSICAL, 70, 100, 10, -1, 0, 4),
    new AttackMove(Moves.HAMMER_ARM, Type.FIGHTING, MoveCategory.PHYSICAL, 100, 90, 10, -1, 0, 4),
    new AttackMove(Moves.GYRO_BALL, Type.STEEL, MoveCategory.PHYSICAL, -1, 100, 5, -1, 0, 4),
    new AttackMove(Moves.BRINE, Type.WATER, MoveCategory.SPECIAL, 65, 100, 10, -1, 0, 4),
    new AttackMove(Moves.NATURAL_GIFT, Type.NORMAL, MoveCategory.PHYSICAL, -1, 100, 15, -1, 0, 4),
    new AttackMove(Moves.FEINT, Type.NORMAL, MoveCategory.PHYSICAL, 30, 100, 10, -1, 2, 4),
    new AttackMove(Moves.PLUCK, Type.FLYING, MoveCategory.PHYSICAL, 60, 100, 20, -1, 0, 4),
    new AttackMove(Moves.METAL_BURST, Type.STEEL, MoveCategory.PHYSICAL, -1, 100, 10, -1, 0, 4),
    new AttackMove(Moves.U_TURN, Type.BUG, MoveCategory.PHYSICAL, 70, 100, 20, -1, 0, 4),
    new AttackMove(Moves.CLOSE_COMBAT, Type.FIGHTING, MoveCategory.PHYSICAL, 120, 100, 5, -1, 0, 4),
    new AttackMove(Moves.PAYBACK, Type.DARK, MoveCategory.PHYSICAL, 50, 100, 10, -1, 0, 4),
    new AttackMove(Moves.ASSURANCE, Type.DARK, MoveCategory.PHYSICAL, 60, 100, 10, -1, 0, 4),
    new AttackMove(Moves.FLING, Type.DARK, MoveCategory.PHYSICAL, -1, 100, 10, -1, 0, 4),
    new AttackMove(Moves.TRUMP_CARD, Type.NORMAL, MoveCategory.SPECIAL, -1, -1, 5, -1, 0, 4),
    new AttackMove(Moves.WRING_OUT, Type.NORMAL, MoveCategory.SPECIAL, -1, 100, 5, -1, 0, 4),
    new AttackMove(Moves.PUNISHMENT, Type.DARK, MoveCategory.PHYSICAL, -1, 100, 5, -1, 0, 4),
    new AttackMove(Moves.LAST_RESORT, Type.NORMAL, MoveCategory.PHYSICAL, 140, 100, 5, -1, 0, 4),
    new AttackMove(Moves.SUCKER_PUNCH, Type.DARK, MoveCategory.PHYSICAL, 70, 100, 5, -1, 1, 4),
    new AttackMove(Moves.FLARE_BLITZ, Type.FIRE, MoveCategory.PHYSICAL, 120, 100, 15, 10, 0, 4),
    new AttackMove(Moves.FORCE_PALM, Type.FIGHTING, MoveCategory.PHYSICAL, 60, 100, 10, 30, 0, 4),
    new AttackMove(Moves.AURA_SPHERE, Type.FIGHTING, MoveCategory.SPECIAL, 80, -1, 20, -1, 0, 4),
    new AttackMove(Moves.POISON_JAB, Type.POISON, MoveCategory.PHYSICAL, 80, 100, 20, 30, 0, 4),
    new AttackMove(Moves.DARK_PULSE, Type.DARK, MoveCategory.SPECIAL, 80, 100, 15, 20, 0, 4),
    new AttackMove(Moves.NIGHT_SLASH, Type.DARK, MoveCategory.PHYSICAL, 70, 100, 15, -1, 0, 4),
    new AttackMove(Moves.AQUA_TAIL, Type.WATER, MoveCategory.PHYSICAL, 90, 90, 10, -1, 0, 4),
    new AttackMove(Moves.SEED_BOMB, Type.GRASS, MoveCategory.PHYSICAL, 80, 100, 15, -1, 0, 4),
    new AttackMove(Moves.AIR_SLASH, Type.FLYING, MoveCategory.SPECIAL, 75, 95, 15, 30, 0, 4),
    new AttackMove(Moves.X_SCISSOR, Type.BUG, MoveCategory.PHYSICAL, 80, 100, 15, -1, 0, 4),
    new AttackMove(Moves.BUG_BUZZ, Type.BUG, MoveCategory.SPECIAL, 90, 100, 10, 10, 0, 4),
    new AttackMove(Moves.DRAGON_PULSE, Type.DRAGON, MoveCategory.SPECIAL, 85, 100, 10, -1, 0, 4),
    new AttackMove(Moves.DRAGON_RUSH, Type.DRAGON, MoveCategory.PHYSICAL, 100, 75, 10, 20, 0, 4),
    new AttackMove(Moves.POWER_GEM, Type.ROCK, MoveCategory.SPECIAL, 80, 100, 20, -1, 0, 4),
    new AttackMove(Moves.DRAIN_PUNCH, Type.FIGHTING, MoveCategory.PHYSICAL, 75, 100, 10, -1, 0, 4),
    new AttackMove(Moves.VACUUM_WAVE, Type.FIGHTING, MoveCategory.SPECIAL, 40, 100, 30, -1, 1, 4),
    new AttackMove(Moves.FOCUS_BLAST, Type.FIGHTING, MoveCategory.SPECIAL, 120, 70, 5, 10, 0, 4),
    new AttackMove(Moves.ENERGY_BALL, Type.GRASS, MoveCategory.SPECIAL, 90, 100, 10, 10, 0, 4),
    new AttackMove(Moves.BRAVE_BIRD, Type.FLYING, MoveCategory.PHYSICAL, 120, 100, 15, -1, 0, 4),
    new AttackMove(Moves.EARTH_POWER, Type.GROUND, MoveCategory.SPECIAL, 90, 100, 10, 10, 0, 4),
    new AttackMove(Moves.GIGA_IMPACT, Type.NORMAL, MoveCategory.PHYSICAL, 150, 90, 5, -1, 0, 4),
    new AttackMove(Moves.BULLET_PUNCH, Type.STEEL, MoveCategory.PHYSICAL, 40, 100, 30, -1, 1, 4),
    new AttackMove(Moves.AVALANCHE, Type.ICE, MoveCategory.PHYSICAL, 60, 100, 10, -1, -4, 4),
    new AttackMove(Moves.ICE_SHARD, Type.ICE, MoveCategory.PHYSICAL, 40, 100, 30, -1, 1, 4),
    new AttackMove(Moves.SHADOW_CLAW, Type.GHOST, MoveCategory.PHYSICAL, 70, 100, 15, -1, 0, 4),
    new AttackMove(Moves.THUNDER_FANG, Type.ELECTRIC, MoveCategory.PHYSICAL, 65, 95, 15, 10, 0, 4),
    new AttackMove(Moves.ICE_FANG, Type.ICE, MoveCategory.PHYSICAL, 65, 95, 15, 10, 0, 4),
    new AttackMove(Moves.FIRE_FANG, Type.FIRE, MoveCategory.PHYSICAL, 65, 95, 15, 10, 0, 4),
    new AttackMove(Moves.SHADOW_SNEAK, Type.GHOST, MoveCategory.PHYSICAL, 40, 100, 30, -1, 1, 4),
    new AttackMove(Moves.MUD_BOMB, Type.GROUND, MoveCategory.SPECIAL, 65, 85, 10, 30, 0, 4),
    new AttackMove(Moves.PSYCHO_CUT, Type.PSYCHIC, MoveCategory.PHYSICAL, 70, 100, 20, -1, 0, 4),
    new AttackMove(Moves.ZEN_HEADBUTT, Type.PSYCHIC, MoveCategory.PHYSICAL, 80, 90, 15, 20, 0, 4),
    new AttackMove(Moves.MIRROR_SHOT, Type.STEEL, MoveCategory.SPECIAL, 65, 85, 10, 30, 0, 4),
    new AttackMove(Moves.FLASH_CANNON, Type.STEEL, MoveCategory.SPECIAL, 80, 100, 10, 10, 0, 4),
    new AttackMove(Moves.ROCK_CLIMB, Type.NORMAL, MoveCategory.PHYSICAL, 90, 85, 20, 20, 0, 4),
    new AttackMove(Moves.DRACO_METEOR, Type.DRAGON, MoveCategory.SPECIAL, 130, 90, 5, -1, 0, 4),
    new AttackMove(Moves.DISCHARGE, Type.ELECTRIC, MoveCategory.SPECIAL, 80, 100, 15, 30, 0, 4),
    new AttackMove(Moves.LAVA_PLUME, Type.FIRE, MoveCategory.SPECIAL, 80, 100, 15, 30, 0, 4),
    new AttackMove(Moves.LEAF_STORM, Type.GRASS, MoveCategory.SPECIAL, 130, 90, 5, -1, 0, 4),
    new AttackMove(Moves.POWER_WHIP, Type.GRASS, MoveCategory.PHYSICAL, 120, 85, 10, -1, 0, 4),
    new AttackMove(Moves.ROCK_WRECKER, Type.ROCK, MoveCategory.PHYSICAL, 150, 90, 5, -1, 0, 4),
    new AttackMove(Moves.CROSS_POISON, Type.POISON, MoveCategory.PHYSICAL, 70, 100, 20, 10, 0, 4),
    new AttackMove(Moves.GUNK_SHOT, Type.POISON, MoveCategory.PHYSICAL, 120, 80, 5, 30, 0, 4),
    new AttackMove(Moves.IRON_HEAD, Type.STEEL, MoveCategory.PHYSICAL, 80, 100, 15, 30, 0, 4),
    new AttackMove(Moves.MAGNET_BOMB, Type.STEEL, MoveCategory.PHYSICAL, 60, -1, 20, -1, 0, 4),
    new AttackMove(Moves.STONE_EDGE, Type.ROCK, MoveCategory.PHYSICAL, 100, 80, 5, -1, 0, 4),
    new AttackMove(Moves.GRASS_KNOT, Type.GRASS, MoveCategory.SPECIAL, -1, 100, 20, -1, 0, 4),
    new AttackMove(Moves.CHATTER, Type.FLYING, MoveCategory.SPECIAL, 65, 100, 20, 100, 0, 4),
    new AttackMove(Moves.JUDGMENT, Type.NORMAL, MoveCategory.SPECIAL, 100, 100, 10, -1, 0, 4),
    new AttackMove(Moves.BUG_BITE, Type.BUG, MoveCategory.PHYSICAL, 60, 100, 20, -1, 0, 4),
    new AttackMove(Moves.CHARGE_BEAM, Type.ELECTRIC, MoveCategory.SPECIAL, 50, 90, 10, 70, 0, 4),
    new AttackMove(Moves.WOOD_HAMMER, Type.GRASS, MoveCategory.PHYSICAL, 120, 100, 15, -1, 0, 4),
    new AttackMove(Moves.AQUA_JET, Type.WATER, MoveCategory.PHYSICAL, 40, 100, 20, -1, 1, 4),
    new AttackMove(Moves.ATTACK_ORDER, Type.BUG, MoveCategory.PHYSICAL, 90, 100, 15, -1, 0, 4),
    new AttackMove(Moves.HEAD_SMASH, Type.ROCK, MoveCategory.PHYSICAL, 150, 80, 5, -1, 0, 4),
    new AttackMove(Moves.DOUBLE_HIT, Type.NORMAL, MoveCategory.PHYSICAL, 35, 90, 10, -1, 0, 4),
    new AttackMove(Moves.ROAR_OF_TIME, Type.DRAGON, MoveCategory.SPECIAL, 150, 90, 5, -1, 0, 4),
    new AttackMove(Moves.SPACIAL_REND, Type.DRAGON, MoveCategory.SPECIAL, 100, 95, 5, -1, 0, 4),
    new AttackMove(Moves.CRUSH_GRIP, Type.NORMAL, MoveCategory.PHYSICAL, -1, 100, 5, -1, 0, 4),
    new AttackMove(Moves.MAGMA_STORM, Type.FIRE, MoveCategory.SPECIAL, 100, 75, 5, -1, 0, 4),
    new AttackMove(Moves.SEED_FLARE, Type.GRASS, MoveCategory.SPECIAL, 120, 85, 5, 40, 0, 4),
    new AttackMove(Moves.OMINOUS_WIND, Type.GHOST, MoveCategory.SPECIAL, 60, 100, 5, 10, 0, 4),
    new AttackMove(Moves.PSYSHOCK, Type.PSYCHIC, MoveCategory.SPECIAL, 80, 100, 10, -1, 0, 5),
    new AttackMove(Moves.VENOSHOCK, Type.POISON, MoveCategory.SPECIAL, 65, 100, 10, -1, 0, 5),
    new AttackMove(Moves.SMACK_DOWN, Type.ROCK, MoveCategory.PHYSICAL, 50, 100, 15, 100, 0, 5),
    new AttackMove(Moves.STORM_THROW, Type.FIGHTING, MoveCategory.PHYSICAL, 60, 100, 10, -1, 0, 5),
    new AttackMove(Moves.FLAME_BURST, Type.FIRE, MoveCategory.SPECIAL, 70, 100, 15, -1, 0, 5),
    new AttackMove(Moves.SLUDGE_WAVE, Type.POISON, MoveCategory.SPECIAL, 95, 100, 10, 10, 0, 5),
    new AttackMove(Moves.HEAVY_SLAM, Type.STEEL, MoveCategory.PHYSICAL, -1, 100, 10, -1, 0, 5),
    new AttackMove(Moves.SYNCHRONOISE, Type.PSYCHIC, MoveCategory.SPECIAL, 120, 100, 10, -1, 0, 5),
    new AttackMove(Moves.ELECTRO_BALL, Type.ELECTRIC, MoveCategory.SPECIAL, -1, 100, 10, -1, 0, 5),
    new AttackMove(Moves.FLAME_CHARGE, Type.FIRE, MoveCategory.PHYSICAL, 50, 100, 20, 100, 0, 5),
    new AttackMove(Moves.LOW_SWEEP, Type.FIGHTING, MoveCategory.PHYSICAL, 65, 100, 20, 100, 0, 5),
    new AttackMove(Moves.ACID_SPRAY, Type.POISON, MoveCategory.SPECIAL, 40, 100, 20, 100, 0, 5),
    new AttackMove(Moves.FOUL_PLAY, Type.DARK, MoveCategory.PHYSICAL, 95, 100, 15, -1, 0, 5),
    new AttackMove(Moves.ROUND, Type.NORMAL, MoveCategory.SPECIAL, 60, 100, 15, -1, 0, 5),
    new AttackMove(Moves.ECHOED_VOICE, Type.NORMAL, MoveCategory.SPECIAL, 40, 100, 15, -1, 0, 5),
    new AttackMove(Moves.CHIP_AWAY, Type.NORMAL, MoveCategory.PHYSICAL, 70, 100, 20, -1, 0, 5),
    new AttackMove(Moves.CLEAR_SMOG, Type.POISON, MoveCategory.SPECIAL, 50, -1, 15, -1, 0, 5),
    new AttackMove(Moves.STORED_POWER, Type.PSYCHIC, MoveCategory.SPECIAL, 20, 100, 10, -1, 0, 5),
    new AttackMove(Moves.SCALD, Type.WATER, MoveCategory.SPECIAL, 80, 100, 15, 30, 0, 5),
    new AttackMove(Moves.HEX, Type.GHOST, MoveCategory.SPECIAL, 65, 100, 10, -1, 0, 5),
    new AttackMove(Moves.CIRCLE_THROW, Type.FIGHTING, MoveCategory.PHYSICAL, 60, 90, 10, -1, -6, 5),
    new AttackMove(Moves.INCINERATE, Type.FIRE, MoveCategory.SPECIAL, 60, 100, 15, -1, 0, 5),
    new AttackMove(Moves.ACROBATICS, Type.FLYING, MoveCategory.PHYSICAL, 55, 100, 15, -1, 0, 5),
    new AttackMove(Moves.RETALIATE, Type.NORMAL, MoveCategory.PHYSICAL, 70, 100, 5, -1, 0, 5),
    new AttackMove(Moves.FINAL_GAMBIT, Type.FIGHTING, MoveCategory.SPECIAL, -1, 100, 5, -1, 0, 5),
    new AttackMove(Moves.INFERNO, Type.FIRE, MoveCategory.SPECIAL, 100, 50, 5, 100, 0, 5),
    new AttackMove(Moves.WATER_PLEDGE, Type.WATER, MoveCategory.SPECIAL, 80, 100, 10, -1, 0, 5),
    new AttackMove(Moves.FIRE_PLEDGE, Type.FIRE, MoveCategory.SPECIAL, 80, 100, 10, -1, 0, 5),
    new AttackMove(Moves.GRASS_PLEDGE, Type.GRASS, MoveCategory.SPECIAL, 80, 100, 10, -1, 0, 5),
    new AttackMove(Moves.VOLT_SWITCH, Type.ELECTRIC, MoveCategory.SPECIAL, 70, 100, 20, -1, 0, 5),
    new AttackMove(Moves.STRUGGLE_BUG, Type.BUG, MoveCategory.SPECIAL, 50, 100, 20, 100, 0, 5),
    new AttackMove(Moves.BULLDOZE, Type.GROUND, MoveCategory.PHYSICAL, 60, 100, 20, 100, 0, 5),
    new AttackMove(Moves.FROST_BREATH, Type.ICE, MoveCategory.SPECIAL, 60, 90, 10, 100, 0, 5),
    new AttackMove(Moves.DRAGON_TAIL, Type.DRAGON, MoveCategory.PHYSICAL, 60, 90, 10, -1, -6, 5),
    new AttackMove(Moves.ELECTROWEB, Type.ELECTRIC, MoveCategory.SPECIAL, 55, 95, 15, 100, 0, 5),
    new AttackMove(Moves.WILD_CHARGE, Type.ELECTRIC, MoveCategory.PHYSICAL, 90, 100, 15, -1, 0, 5),
    new AttackMove(Moves.DRILL_RUN, Type.GROUND, MoveCategory.PHYSICAL, 80, 95, 10, -1, 0, 5),
    new AttackMove(Moves.DUAL_CHOP, Type.DRAGON, MoveCategory.PHYSICAL, 40, 90, 15, -1, 0, 5),
    new AttackMove(Moves.HEART_STAMP, Type.PSYCHIC, MoveCategory.PHYSICAL, 60, 100, 25, 30, 0, 5),
    new AttackMove(Moves.HORN_LEECH, Type.GRASS, MoveCategory.PHYSICAL, 75, 100, 10, -1, 0, 5),
    new AttackMove(Moves.SACRED_SWORD, Type.FIGHTING, MoveCategory.PHYSICAL, 90, 100, 15, -1, 0, 5),
    new AttackMove(Moves.RAZOR_SHELL, Type.WATER, MoveCategory.PHYSICAL, 75, 95, 10, 50, 0, 5),
    new AttackMove(Moves.HEAT_CRASH, Type.FIRE, MoveCategory.PHYSICAL, -1, 100, 10, -1, 0, 5),
    new AttackMove(Moves.LEAF_TORNADO, Type.GRASS, MoveCategory.SPECIAL, 65, 90, 10, 50, 0, 5),
    new AttackMove(Moves.STEAMROLLER, Type.BUG, MoveCategory.PHYSICAL, 65, 100, 20, 30, 0, 5),
    new AttackMove(Moves.NIGHT_DAZE, Type.DARK, MoveCategory.SPECIAL, 85, 95, 10, 40, 0, 5),
    new AttackMove(Moves.PSYSTRIKE, Type.PSYCHIC, MoveCategory.SPECIAL, 100, 100, 10, -1, 0, 5),
    new AttackMove(Moves.TAIL_SLAP, Type.NORMAL, MoveCategory.PHYSICAL, 25, 85, 10, -1, 0, 5),
    new AttackMove(Moves.HURRICANE, Type.FLYING, MoveCategory.SPECIAL, 110, 70, 10, 30, 0, 5),
    new AttackMove(Moves.HEAD_CHARGE, Type.NORMAL, MoveCategory.PHYSICAL, 120, 100, 15, -1, 0, 5),
    new AttackMove(Moves.GEAR_GRIND, Type.STEEL, MoveCategory.PHYSICAL, 50, 85, 15, -1, 0, 5),
    new AttackMove(Moves.SEARING_SHOT, Type.FIRE, MoveCategory.SPECIAL, 100, 100, 5, 30, 0, 5),
    new AttackMove(Moves.TECHNO_BLAST, Type.NORMAL, MoveCategory.SPECIAL, 120, 100, 5, -1, 0, 5),
    new AttackMove(Moves.RELIC_SONG, Type.NORMAL, MoveCategory.SPECIAL, 75, 100, 10, 10, 0, 5),
    new AttackMove(Moves.SECRET_SWORD, Type.FIGHTING, MoveCategory.SPECIAL, 85, 100, 10, -1, 0, 5),
    new AttackMove(Moves.GLACIATE, Type.ICE, MoveCategory.SPECIAL, 65, 95, 10, 100, 0, 5),
    new AttackMove(Moves.BOLT_STRIKE, Type.ELECTRIC, MoveCategory.PHYSICAL, 130, 85, 5, 20, 0, 5),
    new AttackMove(Moves.BLUE_FLARE, Type.FIRE, MoveCategory.SPECIAL, 130, 85, 5, 20, 0, 5),
    new AttackMove(Moves.FIERY_DANCE, Type.FIRE, MoveCategory.SPECIAL, 80, 100, 10, 50, 0, 5),
    new AttackMove(Moves.SNARL, Type.DARK, MoveCategory.SPECIAL, 55, 95, 15, 100, 0, 5),
    new AttackMove(Moves.ICICLE_CRASH, Type.ICE, MoveCategory.PHYSICAL, 85, 90, 10, 30, 0, 5),
    new AttackMove(Moves.V_CREATE, Type.FIRE, MoveCategory.PHYSICAL, 180, 95, 5, -1, 0, 5),
    new AttackMove(Moves.FUSION_FLARE, Type.FIRE, MoveCategory.SPECIAL, 100, 100, 5, -1, 0, 5),
    new AttackMove(Moves.FUSION_BOLT, Type.ELECTRIC, MoveCategory.PHYSICAL, 100, 100, 5, -1, 0, 5),
    new AttackMove(Moves.FLYING_PRESS, Type.FIGHTING, MoveCategory.PHYSICAL, 100, 95, 10, -1, 0, 6),
    new AttackMove(Moves.BELCH, Type.POISON, MoveCategory.SPECIAL, 120, 90, 10, -1, 0, 6),
    new AttackMove(Moves.FELL_STINGER, Type.BUG, MoveCategory.PHYSICAL, 50, 100, 25, -1, 0, 6),
    new AttackMove(Moves.PARABOLIC_CHARGE, Type.ELECTRIC, MoveCategory.SPECIAL, 65, 100, 20, -1, 0, 6),
    new AttackMove(Moves.PETAL_BLIZZARD, Type.GRASS, MoveCategory.PHYSICAL, 90, 100, 15, -1, 0, 6),
    new AttackMove(Moves.FREEZE_DRY, Type.ICE, MoveCategory.SPECIAL, 70, 100, 20, 10, 0, 6),
    new AttackMove(Moves.DISARMING_VOICE, Type.FAIRY, MoveCategory.SPECIAL, 40, -1, 15, -1, 0, 6),
    new AttackMove(Moves.DRAINING_KISS, Type.FAIRY, MoveCategory.SPECIAL, 50, 100, 10, -1, 0, 6),
    new AttackMove(Moves.PLAY_ROUGH, Type.FAIRY, MoveCategory.PHYSICAL, 90, 90, 10, 10, 0, 6),
    new AttackMove(Moves.FAIRY_WIND, Type.FAIRY, MoveCategory.SPECIAL, 40, 100, 30, -1, 0, 6),
    new AttackMove(Moves.MOONBLAST, Type.FAIRY, MoveCategory.SPECIAL, 95, 100, 15, 30, 0, 6),
    new AttackMove(Moves.BOOMBURST, Type.NORMAL, MoveCategory.SPECIAL, 140, 100, 10, -1, 0, 6),
    new AttackMove(Moves.DIAMOND_STORM, Type.ROCK, MoveCategory.PHYSICAL, 100, 95, 5, 50, 0, 6),
    new AttackMove(Moves.STEAM_ERUPTION, Type.WATER, MoveCategory.SPECIAL, 110, 95, 5, 30, 0, 6),
    new AttackMove(Moves.HYPERSPACE_HOLE, Type.PSYCHIC, MoveCategory.SPECIAL, 80, -1, 5, -1, 0, 6),
    new AttackMove(Moves.WATER_SHURIKEN, Type.WATER, MoveCategory.SPECIAL, 15, 100, 20, -1, 1, 6),
    new AttackMove(Moves.MYSTICAL_FIRE, Type.FIRE, MoveCategory.SPECIAL, 75, 100, 10, 100, 0, 6),
    new AttackMove(Moves.DAZZLING_GLEAM, Type.FAIRY, MoveCategory.SPECIAL, 80, 100, 10, -1, 0, 6),
    new AttackMove(Moves.NUZZLE, Type.ELECTRIC, MoveCategory.PHYSICAL, 20, 100, 20, 100, 0, 6),
    new AttackMove(Moves.HOLD_BACK, Type.NORMAL, MoveCategory.PHYSICAL, 40, 100, 40, -1, 0, 6),
    new AttackMove(Moves.INFESTATION, Type.BUG, MoveCategory.SPECIAL, 20, 100, 20, -1, 0, 6),
    new AttackMove(Moves.POWER_UP_PUNCH, Type.FIGHTING, MoveCategory.PHYSICAL, 40, 100, 20, 100, 0, 6),
    new AttackMove(Moves.OBLIVION_WING, Type.FLYING, MoveCategory.SPECIAL, 80, 100, 10, -1, 0, 6),
    new AttackMove(Moves.THOUSAND_ARROWS, Type.GROUND, MoveCategory.PHYSICAL, 90, 100, 10, -1, 0, 6),
    new AttackMove(Moves.THOUSAND_WAVES, Type.GROUND, MoveCategory.PHYSICAL, 90, 100, 10, -1, 0, 6),
    new AttackMove(Moves.LANDS_WRATH, Type.GROUND, MoveCategory.PHYSICAL, 90, 100, 10, -1, 0, 6),
    new AttackMove(Moves.LIGHT_OF_RUIN, Type.FAIRY, MoveCategory.SPECIAL, 140, 90, 5, -1, 0, 6),
    new AttackMove(Moves.ORIGIN_PULSE, Type.WATER, MoveCategory.SPECIAL, 110, 85, 10, -1, 0, 6),
    new AttackMove(Moves.PRECIPICE_BLADES, Type.GROUND, MoveCategory.PHYSICAL, 120, 85, 10, -1, 0, 6),
    new AttackMove(Moves.DRAGON_ASCENT, Type.FLYING, MoveCategory.PHYSICAL, 120, 100, 5, -1, 0, 6),
    new AttackMove(Moves.HYPERSPACE_FURY, Type.DARK, MoveCategory.PHYSICAL, 100, -1, 5, -1, 0, 6),
    new AttackMove(Moves.BREAKNECK_BLITZ__PHYSICAL, Type.NORMAL, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.BREAKNECK_BLITZ__SPECIAL, Type.NORMAL, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.ALL_OUT_PUMMELING__PHYSICAL, Type.FIGHTING, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.ALL_OUT_PUMMELING__SPECIAL, Type.FIGHTING, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SUPERSONIC_SKYSTRIKE__PHYSICAL, Type.FLYING, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SUPERSONIC_SKYSTRIKE__SPECIAL, Type.FLYING, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.ACID_DOWNPOUR__PHYSICAL, Type.POISON, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.ACID_DOWNPOUR__SPECIAL, Type.POISON, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.TECTONIC_RAGE__PHYSICAL, Type.GROUND, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.TECTONIC_RAGE__SPECIAL, Type.GROUND, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.CONTINENTAL_CRUSH__PHYSICAL, Type.ROCK, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.CONTINENTAL_CRUSH__SPECIAL, Type.ROCK, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SAVAGE_SPIN_OUT__PHYSICAL, Type.BUG, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SAVAGE_SPIN_OUT__SPECIAL, Type.BUG, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.NEVER_ENDING_NIGHTMARE__PHYSICAL, Type.GHOST, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.NEVER_ENDING_NIGHTMARE__SPECIAL, Type.GHOST, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.CORKSCREW_CRASH__PHYSICAL, Type.STEEL, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.CORKSCREW_CRASH__SPECIAL, Type.STEEL, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.INFERNO_OVERDRIVE__PHYSICAL, Type.FIRE, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.INFERNO_OVERDRIVE__SPECIAL, Type.FIRE, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.HYDRO_VORTEX__PHYSICAL, Type.WATER, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.HYDRO_VORTEX__SPECIAL, Type.WATER, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.BLOOM_DOOM__PHYSICAL, Type.GRASS, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.BLOOM_DOOM__SPECIAL, Type.GRASS, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.GIGAVOLT_HAVOC__PHYSICAL, Type.ELECTRIC, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.GIGAVOLT_HAVOC__SPECIAL, Type.ELECTRIC, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SHATTERED_PSYCHE__PHYSICAL, Type.PSYCHIC, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SHATTERED_PSYCHE__SPECIAL, Type.PSYCHIC, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SUBZERO_SLAMMER__PHYSICAL, Type.ICE, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SUBZERO_SLAMMER__SPECIAL, Type.ICE, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.DEVASTATING_DRAKE__PHYSICAL, Type.DRAGON, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.DEVASTATING_DRAKE__SPECIAL, Type.DRAGON, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.BLACK_HOLE_ECLIPSE__PHYSICAL, Type.DARK, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.BLACK_HOLE_ECLIPSE__SPECIAL, Type.DARK, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.TWINKLE_TACKLE__PHYSICAL, Type.FAIRY, MoveCategory.PHYSICAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.TWINKLE_TACKLE__SPECIAL, Type.FAIRY, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.CATASTROPIKA, Type.ELECTRIC, MoveCategory.PHYSICAL, 210, -1, 1, -1, 0, 7),
    new AttackMove(Moves.FIRST_IMPRESSION, Type.BUG, MoveCategory.PHYSICAL, 90, 100, 10, -1, 2, 7),
    new AttackMove(Moves.SPIRIT_SHACKLE, Type.GHOST, MoveCategory.PHYSICAL, 80, 100, 10, 100, 0, 7),
    new AttackMove(Moves.DARKEST_LARIAT, Type.DARK, MoveCategory.PHYSICAL, 85, 100, 10, -1, 0, 7),
    new AttackMove(Moves.SPARKLING_ARIA, Type.WATER, MoveCategory.SPECIAL, 90, 100, 10, 100, 0, 7),
    new AttackMove(Moves.ICE_HAMMER, Type.ICE, MoveCategory.PHYSICAL, 100, 90, 10, -1, 0, 7),
    new AttackMove(Moves.HIGH_HORSEPOWER, Type.GROUND, MoveCategory.PHYSICAL, 95, 95, 10, -1, 0, 7),
    new AttackMove(Moves.LEAFAGE, Type.GRASS, MoveCategory.PHYSICAL, 40, 100, 40, -1, 0, 7),
    new AttackMove(Moves.THROAT_CHOP, Type.DARK, MoveCategory.PHYSICAL, 80, 100, 15, 100, 0, 7),
    new AttackMove(Moves.POLLEN_PUFF, Type.BUG, MoveCategory.SPECIAL, 90, 100, 15, -1, 0, 7),
    new AttackMove(Moves.ANCHOR_SHOT, Type.STEEL, MoveCategory.PHYSICAL, 80, 100, 20, 100, 0, 7),
    new AttackMove(Moves.LUNGE, Type.BUG, MoveCategory.PHYSICAL, 80, 100, 15, 100, 0, 7),
    new AttackMove(Moves.FIRE_LASH, Type.FIRE, MoveCategory.PHYSICAL, 80, 100, 15, 100, 0, 7),
    new AttackMove(Moves.POWER_TRIP, Type.DARK, MoveCategory.PHYSICAL, 20, 100, 10, -1, 0, 7),
    new AttackMove(Moves.BURN_UP, Type.FIRE, MoveCategory.SPECIAL, 130, 100, 5, -1, 0, 7),
    new AttackMove(Moves.SMART_STRIKE, Type.STEEL, MoveCategory.PHYSICAL, 70, -1, 10, -1, 0, 7),
    new AttackMove(Moves.REVELATION_DANCE, Type.NORMAL, MoveCategory.SPECIAL, 90, 100, 15, -1, 0, 7),
    new AttackMove(Moves.CORE_ENFORCER, Type.DRAGON, MoveCategory.SPECIAL, 100, 100, 10, -1, 0, 7),
    new AttackMove(Moves.TROP_KICK, Type.GRASS, MoveCategory.PHYSICAL, 70, 100, 15, 100, 0, 7),
    new AttackMove(Moves.BEAK_BLAST, Type.FLYING, MoveCategory.PHYSICAL, 100, 100, 15, -1, -3, 7),
    new AttackMove(Moves.CLANGING_SCALES, Type.DRAGON, MoveCategory.SPECIAL, 110, 100, 5, -1, 0, 7),
    new AttackMove(Moves.DRAGON_HAMMER, Type.DRAGON, MoveCategory.PHYSICAL, 90, 100, 15, -1, 0, 7),
    new AttackMove(Moves.BRUTAL_SWING, Type.DARK, MoveCategory.PHYSICAL, 60, 100, 20, -1, 0, 7),
    new AttackMove(Moves.SINISTER_ARROW_RAID, Type.GHOST, MoveCategory.PHYSICAL, 180, -1, 1, -1, 0, 7),
    new AttackMove(Moves.MALICIOUS_MOONSAULT, Type.DARK, MoveCategory.PHYSICAL, 180, -1, 1, -1, 0, 7),
    new AttackMove(Moves.OCEANIC_OPERETTA, Type.WATER, MoveCategory.SPECIAL, 195, -1, 1, -1, 0, 7),
    new AttackMove(Moves.GUARDIAN_OF_ALOLA, Type.FAIRY, MoveCategory.SPECIAL, -1, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SOUL_STEALING_7_STAR_STRIKE, Type.GHOST, MoveCategory.PHYSICAL, 195, -1, 1, -1, 0, 7),
    new AttackMove(Moves.STOKED_SPARKSURFER, Type.ELECTRIC, MoveCategory.SPECIAL, 175, -1, 1, 100, 0, 7),
    new AttackMove(Moves.PULVERIZING_PANCAKE, Type.NORMAL, MoveCategory.PHYSICAL, 210, -1, 1, -1, 0, 7),
    new AttackMove(Moves.GENESIS_SUPERNOVA, Type.PSYCHIC, MoveCategory.SPECIAL, 185, -1, 1, 100, 0, 7),
    new AttackMove(Moves.SHELL_TRAP, Type.FIRE, MoveCategory.SPECIAL, 150, 100, 5, -1, -3, 7),
    new AttackMove(Moves.FLEUR_CANNON, Type.FAIRY, MoveCategory.SPECIAL, 130, 90, 5, -1, 0, 7),
    new AttackMove(Moves.PSYCHIC_FANGS, Type.PSYCHIC, MoveCategory.PHYSICAL, 85, 100, 10, -1, 0, 7),
    new AttackMove(Moves.STOMPING_TANTRUM, Type.GROUND, MoveCategory.PHYSICAL, 75, 100, 10, -1, 0, 7),
    new AttackMove(Moves.SHADOW_BONE, Type.GHOST, MoveCategory.PHYSICAL, 85, 100, 10, 20, 0, 7),
    new AttackMove(Moves.ACCELEROCK, Type.ROCK, MoveCategory.PHYSICAL, 40, 100, 20, -1, 1, 7),
    new AttackMove(Moves.LIQUIDATION, Type.WATER, MoveCategory.PHYSICAL, 85, 100, 10, 20, 0, 7),
    new AttackMove(Moves.PRISMATIC_LASER, Type.PSYCHIC, MoveCategory.SPECIAL, 160, 100, 10, -1, 0, 7),
    new AttackMove(Moves.SPECTRAL_THIEF, Type.GHOST, MoveCategory.PHYSICAL, 90, 100, 10, -1, 0, 7),
    new AttackMove(Moves.SUNSTEEL_STRIKE, Type.STEEL, MoveCategory.PHYSICAL, 100, 100, 5, -1, 0, 7),
    new AttackMove(Moves.MOONGEIST_BEAM, Type.GHOST, MoveCategory.SPECIAL, 100, 100, 5, -1, 0, 7),
    new AttackMove(Moves.ZING_ZAP, Type.ELECTRIC, MoveCategory.PHYSICAL, 80, 100, 10, 30, 0, 7),
    new AttackMove(Moves.NATURES_MADNESS, Type.FAIRY, MoveCategory.SPECIAL, -1, 90, 10, -1, 0, 7),
    new AttackMove(Moves.MULTI_ATTACK, Type.NORMAL, MoveCategory.PHYSICAL, 120, 100, 10, -1, 0, 7),
    new AttackMove(Moves.TEN_MILLION_VOLT_THUNDERBOLT, Type.ELECTRIC, MoveCategory.SPECIAL, 195, -1, 1, -1, 0, 7),
    new AttackMove(Moves.MIND_BLOWN, Type.FIRE, MoveCategory.SPECIAL, 150, 100, 5, -1, 0, 7),
    new AttackMove(Moves.PLASMA_FISTS, Type.ELECTRIC, MoveCategory.PHYSICAL, 100, 100, 15, -1, 0, 7),
    new AttackMove(Moves.PHOTON_GEYSER, Type.PSYCHIC, MoveCategory.SPECIAL, 100, 100, 5, -1, 0, 7),
    new AttackMove(Moves.LIGHT_THAT_BURNS_THE_SKY, Type.PSYCHIC, MoveCategory.SPECIAL, 200, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SEARING_SUNRAZE_SMASH, Type.STEEL, MoveCategory.PHYSICAL, 200, -1, 1, -1, 0, 7),
    new AttackMove(Moves.MENACING_MOONRAZE_MAELSTROM, Type.GHOST, MoveCategory.SPECIAL, 200, -1, 1, -1, 0, 7),
    new AttackMove(Moves.LETS_SNUGGLE_FOREVER, Type.FAIRY, MoveCategory.PHYSICAL, 190, -1, 1, -1, 0, 7),
    new AttackMove(Moves.SPLINTERED_STORMSHARDS, Type.ROCK, MoveCategory.PHYSICAL, 190, -1, 1, -1, 0, 7),
    new AttackMove(Moves.CLANGOROUS_SOULBLAZE, Type.DRAGON, MoveCategory.SPECIAL, 185, -1, 1, 100, 0, 7),
    new AttackMove(Moves.ZIPPY_ZAP, Type.ELECTRIC, MoveCategory.PHYSICAL, 50, 100, 15, -1, 2, 7),
    new AttackMove(Moves.SPLISHY_SPLASH, Type.WATER, MoveCategory.SPECIAL, 90, 100, 15, 30, 0, 7),
    new AttackMove(Moves.FLOATY_FALL, Type.FLYING, MoveCategory.PHYSICAL, 90, 95, 15, 30, 0, 7),
    new AttackMove(Moves.PIKA_PAPOW, Type.ELECTRIC, MoveCategory.SPECIAL, -1, -1, 20, -1, 0, 7),
    new AttackMove(Moves.BOUNCY_BUBBLE, Type.WATER, MoveCategory.SPECIAL, 60, 100, 20, -1, 0, 7),
    new AttackMove(Moves.BUZZY_BUZZ, Type.ELECTRIC, MoveCategory.SPECIAL, 60, 100, 20, 100, 0, 7),
    new AttackMove(Moves.SIZZLY_SLIDE, Type.FIRE, MoveCategory.PHYSICAL, 60, 100, 20, 100, 0, 7),
    new AttackMove(Moves.GLITZY_GLOW, Type.PSYCHIC, MoveCategory.SPECIAL, 80, 95, 15, -1, 0, 7),
    new AttackMove(Moves.BADDY_BAD, Type.DARK, MoveCategory.SPECIAL, 80, 95, 15, -1, 0, 7),
    new AttackMove(Moves.SAPPY_SEED, Type.GRASS, MoveCategory.PHYSICAL, 100, 90, 10, 100, 0, 7),
    new AttackMove(Moves.FREEZY_FROST, Type.ICE, MoveCategory.SPECIAL, 100, 90, 10, -1, 0, 7),
    new AttackMove(Moves.SPARKLY_SWIRL, Type.FAIRY, MoveCategory.SPECIAL, 120, 85, 5, -1, 0, 7),
    new AttackMove(Moves.VEEVEE_VOLLEY, Type.NORMAL, MoveCategory.PHYSICAL, -1, -1, 20, -1, 0, 7),
    new AttackMove(Moves.DOUBLE_IRON_BASH, Type.STEEL, MoveCategory.PHYSICAL, 60, 100, 5, 30, 0, 7),
    new AttackMove(Moves.DYNAMAX_CANNON, Type.DRAGON, MoveCategory.SPECIAL, 100, 100, 5, -1, 0, 8),
    new AttackMove(Moves.SNIPE_SHOT, Type.WATER, MoveCategory.SPECIAL, 80, 100, 15, -1, 0, 8),
    new AttackMove(Moves.JAW_LOCK, Type.DARK, MoveCategory.PHYSICAL, 80, 100, 10, -1, 0, 8),
    new AttackMove(Moves.DRAGON_DARTS, Type.DRAGON, MoveCategory.PHYSICAL, 50, 100, 10, -1, 0, 8),
    new AttackMove(Moves.BOLT_BEAK, Type.ELECTRIC, MoveCategory.PHYSICAL, 85, 100, 10, -1, 0, 8),
    new AttackMove(Moves.FISHIOUS_REND, Type.WATER, MoveCategory.PHYSICAL, 85, 100, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_FLARE, Type.FIRE, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_FLUTTERBY, Type.BUG, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_LIGHTNING, Type.ELECTRIC, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_STRIKE, Type.NORMAL, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_KNUCKLE, Type.FIGHTING, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_PHANTASM, Type.GHOST, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_HAILSTORM, Type.ICE, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_OOZE, Type.POISON, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_GEYSER, Type.WATER, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_AIRSTREAM, Type.FLYING, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_STARFALL, Type.FAIRY, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_WYRMWIND, Type.DRAGON, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_MINDSTORM, Type.PSYCHIC, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_ROCKFALL, Type.ROCK, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_QUAKE, Type.GROUND, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_DARKNESS, Type.DARK, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_OVERGROWTH, Type.GRASS, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.MAX_STEELSPIKE, Type.STEEL, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.BODY_PRESS, Type.FIGHTING, MoveCategory.PHYSICAL, 80, 100, 10, -1, 0, 8),
    new AttackMove(Moves.DRUM_BEATING, Type.GRASS, MoveCategory.PHYSICAL, 80, 100, 10, 100, 0, 8),
    new AttackMove(Moves.SNAP_TRAP, Type.GRASS, MoveCategory.PHYSICAL, 35, 100, 15, -1, 0, 8),
    new AttackMove(Moves.PYRO_BALL, Type.FIRE, MoveCategory.PHYSICAL, 120, 90, 5, 10, 0, 8),
    new AttackMove(Moves.BEHEMOTH_BLADE, Type.STEEL, MoveCategory.PHYSICAL, 100, 100, 5, -1, 0, 8),
    new AttackMove(Moves.BEHEMOTH_BASH, Type.STEEL, MoveCategory.PHYSICAL, 100, 100, 5, -1, 0, 8),
    new AttackMove(Moves.AURA_WHEEL, Type.ELECTRIC, MoveCategory.PHYSICAL, 110, 100, 10, 100, 0, 8),
    new AttackMove(Moves.BREAKING_SWIPE, Type.DRAGON, MoveCategory.PHYSICAL, 60, 100, 15, 100, 0, 8),
    new AttackMove(Moves.BRANCH_POKE, Type.GRASS, MoveCategory.PHYSICAL, 40, 100, 40, -1, 0, 8),
    new AttackMove(Moves.OVERDRIVE, Type.ELECTRIC, MoveCategory.SPECIAL, 80, 100, 10, -1, 0, 8),
    new AttackMove(Moves.APPLE_ACID, Type.GRASS, MoveCategory.SPECIAL, 80, 100, 10, 100, 0, 8),
    new AttackMove(Moves.GRAV_APPLE, Type.GRASS, MoveCategory.PHYSICAL, 80, 100, 10, 100, 0, 8),
    new AttackMove(Moves.SPIRIT_BREAK, Type.FAIRY, MoveCategory.PHYSICAL, 75, 100, 15, 100, 0, 8),
    new AttackMove(Moves.STRANGE_STEAM, Type.FAIRY, MoveCategory.SPECIAL, 90, 95, 10, 20, 0, 8),
    new AttackMove(Moves.FALSE_SURRENDER, Type.DARK, MoveCategory.PHYSICAL, 80, -1, 10, -1, 0, 8),
    new AttackMove(Moves.METEOR_ASSAULT, Type.FIGHTING, MoveCategory.PHYSICAL, 150, 100, 5, -1, 0, 8),
    new AttackMove(Moves.ETERNABEAM, Type.DRAGON, MoveCategory.SPECIAL, 160, 90, 5, -1, 0, 8),
    new AttackMove(Moves.STEEL_BEAM, Type.STEEL, MoveCategory.SPECIAL, 140, 95, 5, -1, 0, 8),
    new AttackMove(Moves.EXPANDING_FORCE, Type.PSYCHIC, MoveCategory.SPECIAL, 80, 100, 10, -1, 0, 8),
    new AttackMove(Moves.STEEL_ROLLER, Type.STEEL, MoveCategory.PHYSICAL, 130, 100, 5, -1, 0, 8),
    new AttackMove(Moves.SCALE_SHOT, Type.DRAGON, MoveCategory.PHYSICAL, 25, 90, 20, -1, 0, 8),
    new AttackMove(Moves.SHELL_SIDE_ARM, Type.POISON, MoveCategory.SPECIAL, 90, 100, 10, 20, 0, 8),
    new AttackMove(Moves.MISTY_EXPLOSION, Type.FAIRY, MoveCategory.SPECIAL, 100, 100, 5, -1, 0, 8),
    new AttackMove(Moves.GRASSY_GLIDE, Type.GRASS, MoveCategory.PHYSICAL, 55, 100, 20, -1, 0, 8),
    new AttackMove(Moves.RISING_VOLTAGE, Type.ELECTRIC, MoveCategory.SPECIAL, 70, 100, 20, -1, 0, 8),
    new AttackMove(Moves.TERRAIN_PULSE, Type.NORMAL, MoveCategory.SPECIAL, 50, 100, 10, -1, 0, 8),
    new AttackMove(Moves.SKITTER_SMACK, Type.BUG, MoveCategory.PHYSICAL, 70, 90, 10, 100, 0, 8),
    new AttackMove(Moves.BURNING_JEALOUSY, Type.FIRE, MoveCategory.SPECIAL, 70, 100, 5, 100, 0, 8),
    new AttackMove(Moves.LASH_OUT, Type.DARK, MoveCategory.PHYSICAL, 75, 100, 5, -1, 0, 8),
    new AttackMove(Moves.POLTERGEIST, Type.GHOST, MoveCategory.PHYSICAL, 110, 90, 5, -1, 0, 8),
    new AttackMove(Moves.FLIP_TURN, Type.WATER, MoveCategory.PHYSICAL, 60, 100, 20, -1, 0, 8),
    new AttackMove(Moves.TRIPLE_AXEL, Type.ICE, MoveCategory.PHYSICAL, 20, 90, 10, -1, 0, 8),
    new AttackMove(Moves.DUAL_WINGBEAT, Type.FLYING, MoveCategory.PHYSICAL, 40, 90, 10, -1, 0, 8),
    new AttackMove(Moves.SCORCHING_SANDS, Type.GROUND, MoveCategory.SPECIAL, 70, 100, 10, 30, 0, 8),
    new AttackMove(Moves.WICKED_BLOW, Type.DARK, MoveCategory.PHYSICAL, 75, 100, 5, -1, 0, 8),
    new AttackMove(Moves.SURGING_STRIKES, Type.WATER, MoveCategory.PHYSICAL, 25, 100, 5, -1, 0, 8),
    new AttackMove(Moves.THUNDER_CAGE, Type.ELECTRIC, MoveCategory.SPECIAL, 80, 90, 15, -1, 0, 8),
    new AttackMove(Moves.DRAGON_ENERGY, Type.DRAGON, MoveCategory.SPECIAL, 150, 100, 5, -1, 0, 8),
    new AttackMove(Moves.FREEZING_GLARE, Type.PSYCHIC, MoveCategory.SPECIAL, 90, 100, 10, 10, 0, 8),
    new AttackMove(Moves.FIERY_WRATH, Type.DARK, MoveCategory.SPECIAL, 90, 100, 10, 20, 0, 8),
    new AttackMove(Moves.THUNDEROUS_KICK, Type.FIGHTING, MoveCategory.PHYSICAL, 90, 100, 10, 100, 0, 8),
    new AttackMove(Moves.GLACIAL_LANCE, Type.ICE, MoveCategory.PHYSICAL, 120, 100, 5, -1, 0, 8),
    new AttackMove(Moves.ASTRAL_BARRAGE, Type.GHOST, MoveCategory.SPECIAL, 120, 100, 5, -1, 0, 8),
    new AttackMove(Moves.EERIE_SPELL, Type.PSYCHIC, MoveCategory.SPECIAL, 80, 100, 5, 100, 0, 8),
    new AttackMove(Moves.DIRE_CLAW, Type.POISON, MoveCategory.PHYSICAL, 80, 100, 15, 50, 0, 8),
    new AttackMove(Moves.PSYSHIELD_BASH, Type.PSYCHIC, MoveCategory.PHYSICAL, 70, 90, 10, 100, 0, 8),
    new AttackMove(Moves.STONE_AXE, Type.ROCK, MoveCategory.PHYSICAL, 65, 90, 15, 100, 0, 8),
    new AttackMove(Moves.SPRINGTIDE_STORM, Type.FAIRY, MoveCategory.SPECIAL, 100, 80, 5, 30, 0, 8),
    new AttackMove(Moves.MYSTICAL_POWER, Type.PSYCHIC, MoveCategory.SPECIAL, 70, 90, 10, 100, 0, 8),
    new AttackMove(Moves.RAGING_FURY, Type.FIRE, MoveCategory.PHYSICAL, 120, 100, 10, -1, 0, 8),
    new AttackMove(Moves.WAVE_CRASH, Type.WATER, MoveCategory.PHYSICAL, 120, 100, 10, -1, 0, 8),
    new AttackMove(Moves.CHLOROBLAST, Type.GRASS, MoveCategory.SPECIAL, 150, 95, 5, -1, 0, 8),
    new AttackMove(Moves.MOUNTAIN_GALE, Type.ICE, MoveCategory.PHYSICAL, 100, 85, 10, 30, 0, 8),
    new AttackMove(Moves.HEADLONG_RUSH, Type.GROUND, MoveCategory.PHYSICAL, 120, 100, 5, -1, 0, 8),
    new AttackMove(Moves.BARB_BARRAGE, Type.POISON, MoveCategory.PHYSICAL, 60, 100, 10, 50, 0, 8),
    new AttackMove(Moves.ESPER_WING, Type.PSYCHIC, MoveCategory.SPECIAL, 80, 100, 10, 100, 0, 8),
    new AttackMove(Moves.BITTER_MALICE, Type.GHOST, MoveCategory.SPECIAL, 75, 100, 10, 100, 0, 8),
    new AttackMove(Moves.TRIPLE_ARROWS, Type.FIGHTING, MoveCategory.PHYSICAL, 90, 100, 10, 30, 0, 8),
    new AttackMove(Moves.INFERNAL_PARADE, Type.GHOST, MoveCategory.SPECIAL, 60, 100, 15, 30, 0, 8),
    new AttackMove(Moves.CEASELESS_EDGE, Type.DARK, MoveCategory.PHYSICAL, 65, 90, 15, 100, 0, 8),
    new AttackMove(Moves.BLEAKWIND_STORM, Type.FLYING, MoveCategory.SPECIAL, 100, 80, 10, 30, 0, 8),
    new AttackMove(Moves.WILDBOLT_STORM, Type.ELECTRIC, MoveCategory.SPECIAL, 100, 80, 10, 20, 0, 8),
    new AttackMove(Moves.SANDSEAR_STORM, Type.GROUND, MoveCategory.SPECIAL, 100, 80, 10, 20, 0, 8),
    // new AttackMove(Moves.G_MAX_WILDFIRE, Type.FIRE, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_BEFUDDLE, Type.BUG, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_VOLT_CRASH, Type.ELECTRIC, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_GOLD_RUSH, Type.NORMAL, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_CHI_STRIKE, Type.FIGHTING, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_TERROR, Type.GHOST, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_RESONANCE, Type.ICE, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_CUDDLE, Type.NORMAL, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_REPLENISH, Type.NORMAL, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_MALODOR, Type.POISON, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_STONESURGE, Type.WATER, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_WIND_RAGE, Type.FLYING, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_STUN_SHOCK, Type.ELECTRIC, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_FINALE, Type.FAIRY, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_DEPLETION, Type.DRAGON, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_GRAVITAS, Type.PSYCHIC, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_VOLCALITH, Type.ROCK, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_SANDBLAST, Type.GROUND, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_SNOOZE, Type.DARK, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_TARTNESS, Type.GRASS, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_SWEETNESS, Type.GRASS, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_SMITE, Type.FAIRY, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_STEELSURGE, Type.STEEL, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_MELTDOWN, Type.STEEL, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_FOAM_BURST, Type.WATER, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_CENTIFERNO, Type.FIRE, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_VINE_LASH, Type.GRASS, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_CANNONADE, Type.WATER, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_DRUM_SOLO, Type.GRASS, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_FIREBALL, Type.FIRE, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_HYDROSNIPE, Type.WATER, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_ONE_BLOW, Type.DARK, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    // new AttackMove(Moves.G_MAX_RAPID_FLOW, Type.WATER, MoveCategory.PHYSICAL, 10, -1, 10, -1, 0, 8),
    new AttackMove(Moves.TERA_BLAST, Type.NORMAL, MoveCategory.SPECIAL, 80, 100, 10, -1, 0, 9),
    new AttackMove(Moves.AXE_KICK, Type.FIGHTING, MoveCategory.PHYSICAL, 120, 90, 10, 30, 0, 9),
    new AttackMove(Moves.LAST_RESPECTS, Type.GHOST, MoveCategory.PHYSICAL, 50, 100, 10, -1, 0, 9),
    new AttackMove(Moves.LUMINA_CRASH, Type.PSYCHIC, MoveCategory.SPECIAL, 80, 100, 10, 100, 0, 9),
    new AttackMove(Moves.ORDER_UP, Type.DRAGON, MoveCategory.PHYSICAL, 80, 100, 10, 100, 0, 9),
    new AttackMove(Moves.JET_PUNCH, Type.WATER, MoveCategory.PHYSICAL, 60, 100, 15, -1, 1, 9),
    new AttackMove(Moves.SPIN_OUT, Type.STEEL, MoveCategory.PHYSICAL, 100, 100, 5, -1, 0, 9),
    new AttackMove(Moves.POPULATION_BOMB, Type.NORMAL, MoveCategory.PHYSICAL, 20, 90, 10, -1, 0, 9),
    new AttackMove(Moves.ICE_SPINNER, Type.ICE, MoveCategory.PHYSICAL, 80, 100, 15, -1, 0, 9),
    new AttackMove(Moves.GLAIVE_RUSH, Type.DRAGON, MoveCategory.PHYSICAL, 120, 100, 5, -1, 0, 9),
    new AttackMove(Moves.SALT_CURE, Type.ROCK, MoveCategory.PHYSICAL, 40, 100, 15, 100, 0, 9),
    new AttackMove(Moves.TRIPLE_DIVE, Type.WATER, MoveCategory.PHYSICAL, 30, 95, 10, -1, 0, 9),
    new AttackMove(Moves.MORTAL_SPIN, Type.POISON, MoveCategory.PHYSICAL, 30, 100, 15, 100, 0, 9),
    new AttackMove(Moves.KOWTOW_CLEAVE, Type.DARK, MoveCategory.PHYSICAL, 85, -1, 10, -1, 0, 9),
    new AttackMove(Moves.FLOWER_TRICK, Type.GRASS, MoveCategory.PHYSICAL, 70, -1, 10, 100, 0, 9),
    new AttackMove(Moves.TORCH_SONG, Type.FIRE, MoveCategory.SPECIAL, 80, 100, 10, 100, 0, 9),
    new AttackMove(Moves.AQUA_STEP, Type.WATER, MoveCategory.PHYSICAL, 80, 100, 10, 100, 0, 9),
    new AttackMove(Moves.RAGING_BULL, Type.NORMAL, MoveCategory.PHYSICAL, 90, 100, 10, -1, 0, 9),
    new AttackMove(Moves.MAKE_IT_RAIN, Type.STEEL, MoveCategory.SPECIAL, 120, 100, 5, -1, 0, 9),
    new AttackMove(Moves.PSYBLADE, Type.PSYCHIC, MoveCategory.PHYSICAL, 80, 100, 15, -1, 0, 9),
    new AttackMove(Moves.HYDRO_STEAM, Type.WATER, MoveCategory.SPECIAL, 80, 100, 15, -1, 0, 9),
    new AttackMove(Moves.RUINATION, Type.DARK, MoveCategory.SPECIAL, -1, 90, 10, -1, 0, 9),
    new AttackMove(Moves.COLLISION_COURSE, Type.FIGHTING, MoveCategory.PHYSICAL, 100, 100, 5, -1, 0, 9),
    new AttackMove(Moves.ELECTRO_DRIFT, Type.ELECTRIC, MoveCategory.SPECIAL, 100, 100, 5, -1, 0, 9),
    new AttackMove(Moves.POUNCE, Type.BUG, MoveCategory.PHYSICAL, 50, 100, 20, 100, 0, 9),
    new AttackMove(Moves.TRAILBLAZE, Type.GRASS, MoveCategory.PHYSICAL, 50, 100, 20, 100, 0, 9),
    new AttackMove(Moves.CHILLING_WATER, Type.WATER, MoveCategory.SPECIAL, 50, 100, 20, 100, 0, 9),
    new AttackMove(Moves.HYPER_DRILL, Type.NORMAL, MoveCategory.PHYSICAL, 100, 100, 5, -1, 0, 9),
    new AttackMove(Moves.TWIN_BEAM, Type.PSYCHIC, MoveCategory.SPECIAL, 40, 100, 10, -1, 0, 9),
    new AttackMove(Moves.RAGE_FIST, Type.GHOST, MoveCategory.PHYSICAL, 50, 100, 10, -1, 0, 9),
    new AttackMove(Moves.ARMOR_CANNON, Type.FIRE, MoveCategory.SPECIAL, 120, 100, 5, -1, 0, 9),
    new AttackMove(Moves.BITTER_BLADE, Type.FIRE, MoveCategory.PHYSICAL, 90, 100, 10, -1, 0, 9),
    new AttackMove(Moves.DOUBLE_SHOCK, Type.ELECTRIC, MoveCategory.PHYSICAL, 120, 100, 5, -1, 0, 9),
    new AttackMove(Moves.GIGATON_HAMMER, Type.STEEL, MoveCategory.PHYSICAL, 160, 100, 5, -1, 0, 9),
    new AttackMove(Moves.COMEUPPANCE, Type.DARK, MoveCategory.PHYSICAL, -1, 100, 10, -1, 0, 9),
    new AttackMove(Moves.AQUA_CUTTER, Type.WATER, MoveCategory.PHYSICAL, 70, 100, 20, -1, 0, 9),
    new AttackMove(Moves.BLAZING_TORQUE, Type.FIRE, MoveCategory.PHYSICAL, 80, 100, 10, 30, 0, 9),
    new AttackMove(Moves.WICKED_TORQUE, Type.DARK, MoveCategory.PHYSICAL, 80, 100, 10, 10, 0, 9),
    new AttackMove(Moves.NOXIOUS_TORQUE, Type.POISON, MoveCategory.PHYSICAL, 100, 100, 10, 30, 0, 9),
    new AttackMove(Moves.COMBAT_TORQUE, Type.FIGHTING, MoveCategory.PHYSICAL, 100, 100, 10, 30, 0, 9),
    new AttackMove(Moves.MAGICAL_TORQUE, Type.FAIRY, MoveCategory.PHYSICAL, 100, 100, 10, 30, 0, 9),
    new AttackMove(Moves.BLOOD_MOON, Type.NORMAL, MoveCategory.SPECIAL, 140, 100, 5, -1, 0, 9),
    new AttackMove(Moves.MATCHA_GOTCHA, Type.GRASS, MoveCategory.SPECIAL, 80, 90, 15, 20, 0, 9),
    new AttackMove(Moves.SYRUP_BOMB, Type.GRASS, MoveCategory.SPECIAL, 60, 85, 10, -1, 0, 9),
    new AttackMove(Moves.IVY_CUDGEL, Type.GRASS, MoveCategory.PHYSICAL, 100, 100, 10, -1, 0, 9),
    new AttackMove(Moves.TERA_STARSTORM, Type.NORMAL, MoveCategory.SPECIAL, 120, 100, 5, -1, 0, 9),
    new AttackMove(Moves.FICKLE_BEAM, Type.DRAGON, MoveCategory.SPECIAL, 80, 100, 5, 30, 0, 9),
    new AttackMove(Moves.THUNDERCLAP, Type.ELECTRIC, MoveCategory.SPECIAL, 70, 100, 5, -1, 1, 9),
    new AttackMove(Moves.MIGHTY_CLEAVE, Type.ROCK, MoveCategory.PHYSICAL, 95, 100, 5, -1, 0, 9),
    new AttackMove(Moves.TACHYON_CUTTER, Type.STEEL, MoveCategory.SPECIAL, 50, -1, 10, -1, 0, 9),
    new AttackMove(Moves.HARD_PRESS, Type.STEEL, MoveCategory.PHYSICAL, -1, 100, 10, -1, 0, 9),
    new AttackMove(Moves.ALLURING_VOICE, Type.FAIRY, MoveCategory.SPECIAL, 80, 100, 10, -1, 0, 9),
    new AttackMove(Moves.TEMPER_FLARE, Type.FIRE, MoveCategory.PHYSICAL, 75, 100, 10, -1, 0, 9),
    new AttackMove(Moves.SUPERCELL_SLAM, Type.ELECTRIC, MoveCategory.PHYSICAL, 100, 95, 15, -1, 0, 9),
    new AttackMove(Moves.PSYCHIC_NOISE, Type.PSYCHIC, MoveCategory.SPECIAL, 75, 100, 10, -1, 0, 9),
    new AttackMove(Moves.UPPER_HAND, Type.FIGHTING, MoveCategory.PHYSICAL, 65, 100, 15, 100, 3, 9),
    new AttackMove(Moves.MALIGNANT_CHAIN, Type.POISON, MoveCategory.SPECIAL, 100, 100, 5, 50, 0, 9),
  );
}


export enum Moves {
  /**{@link https://bulbapedia.bulbagarden.net/wiki/None_(move) | Source} */
  NONE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pound_(move) | Source} */
  POUND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Karate_Chop_(move) | Source} */
  KARATE_CHOP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Slap_(move) | Source} */
  DOUBLE_SLAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Comet_Punch_(move) | Source} */
  COMET_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mega_Punch_(move) | Source} */
  MEGA_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pay_Day_(move) | Source} */
  PAY_DAY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Punch_(move) | Source} */
  FIRE_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Punch_(move) | Source} */
  ICE_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_Punch_(move) | Source} */
  THUNDER_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Scratch_(move) | Source} */
  SCRATCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Vise_Grip_(move) | Source} */
  VISE_GRIP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Guillotine_(move) | Source} */
  GUILLOTINE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Razor_Wind_(move) | Source} */
  RAZOR_WIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Swords_Dance_(move) | Source} */
  SWORDS_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Cut_(move) | Source} */
  CUT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Gust_(move) | Source} */
  GUST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wing_Attack_(move) | Source} */
  WING_ATTACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Whirlwind_(move) | Source} */
  WHIRLWIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fly_(move) | Source} */
  FLY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bind_(move) | Source} */
  BIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Slam_(move) | Source} */
  SLAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Vine_Whip_(move) | Source} */
  VINE_WHIP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Stomp_(move) | Source} */
  STOMP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Kick_(move) | Source} */
  DOUBLE_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mega_Kick_(move) | Source} */
  MEGA_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Jump_Kick_(move) | Source} */
  JUMP_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rolling_Kick_(move) | Source} */
  ROLLING_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sand_Attack_(move) | Source} */
  SAND_ATTACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Headbutt_(move) | Source} */
  HEADBUTT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Horn_Attack_(move) | Source} */
  HORN_ATTACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fury_Attack_(move) | Source} */
  FURY_ATTACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Horn_Drill_(move) | Source} */
  HORN_DRILL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tackle_(move) | Source} */
  TACKLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Body_Slam_(move) | Source} */
  BODY_SLAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wrap_(move) | Source} */
  WRAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Take_Down_(move) | Source} */
  TAKE_DOWN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thrash_(move) | Source} */
  THRASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Edge_(move) | Source} */
  DOUBLE_EDGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tail_Whip_(move) | Source} */
  TAIL_WHIP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Sting_(move) | Source} */
  POISON_STING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Twineedle_(move) | Source} */
  TWINEEDLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pin_Missile_(move) | Source} */
  PIN_MISSILE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Leer_(move) | Source} */
  LEER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bite_(move) | Source} */
  BITE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Growl_(move) | Source} */
  GROWL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Roar_(move) | Source} */
  ROAR,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sing_(move) | Source} */
  SING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Supersonic_(move) | Source} */
  SUPERSONIC,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sonic_Boom_(move) | Source} */
  SONIC_BOOM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Disable_(move) | Source} */
  DISABLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Acid_(move) | Source} */
  ACID,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ember_(move) | Source} */
  EMBER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flamethrower_(move) | Source} */
  FLAMETHROWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mist_(move) | Source} */
  MIST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Gun_(move) | Source} */
  WATER_GUN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydro_Pump_(move) | Source} */
  HYDRO_PUMP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Surf_(move) | Source} */
  SURF,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Beam_(move) | Source} */
  ICE_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Blizzard_(move) | Source} */
  BLIZZARD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psybeam_(move) | Source} */
  PSYBEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bubble_Beam_(move) | Source} */
  BUBBLE_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aurora_Beam_(move) | Source} */
  AURORA_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyper_Beam_(move) | Source} */
  HYPER_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Peck_(move) | Source} */
  PECK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Drill_Peck_(move) | Source} */
  DRILL_PECK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Submission_(move) | Source} */
  SUBMISSION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Low_Kick_(move) | Source} */
  LOW_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Counter_(move) | Source} */
  COUNTER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Seismic_Toss_(move) | Source} */
  SEISMIC_TOSS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Strength_(move) | Source} */
  STRENGTH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Absorb_(move) | Source} */
  ABSORB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mega_Drain_(move) | Source} */
  MEGA_DRAIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Leech_Seed_(move) | Source} */
  LEECH_SEED,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Growth_(move) | Source} */
  GROWTH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Razor_Leaf_(move) | Source} */
  RAZOR_LEAF,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Solar_Beam_(move) | Source} */
  SOLAR_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Powder_(move) | Source} */
  POISON_POWDER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Stun_Spore_(move) | Source} */
  STUN_SPORE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sleep_Powder_(move) | Source} */
  SLEEP_POWDER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Petal_Dance_(move) | Source} */
  PETAL_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/String_Shot_(move) | Source} */
  STRING_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Rage_(move) | Source} */
  DRAGON_RAGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Spin_(move) | Source} */
  FIRE_SPIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_Shock_(move) | Source} */
  THUNDER_SHOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunderbolt_(move) | Source} */
  THUNDERBOLT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_Wave_(move) | Source} */
  THUNDER_WAVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_(move) | Source} */
  THUNDER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Throw_(move) | Source} */
  ROCK_THROW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Earthquake_(move) | Source} */
  EARTHQUAKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fissure_(move) | Source} */
  FISSURE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dig_(move) | Source} */
  DIG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxic_(move) | Source} */
  TOXIC,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Confusion_(move) | Source} */
  CONFUSION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psychic_(move) | Source} */
  PSYCHIC,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hypnosis_(move) | Source} */
  HYPNOSIS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Meditate_(move) | Source} */
  MEDITATE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Agility_(move) | Source} */
  AGILITY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Quick_Attack_(move) | Source} */
  QUICK_ATTACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rage_(move) | Source} */
  RAGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Teleport_(move) | Source} */
  TELEPORT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Night_Shade_(move) | Source} */
  NIGHT_SHADE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mimic_(move) | Source} */
  MIMIC,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Screech_(move) | Source} */
  SCREECH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Team_(move) | Source} */
  DOUBLE_TEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Recover_(move) | Source} */
  RECOVER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Harden_(move) | Source} */
  HARDEN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Minimize_(move) | Source} */
  MINIMIZE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Smokescreen_(move) | Source} */
  SMOKESCREEN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Confuse_Ray_(move) | Source} */
  CONFUSE_RAY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Withdraw_(move) | Source} */
  WITHDRAW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Defense_Curl_(move) | Source} */
  DEFENSE_CURL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Barrier_(move) | Source} */
  BARRIER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Light_Screen_(move) | Source} */
  LIGHT_SCREEN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Haze_(move) | Source} */
  HAZE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Reflect_(move) | Source} */
  REFLECT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Focus_Energy_(move) | Source} */
  FOCUS_ENERGY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bide_(move) | Source} */
  BIDE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Metronome_(move) | Source} */
  METRONOME,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mirror_Move_(move) | Source} */
  MIRROR_MOVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Self_Destruct_(move) | Source} */
  SELF_DESTRUCT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Egg_Bomb_(move) | Source} */
  EGG_BOMB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lick_(move) | Source} */
  LICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Smog_(move) | Source} */
  SMOG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sludge_(move) | Source} */
  SLUDGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bone_Club_(move) | Source} */
  BONE_CLUB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Blast_(move) | Source} */
  FIRE_BLAST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Waterfall_(move) | Source} */
  WATERFALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Clamp_(move) | Source} */
  CLAMP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Swift_(move) | Source} */
  SWIFT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Skull_Bash_(move) | Source} */
  SKULL_BASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spike_Cannon_(move) | Source} */
  SPIKE_CANNON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Constrict_(move) | Source} */
  CONSTRICT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Amnesia_(move) | Source} */
  AMNESIA,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Kinesis_(move) | Source} */
  KINESIS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Soft_Boiled_(move) | Source} */
  SOFT_BOILED,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/High_Jump_Kick_(move) | Source} */
  HIGH_JUMP_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Glare_(move) | Source} */
  GLARE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dream_Eater_(move) | Source} */
  DREAM_EATER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Gas_(move) | Source} */
  POISON_GAS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Barrage_(move) | Source} */
  BARRAGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Leech_Life_(move) | Source} */
  LEECH_LIFE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lovely_Kiss_(move) | Source} */
  LOVELY_KISS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sky_Attack_(move) | Source} */
  SKY_ATTACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Transform_(move) | Source} */
  TRANSFORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bubble_(move) | Source} */
  BUBBLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dizzy_Punch_(move) | Source} */
  DIZZY_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spore_(move) | Source} */
  SPORE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flash_(move) | Source} */
  FLASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psywave_(move) | Source} */
  PSYWAVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Splash_(move) | Source} */
  SPLASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Acid_Armor_(move) | Source} */
  ACID_ARMOR,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Crabhammer_(move) | Source} */
  CRABHAMMER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Explosion_(move) | Source} */
  EXPLOSION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fury_Swipes_(move) | Source} */
  FURY_SWIPES,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bonemerang_(move) | Source} */
  BONEMERANG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rest_(move) | Source} */
  REST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Slide_(move) | Source} */
  ROCK_SLIDE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyper_Fang_(move) | Source} */
  HYPER_FANG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sharpen_(move) | Source} */
  SHARPEN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Conversion_(move) | Source} */
  CONVERSION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tri_Attack_(move) | Source} */
  TRI_ATTACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Super_Fang_(move) | Source} */
  SUPER_FANG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Slash_(move) | Source} */
  SLASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Substitute_(move) | Source} */
  SUBSTITUTE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Struggle_(move) | Source} */
  STRUGGLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sketch_(move) | Source} */
  SKETCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Triple_Kick_(move) | Source} */
  TRIPLE_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thief_(move) | Source} */
  THIEF,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spider_Web_(move) | Source} */
  SPIDER_WEB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mind_Reader_(move) | Source} */
  MIND_READER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Nightmare_(move) | Source} */
  NIGHTMARE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flame_Wheel_(move) | Source} */
  FLAME_WHEEL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Snore_(move) | Source} */
  SNORE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Curse_(move) | Source} */
  CURSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flail_(move) | Source} */
  FLAIL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Conversion_2_(move) | Source} */
  CONVERSION_2,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aeroblast_(move) | Source} */
  AEROBLAST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Cotton_Spore_(move) | Source} */
  COTTON_SPORE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Reversal_(move) | Source} */
  REVERSAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spite_(move) | Source} */
  SPITE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Powder_Snow_(move) | Source} */
  POWDER_SNOW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Protect_(move) | Source} */
  PROTECT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mach_Punch_(move) | Source} */
  MACH_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Scary_Face_(move) | Source} */
  SCARY_FACE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Feint_Attack_(move) | Source} */
  FEINT_ATTACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sweet_Kiss_(move) | Source} */
  SWEET_KISS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Belly_Drum_(move) | Source} */
  BELLY_DRUM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sludge_Bomb_(move) | Source} */
  SLUDGE_BOMB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mud_Slap_(move) | Source} */
  MUD_SLAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Octazooka_(move) | Source} */
  OCTAZOOKA,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spikes_(move) | Source} */
  SPIKES,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Zap_Cannon_(move) | Source} */
  ZAP_CANNON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Foresight_(move) | Source} */
  FORESIGHT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Destiny_Bond_(move) | Source} */
  DESTINY_BOND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Perish_Song_(move) | Source} */
  PERISH_SONG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Icy_Wind_(move) | Source} */
  ICY_WIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Detect_(move) | Source} */
  DETECT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bone_Rush_(move) | Source} */
  BONE_RUSH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lock_On_(move) | Source} */
  LOCK_ON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Outrage_(move) | Source} */
  OUTRAGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandstorm_(move) | Source} */
  SANDSTORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Giga_Drain_(move) | Source} */
  GIGA_DRAIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Endure_(move) | Source} */
  ENDURE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Charm_(move) | Source} */
  CHARM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rollout_(move) | Source} */
  ROLLOUT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/False_Swipe_(move) | Source} */
  FALSE_SWIPE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Swagger_(move) | Source} */
  SWAGGER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Milk_Drink_(move) | Source} */
  MILK_DRINK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spark_(move) | Source} */
  SPARK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fury_Cutter_(move) | Source} */
  FURY_CUTTER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Steel_Wing_(move) | Source} */
  STEEL_WING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mean_Look_(move) | Source} */
  MEAN_LOOK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Attract_(move) | Source} */
  ATTRACT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sleep_Talk_(move) | Source} */
  SLEEP_TALK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Heal_Bell_(move) | Source} */
  HEAL_BELL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Return_(move) | Source} */
  RETURN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Present_(move) | Source} */
  PRESENT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Frustration_(move) | Source} */
  FRUSTRATION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Safeguard_(move) | Source} */
  SAFEGUARD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pain_Split_(move) | Source} */
  PAIN_SPLIT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sacred_Fire_(move) | Source} */
  SACRED_FIRE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnitude_(move) | Source} */
  MAGNITUDE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dynamic_Punch_(move) | Source} */
  DYNAMIC_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Megahorn_(move) | Source} */
  MEGAHORN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Breath_(move) | Source} */
  DRAGON_BREATH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Baton_Pass_(move) | Source} */
  BATON_PASS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Encore_(move) | Source} */
  ENCORE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pursuit_(move) | Source} */
  PURSUIT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rapid_Spin_(move) | Source} */
  RAPID_SPIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sweet_Scent_(move) | Source} */
  SWEET_SCENT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Tail_(move) | Source} */
  IRON_TAIL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Metal_Claw_(move) | Source} */
  METAL_CLAW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Vital_Throw_(move) | Source} */
  VITAL_THROW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Morning_Sun_(move) | Source} */
  MORNING_SUN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Synthesis_(move) | Source} */
  SYNTHESIS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Moonlight_(move) | Source} */
  MOONLIGHT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hidden_Power_(move) | Source} */
  HIDDEN_POWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Cross_Chop_(move) | Source} */
  CROSS_CHOP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Twister_(move) | Source} */
  TWISTER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rain_Dance_(move) | Source} */
  RAIN_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sunny_Day_(move) | Source} */
  SUNNY_DAY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Crunch_(move) | Source} */
  CRUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mirror_Coat_(move) | Source} */
  MIRROR_COAT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psych_Up_(move) | Source} */
  PSYCH_UP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Extreme_Speed_(move) | Source} */
  EXTREME_SPEED,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ancient_Power_(move) | Source} */
  ANCIENT_POWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Ball_(move) | Source} */
  SHADOW_BALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Future_Sight_(move) | Source} */
  FUTURE_SIGHT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Smash_(move) | Source} */
  ROCK_SMASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Whirlpool_(move) | Source} */
  WHIRLPOOL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Beat_Up_(move) | Source} */
  BEAT_UP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fake_Out_(move) | Source} */
  FAKE_OUT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Uproar_(move) | Source} */
  UPROAR,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Stockpile_(move) | Source} */
  STOCKPILE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spit_Up_(move) | Source} */
  SPIT_UP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Swallow_(move) | Source} */
  SWALLOW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Heat_Wave_(move) | Source} */
  HEAT_WAVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hail_(move) | Source} */
  HAIL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Torment_(move) | Source} */
  TORMENT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flatter_(move) | Source} */
  FLATTER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Will_O_Wisp_(move) | Source} */
  WILL_O_WISP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Memento_(move) | Source} */
  MEMENTO,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Facade_(move) | Source} */
  FACADE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Focus_Punch_(move) | Source} */
  FOCUS_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Smelling_Salts_(move) | Source} */
  SMELLING_SALTS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Follow_Me_(move) | Source} */
  FOLLOW_ME,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Nature_Power_(move) | Source} */
  NATURE_POWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Charge_(move) | Source} */
  CHARGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Taunt_(move) | Source} */
  TAUNT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Helping_Hand_(move) | Source} */
  HELPING_HAND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Trick_(move) | Source} */
  TRICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Role_Play_(move) | Source} */
  ROLE_PLAY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wish_(move) | Source} */
  WISH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Assist_(move) | Source} */
  ASSIST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ingrain_(move) | Source} */
  INGRAIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Superpower_(move) | Source} */
  SUPERPOWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Magic_Coat_(move) | Source} */
  MAGIC_COAT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Recycle_(move) | Source} */
  RECYCLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Revenge_(move) | Source} */
  REVENGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Brick_Break_(move) | Source} */
  BRICK_BREAK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Yawn_(move) | Source} */
  YAWN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Knock_Off_(move) | Source} */
  KNOCK_OFF,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Endeavor_(move) | Source} */
  ENDEAVOR,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Eruption_(move) | Source} */
  ERUPTION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Skill_Swap_(move) | Source} */
  SKILL_SWAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Imprison_(move) | Source} */
  IMPRISON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Refresh_(move) | Source} */
  REFRESH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Grudge_(move) | Source} */
  GRUDGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Snatch_(move) | Source} */
  SNATCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Secret_Power_(move) | Source} */
  SECRET_POWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dive_(move) | Source} */
  DIVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Arm_Thrust_(move) | Source} */
  ARM_THRUST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Camouflage_(move) | Source} */
  CAMOUFLAGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tail_Glow_(move) | Source} */
  TAIL_GLOW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Luster_Purge_(move) | Source} */
  LUSTER_PURGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mist_Ball_(move) | Source} */
  MIST_BALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Feather_Dance_(move) | Source} */
  FEATHER_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Teeter_Dance_(move) | Source} */
  TEETER_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Blaze_Kick_(move) | Source} */
  BLAZE_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mud_Sport_(move) | Source} */
  MUD_SPORT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Ball_(move) | Source} */
  ICE_BALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Needle_Arm_(move) | Source} */
  NEEDLE_ARM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Slack_Off_(move) | Source} */
  SLACK_OFF,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyper_Voice_(move) | Source} */
  HYPER_VOICE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Fang_(move) | Source} */
  POISON_FANG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Crush_Claw_(move) | Source} */
  CRUSH_CLAW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Blast_Burn_(move) | Source} */
  BLAST_BURN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydro_Cannon_(move) | Source} */
  HYDRO_CANNON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Meteor_Mash_(move) | Source} */
  METEOR_MASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Astonish_(move) | Source} */
  ASTONISH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Weather_Ball_(move) | Source} */
  WEATHER_BALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aromatherapy_(move) | Source} */
  AROMATHERAPY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fake_Tears_(move) | Source} */
  FAKE_TEARS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Air_Cutter_(move) | Source} */
  AIR_CUTTER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Overheat_(move) | Source} */
  OVERHEAT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Odor_Sleuth_(move) | Source} */
  ODOR_SLEUTH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Tomb_(move) | Source} */
  ROCK_TOMB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Silver_Wind_(move) | Source} */
  SILVER_WIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Metal_Sound_(move) | Source} */
  METAL_SOUND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Grass_Whistle_(move) | Source} */
  GRASS_WHISTLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tickle_(move) | Source} */
  TICKLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Cosmic_Power_(move) | Source} */
  COSMIC_POWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Spout_(move) | Source} */
  WATER_SPOUT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Signal_Beam_(move) | Source} */
  SIGNAL_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Punch_(move) | Source} */
  SHADOW_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Extrasensory_(move) | Source} */
  EXTRASENSORY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sky_Uppercut_(move) | Source} */
  SKY_UPPERCUT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sand_Tomb_(move) | Source} */
  SAND_TOMB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sheer_Cold_(move) | Source} */
  SHEER_COLD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Muddy_Water_(move) | Source} */
  MUDDY_WATER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bullet_Seed_(move) | Source} */
  BULLET_SEED,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aerial_Ace_(move) | Source} */
  AERIAL_ACE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Icicle_Spear_(move) | Source} */
  ICICLE_SPEAR,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Defense_(move) | Source} */
  IRON_DEFENSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Block_(move) | Source} */
  BLOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Howl_(move) | Source} */
  HOWL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Claw_(move) | Source} */
  DRAGON_CLAW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Frenzy_Plant_(move) | Source} */
  FRENZY_PLANT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bulk_Up_(move) | Source} */
  BULK_UP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bounce_(move) | Source} */
  BOUNCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mud_Shot_(move) | Source} */
  MUD_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Tail_(move) | Source} */
  POISON_TAIL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Covet_(move) | Source} */
  COVET,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Volt_Tackle_(move) | Source} */
  VOLT_TACKLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Magical_Leaf_(move) | Source} */
  MAGICAL_LEAF,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Sport_(move) | Source} */
  WATER_SPORT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Calm_Mind_(move) | Source} */
  CALM_MIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Leaf_Blade_(move) | Source} */
  LEAF_BLADE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Dance_(move) | Source} */
  DRAGON_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Blast_(move) | Source} */
  ROCK_BLAST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shock_Wave_(move) | Source} */
  SHOCK_WAVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Pulse_(move) | Source} */
  WATER_PULSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Doom_Desire_(move) | Source} */
  DOOM_DESIRE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psycho_Boost_(move) | Source} */
  PSYCHO_BOOST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Roost_(move) | Source} */
  ROOST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Gravity_(move) | Source} */
  GRAVITY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Miracle_Eye_(move) | Source} */
  MIRACLE_EYE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wake_Up_Slap_(move) | Source} */
  WAKE_UP_SLAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hammer_Arm_(move) | Source} */
  HAMMER_ARM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Gyro_Ball_(move) | Source} */
  GYRO_BALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Healing_Wish_(move) | Source} */
  HEALING_WISH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Brine_(move) | Source} */
  BRINE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Natural_Gift_(move) | Source} */
  NATURAL_GIFT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Feint_(move) | Source} */
  FEINT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pluck_(move) | Source} */
  PLUCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tailwind_(move) | Source} */
  TAILWIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Acupressure_(move) | Source} */
  ACUPRESSURE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Metal_Burst_(move) | Source} */
  METAL_BURST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/U_Turn_(move) | Source} */
  U_TURN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Close_Combat_(move) | Source} */
  CLOSE_COMBAT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Payback_(move) | Source} */
  PAYBACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Assurance_(move) | Source} */
  ASSURANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Embargo_(move) | Source} */
  EMBARGO,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fling_(move) | Source} */
  FLING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psycho_Shift_(move) | Source} */
  PSYCHO_SHIFT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Trump_Card_(move) | Source} */
  TRUMP_CARD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Heal_Block_(move) | Source} */
  HEAL_BLOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wring_Out_(move) | Source} */
  WRING_OUT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Trick_(move) | Source} */
  POWER_TRICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Gastro_Acid_(move) | Source} */
  GASTRO_ACID,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lucky_Chant_(move) | Source} */
  LUCKY_CHANT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Me_First_(move) | Source} */
  ME_FIRST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Copycat_(move) | Source} */
  COPYCAT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Swap_(move) | Source} */
  POWER_SWAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Guard_Swap_(move) | Source} */
  GUARD_SWAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Punishment_(move) | Source} */
  PUNISHMENT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Last_Resort_(move) | Source} */
  LAST_RESORT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Worry_Seed_(move) | Source} */
  WORRY_SEED,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sucker_Punch_(move) | Source} */
  SUCKER_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxic_Spikes_(move) | Source} */
  TOXIC_SPIKES,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Heart_Swap_(move) | Source} */
  HEART_SWAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aqua_Ring_(move) | Source} */
  AQUA_RING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnet_Rise_(move) | Source} */
  MAGNET_RISE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flare_Blitz_(move) | Source} */
  FLARE_BLITZ,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Force_Palm_(move) | Source} */
  FORCE_PALM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aura_Sphere_(move) | Source} */
  AURA_SPHERE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Polish_(move) | Source} */
  ROCK_POLISH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Poison_Jab_(move) | Source} */
  POISON_JAB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dark_Pulse_(move) | Source} */
  DARK_PULSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Night_Slash_(move) | Source} */
  NIGHT_SLASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aqua_Tail_(move) | Source} */
  AQUA_TAIL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Seed_Bomb_(move) | Source} */
  SEED_BOMB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Air_Slash_(move) | Source} */
  AIR_SLASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/X_Scissor_(move) | Source} */
  X_SCISSOR,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bug_Buzz_(move) | Source} */
  BUG_BUZZ,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Pulse_(move) | Source} */
  DRAGON_PULSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Rush_(move) | Source} */
  DRAGON_RUSH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Gem_(move) | Source} */
  POWER_GEM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Drain_Punch_(move) | Source} */
  DRAIN_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Vacuum_Wave_(move) | Source} */
  VACUUM_WAVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Focus_Blast_(move) | Source} */
  FOCUS_BLAST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Energy_Ball_(move) | Source} */
  ENERGY_BALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Brave_Bird_(move) | Source} */
  BRAVE_BIRD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Earth_Power_(move) | Source} */
  EARTH_POWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Switcheroo_(move) | Source} */
  SWITCHEROO,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Giga_Impact_(move) | Source} */
  GIGA_IMPACT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Nasty_Plot_(move) | Source} */
  NASTY_PLOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bullet_Punch_(move) | Source} */
  BULLET_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Avalanche_(move) | Source} */
  AVALANCHE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Shard_(move) | Source} */
  ICE_SHARD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Claw_(move) | Source} */
  SHADOW_CLAW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_Fang_(move) | Source} */
  THUNDER_FANG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Fang_(move) | Source} */
  ICE_FANG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Fang_(move) | Source} */
  FIRE_FANG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Sneak_(move) | Source} */
  SHADOW_SNEAK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mud_Bomb_(move) | Source} */
  MUD_BOMB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psycho_Cut_(move) | Source} */
  PSYCHO_CUT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Zen_Headbutt_(move) | Source} */
  ZEN_HEADBUTT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mirror_Shot_(move) | Source} */
  MIRROR_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flash_Cannon_(move) | Source} */
  FLASH_CANNON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Climb_(move) | Source} */
  ROCK_CLIMB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Defog_(move) | Source} */
  DEFOG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Trick_Room_(move) | Source} */
  TRICK_ROOM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Draco_Meteor_(move) | Source} */
  DRACO_METEOR,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Discharge_(move) | Source} */
  DISCHARGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lava_Plume_(move) | Source} */
  LAVA_PLUME,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Leaf_Storm_(move) | Source} */
  LEAF_STORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Whip_(move) | Source} */
  POWER_WHIP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rock_Wrecker_(move) | Source} */
  ROCK_WRECKER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Cross_Poison_(move) | Source} */
  CROSS_POISON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Gunk_Shot_(move) | Source} */
  GUNK_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Iron_Head_(move) | Source} */
  IRON_HEAD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnet_Bomb_(move) | Source} */
  MAGNET_BOMB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Stone_Edge_(move) | Source} */
  STONE_EDGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Captivate_(move) | Source} */
  CAPTIVATE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Stealth_Rock_(move) | Source} */
  STEALTH_ROCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Grass_Knot_(move) | Source} */
  GRASS_KNOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Chatter_(move) | Source} */
  CHATTER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Judgment_(move) | Source} */
  JUDGMENT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bug_Bite_(move) | Source} */
  BUG_BITE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Charge_Beam_(move) | Source} */
  CHARGE_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wood_Hammer_(move) | Source} */
  WOOD_HAMMER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aqua_Jet_(move) | Source} */
  AQUA_JET,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Attack_Order_(move) | Source} */
  ATTACK_ORDER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Defend_Order_(move) | Source} */
  DEFEND_ORDER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Heal_Order_(move) | Source} */
  HEAL_ORDER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Head_Smash_(move) | Source} */
  HEAD_SMASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Hit_(move) | Source} */
  DOUBLE_HIT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Roar_Of_Time_(move) | Source} */
  ROAR_OF_TIME,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spacial_Rend_(move) | Source} */
  SPACIAL_REND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lunar_Dance_(move) | Source} */
  LUNAR_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Crush_Grip_(move) | Source} */
  CRUSH_GRIP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Magma_Storm_(move) | Source} */
  MAGMA_STORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dark_Void_(move) | Source} */
  DARK_VOID,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Seed_Flare_(move) | Source} */
  SEED_FLARE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ominous_Wind_(move) | Source} */
  OMINOUS_WIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Force_(move) | Source} */
  SHADOW_FORCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hone_Claws_(move) | Source} */
  HONE_CLAWS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wide_Guard_(move) | Source} */
  WIDE_GUARD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Guard_Split_(move) | Source} */
  GUARD_SPLIT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Split_(move) | Source} */
  POWER_SPLIT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wonder_Room_(move) | Source} */
  WONDER_ROOM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psyshock_(move) | Source} */
  PSYSHOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Venoshock_(move) | Source} */
  VENOSHOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Autotomize_(move) | Source} */
  AUTOTOMIZE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rage_Powder_(move) | Source} */
  RAGE_POWDER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Telekinesis_(move) | Source} */
  TELEKINESIS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Magic_Room_(move) | Source} */
  MAGIC_ROOM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Smack_Down_(move) | Source} */
  SMACK_DOWN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Storm_Throw_(move) | Source} */
  STORM_THROW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flame_Burst_(move) | Source} */
  FLAME_BURST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sludge_Wave_(move) | Source} */
  SLUDGE_WAVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Quiver_Dance_(move) | Source} */
  QUIVER_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Heavy_Slam_(move) | Source} */
  HEAVY_SLAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Synchronoise_(move) | Source} */
  SYNCHRONOISE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Electro_Ball_(move) | Source} */
  ELECTRO_BALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Soak_(move) | Source} */
  SOAK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flame_Charge_(move) | Source} */
  FLAME_CHARGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Coil_(move) | Source} */
  COIL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Low_Sweep_(move) | Source} */
  LOW_SWEEP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Acid_Spray_(move) | Source} */
  ACID_SPRAY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Foul_Play_(move) | Source} */
  FOUL_PLAY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Simple_Beam_(move) | Source} */
  SIMPLE_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Entrainment_(move) | Source} */
  ENTRAINMENT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/After_You_(move) | Source} */
  AFTER_YOU,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Round_(move) | Source} */
  ROUND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Echoed_Voice_(move) | Source} */
  ECHOED_VOICE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Chip_Away_(move) | Source} */
  CHIP_AWAY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Clear_Smog_(move) | Source} */
  CLEAR_SMOG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Stored_Power_(move) | Source} */
  STORED_POWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Quick_Guard_(move) | Source} */
  QUICK_GUARD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ally_Switch_(move) | Source} */
  ALLY_SWITCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Scald_(move) | Source} */
  SCALD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shell_Smash_(move) | Source} */
  SHELL_SMASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Heal_Pulse_(move) | Source} */
  HEAL_PULSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hex_(move) | Source} */
  HEX,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sky_Drop_(move) | Source} */
  SKY_DROP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shift_Gear_(move) | Source} */
  SHIFT_GEAR,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Circle_Throw_(move) | Source} */
  CIRCLE_THROW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Incinerate_(move) | Source} */
  INCINERATE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Quash_(move) | Source} */
  QUASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Acrobatics_(move) | Source} */
  ACROBATICS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Reflect_Type_(move) | Source} */
  REFLECT_TYPE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Retaliate_(move) | Source} */
  RETALIATE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Final_Gambit_(move) | Source} */
  FINAL_GAMBIT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bestow_(move) | Source} */
  BESTOW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Inferno_(move) | Source} */
  INFERNO,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Pledge_(move) | Source} */
  WATER_PLEDGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Pledge_(move) | Source} */
  FIRE_PLEDGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Grass_Pledge_(move) | Source} */
  GRASS_PLEDGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Volt_Switch_(move) | Source} */
  VOLT_SWITCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Struggle_Bug_(move) | Source} */
  STRUGGLE_BUG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bulldoze_(move) | Source} */
  BULLDOZE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Frost_Breath_(move) | Source} */
  FROST_BREATH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Tail_(move) | Source} */
  DRAGON_TAIL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Work_Up_(move) | Source} */
  WORK_UP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Electroweb_(move) | Source} */
  ELECTROWEB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wild_Charge_(move) | Source} */
  WILD_CHARGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Drill_Run_(move) | Source} */
  DRILL_RUN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dual_Chop_(move) | Source} */
  DUAL_CHOP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Heart_Stamp_(move) | Source} */
  HEART_STAMP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Horn_Leech_(move) | Source} */
  HORN_LEECH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sacred_Sword_(move) | Source} */
  SACRED_SWORD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Razor_Shell_(move) | Source} */
  RAZOR_SHELL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Heat_Crash_(move) | Source} */
  HEAT_CRASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Leaf_Tornado_(move) | Source} */
  LEAF_TORNADO,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Steamroller_(move) | Source} */
  STEAMROLLER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Cotton_Guard_(move) | Source} */
  COTTON_GUARD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Night_Daze_(move) | Source} */
  NIGHT_DAZE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psystrike_(move) | Source} */
  PSYSTRIKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tail_Slap_(move) | Source} */
  TAIL_SLAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hurricane_(move) | Source} */
  HURRICANE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Head_Charge_(move) | Source} */
  HEAD_CHARGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Gear_Grind_(move) | Source} */
  GEAR_GRIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Searing_Shot_(move) | Source} */
  SEARING_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Techno_Blast_(move) | Source} */
  TECHNO_BLAST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Relic_Song_(move) | Source} */
  RELIC_SONG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Secret_Sword_(move) | Source} */
  SECRET_SWORD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Glaciate_(move) | Source} */
  GLACIATE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bolt_Strike_(move) | Source} */
  BOLT_STRIKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Blue_Flare_(move) | Source} */
  BLUE_FLARE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fiery_Dance_(move) | Source} */
  FIERY_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Freeze_Shock_(move) | Source} */
  FREEZE_SHOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Burn_(move) | Source} */
  ICE_BURN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Snarl_(move) | Source} */
  SNARL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Icicle_Crash_(move) | Source} */
  ICICLE_CRASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/V_Create_(move) | Source} */
  V_CREATE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fusion_Flare_(move) | Source} */
  FUSION_FLARE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fusion_Bolt_(move) | Source} */
  FUSION_BOLT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flying_Press_(move) | Source} */
  FLYING_PRESS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mat_Block_(move) | Source} */
  MAT_BLOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Belch_(move) | Source} */
  BELCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rototiller_(move) | Source} */
  ROTOTILLER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sticky_Web_(move) | Source} */
  STICKY_WEB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fell_Stinger_(move) | Source} */
  FELL_STINGER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Phantom_Force_(move) | Source} */
  PHANTOM_FORCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Trick_Or_Treat_(move) | Source} */
  TRICK_OR_TREAT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Noble_Roar_(move) | Source} */
  NOBLE_ROAR,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ion_Deluge_(move) | Source} */
  ION_DELUGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Parabolic_Charge_(move) | Source} */
  PARABOLIC_CHARGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Forests_Curse_(move) | Source} */
  FORESTS_CURSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Petal_Blizzard_(move) | Source} */
  PETAL_BLIZZARD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Freeze_Dry_(move) | Source} */
  FREEZE_DRY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Disarming_Voice_(move) | Source} */
  DISARMING_VOICE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Parting_Shot_(move) | Source} */
  PARTING_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Topsy_Turvy_(move) | Source} */
  TOPSY_TURVY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Draining_Kiss_(move) | Source} */
  DRAINING_KISS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Crafty_Shield_(move) | Source} */
  CRAFTY_SHIELD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flower_Shield_(move) | Source} */
  FLOWER_SHIELD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Terrain_(move) | Source} */
  GRASSY_TERRAIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Misty_Terrain_(move) | Source} */
  MISTY_TERRAIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Electrify_(move) | Source} */
  ELECTRIFY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Play_Rough_(move) | Source} */
  PLAY_ROUGH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fairy_Wind_(move) | Source} */
  FAIRY_WIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Moonblast_(move) | Source} */
  MOONBLAST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Boomburst_(move) | Source} */
  BOOMBURST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fairy_Lock_(move) | Source} */
  FAIRY_LOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Kings_Shield_(move) | Source} */
  KINGS_SHIELD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Play_Nice_(move) | Source} */
  PLAY_NICE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Confide_(move) | Source} */
  CONFIDE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Diamond_Storm_(move) | Source} */
  DIAMOND_STORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Steam_Eruption_(move) | Source} */
  STEAM_ERUPTION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyperspace_Hole_(move) | Source} */
  HYPERSPACE_HOLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Water_Shuriken_(move) | Source} */
  WATER_SHURIKEN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mystical_Fire_(move) | Source} */
  MYSTICAL_FIRE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spiky_Shield_(move) | Source} */
  SPIKY_SHIELD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aromatic_Mist_(move) | Source} */
  AROMATIC_MIST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Eerie_Impulse_(move) | Source} */
  EERIE_IMPULSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Venom_Drench_(move) | Source} */
  VENOM_DRENCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Powder_(move) | Source} */
  POWDER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Geomancy_(move) | Source} */
  GEOMANCY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Magnetic_Flux_(move) | Source} */
  MAGNETIC_FLUX,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Happy_Hour_(move) | Source} */
  HAPPY_HOUR,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Electric_Terrain_(move) | Source} */
  ELECTRIC_TERRAIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dazzling_Gleam_(move) | Source} */
  DAZZLING_GLEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Celebrate_(move) | Source} */
  CELEBRATE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hold_Hands_(move) | Source} */
  HOLD_HANDS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Baby_Doll_Eyes_(move) | Source} */
  BABY_DOLL_EYES,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Nuzzle_(move) | Source} */
  NUZZLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hold_Back_(move) | Source} */
  HOLD_BACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Infestation_(move) | Source} */
  INFESTATION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Up_Punch_(move) | Source} */
  POWER_UP_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Oblivion_Wing_(move) | Source} */
  OBLIVION_WING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thousand_Arrows_(move) | Source} */
  THOUSAND_ARROWS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thousand_Waves_(move) | Source} */
  THOUSAND_WAVES,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lands_Wrath_(move) | Source} */
  LANDS_WRATH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Light_Of_Ruin_(move) | Source} */
  LIGHT_OF_RUIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Origin_Pulse_(move) | Source} */
  ORIGIN_PULSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Precipice_Blades_(move) | Source} */
  PRECIPICE_BLADES,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Ascent_(move) | Source} */
  DRAGON_ASCENT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyperspace_Fury_(move) | Source} */
  HYPERSPACE_FURY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Breakneck_Blitz__Physical_(move) | Source} */
  BREAKNECK_BLITZ__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Breakneck_Blitz__Special_(move) | Source} */
  BREAKNECK_BLITZ__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/All_Out_Pummeling__Physical_(move) | Source} */
  ALL_OUT_PUMMELING__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/All_Out_Pummeling__Special_(move) | Source} */
  ALL_OUT_PUMMELING__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Supersonic_Skystrike__Physical_(move) | Source} */
  SUPERSONIC_SKYSTRIKE__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Supersonic_Skystrike__Special_(move) | Source} */
  SUPERSONIC_SKYSTRIKE__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Acid_Downpour__Physical_(move) | Source} */
  ACID_DOWNPOUR__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Acid_Downpour__Special_(move) | Source} */
  ACID_DOWNPOUR__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tectonic_Rage__Physical_(move) | Source} */
  TECTONIC_RAGE__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tectonic_Rage__Special_(move) | Source} */
  TECTONIC_RAGE__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Continental_Crush__Physical_(move) | Source} */
  CONTINENTAL_CRUSH__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Continental_Crush__Special_(move) | Source} */
  CONTINENTAL_CRUSH__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Savage_Spin_Out__Physical_(move) | Source} */
  SAVAGE_SPIN_OUT__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Savage_Spin_Out__Special_(move) | Source} */
  SAVAGE_SPIN_OUT__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Never_Ending_Nightmare__Physical_(move) | Source} */
  NEVER_ENDING_NIGHTMARE__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Never_Ending_Nightmare__Special_(move) | Source} */
  NEVER_ENDING_NIGHTMARE__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Corkscrew_Crash__Physical_(move) | Source} */
  CORKSCREW_CRASH__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Corkscrew_Crash__Special_(move) | Source} */
  CORKSCREW_CRASH__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Inferno_Overdrive__Physical_(move) | Source} */
  INFERNO_OVERDRIVE__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Inferno_Overdrive__Special_(move) | Source} */
  INFERNO_OVERDRIVE__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydro_Vortex__Physical_(move) | Source} */
  HYDRO_VORTEX__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydro_Vortex__Special_(move) | Source} */
  HYDRO_VORTEX__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bloom_Doom__Physical_(move) | Source} */
  BLOOM_DOOM__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bloom_Doom__Special_(move) | Source} */
  BLOOM_DOOM__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Gigavolt_Havoc__Physical_(move) | Source} */
  GIGAVOLT_HAVOC__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Gigavolt_Havoc__Special_(move) | Source} */
  GIGAVOLT_HAVOC__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shattered_Psyche__Physical_(move) | Source} */
  SHATTERED_PSYCHE__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shattered_Psyche__Special_(move) | Source} */
  SHATTERED_PSYCHE__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Subzero_Slammer__Physical_(move) | Source} */
  SUBZERO_SLAMMER__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Subzero_Slammer__Special_(move) | Source} */
  SUBZERO_SLAMMER__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Devastating_Drake__Physical_(move) | Source} */
  DEVASTATING_DRAKE__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Devastating_Drake__Special_(move) | Source} */
  DEVASTATING_DRAKE__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Black_Hole_Eclipse__Physical_(move) | Source} */
  BLACK_HOLE_ECLIPSE__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Black_Hole_Eclipse__Special_(move) | Source} */
  BLACK_HOLE_ECLIPSE__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Twinkle_Tackle__Physical_(move) | Source} */
  TWINKLE_TACKLE__PHYSICAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Twinkle_Tackle__Special_(move) | Source} */
  TWINKLE_TACKLE__SPECIAL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Catastropika_(move) | Source} */
  CATASTROPIKA,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shore_Up_(move) | Source} */
  SHORE_UP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/First_Impression_(move) | Source} */
  FIRST_IMPRESSION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Baneful_Bunker_(move) | Source} */
  BANEFUL_BUNKER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spirit_Shackle_(move) | Source} */
  SPIRIT_SHACKLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Darkest_Lariat_(move) | Source} */
  DARKEST_LARIAT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sparkling_Aria_(move) | Source} */
  SPARKLING_ARIA,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Hammer_(move) | Source} */
  ICE_HAMMER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Floral_Healing_(move) | Source} */
  FLORAL_HEALING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/High_Horsepower_(move) | Source} */
  HIGH_HORSEPOWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Strength_Sap_(move) | Source} */
  STRENGTH_SAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Solar_Blade_(move) | Source} */
  SOLAR_BLADE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Leafage_(move) | Source} */
  LEAFAGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spotlight_(move) | Source} */
  SPOTLIGHT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Toxic_Thread_(move) | Source} */
  TOXIC_THREAD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Laser_Focus_(move) | Source} */
  LASER_FOCUS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Gear_Up_(move) | Source} */
  GEAR_UP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Throat_Chop_(move) | Source} */
  THROAT_CHOP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pollen_Puff_(move) | Source} */
  POLLEN_PUFF,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Anchor_Shot_(move) | Source} */
  ANCHOR_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psychic_Terrain_(move) | Source} */
  PSYCHIC_TERRAIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lunge_(move) | Source} */
  LUNGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fire_Lash_(move) | Source} */
  FIRE_LASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Trip_(move) | Source} */
  POWER_TRIP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Burn_Up_(move) | Source} */
  BURN_UP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Speed_Swap_(move) | Source} */
  SPEED_SWAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Smart_Strike_(move) | Source} */
  SMART_STRIKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Purify_(move) | Source} */
  PURIFY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Revelation_Dance_(move) | Source} */
  REVELATION_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Core_Enforcer_(move) | Source} */
  CORE_ENFORCER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Trop_Kick_(move) | Source} */
  TROP_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Instruct_(move) | Source} */
  INSTRUCT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Beak_Blast_(move) | Source} */
  BEAK_BLAST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Clanging_Scales_(move) | Source} */
  CLANGING_SCALES,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Hammer_(move) | Source} */
  DRAGON_HAMMER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Brutal_Swing_(move) | Source} */
  BRUTAL_SWING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aurora_Veil_(move) | Source} */
  AURORA_VEIL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sinister_Arrow_Raid_(move) | Source} */
  SINISTER_ARROW_RAID,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Malicious_Moonsault_(move) | Source} */
  MALICIOUS_MOONSAULT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Oceanic_Operetta_(move) | Source} */
  OCEANIC_OPERETTA,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Guardian_Of_Alola_(move) | Source} */
  GUARDIAN_OF_ALOLA,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Soul_Stealing_7_Star_Strike_(move) | Source} */
  SOUL_STEALING_7_STAR_STRIKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Stoked_Sparksurfer_(move) | Source} */
  STOKED_SPARKSURFER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pulverizing_Pancake_(move) | Source} */
  PULVERIZING_PANCAKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Extreme_Evoboost_(move) | Source} */
  EXTREME_EVOBOOST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Genesis_Supernova_(move) | Source} */
  GENESIS_SUPERNOVA,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shell_Trap_(move) | Source} */
  SHELL_TRAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fleur_Cannon_(move) | Source} */
  FLEUR_CANNON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psychic_Fangs_(move) | Source} */
  PSYCHIC_FANGS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Stomping_Tantrum_(move) | Source} */
  STOMPING_TANTRUM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shadow_Bone_(move) | Source} */
  SHADOW_BONE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Accelerock_(move) | Source} */
  ACCELEROCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Liquidation_(move) | Source} */
  LIQUIDATION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Prismatic_Laser_(move) | Source} */
  PRISMATIC_LASER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spectral_Thief_(move) | Source} */
  SPECTRAL_THIEF,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sunsteel_Strike_(move) | Source} */
  SUNSTEEL_STRIKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Moongeist_Beam_(move) | Source} */
  MOONGEIST_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tearful_Look_(move) | Source} */
  TEARFUL_LOOK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Zing_Zap_(move) | Source} */
  ZING_ZAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Natures_Madness_(move) | Source} */
  NATURES_MADNESS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Multi_Attack_(move) | Source} */
  MULTI_ATTACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ten_Million_Volt_Thunderbolt_(move) | Source} */
  TEN_MILLION_VOLT_THUNDERBOLT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mind_Blown_(move) | Source} */
  MIND_BLOWN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Plasma_Fists_(move) | Source} */
  PLASMA_FISTS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Photon_Geyser_(move) | Source} */
  PHOTON_GEYSER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Light_That_Burns_The_Sky_(move) | Source} */
  LIGHT_THAT_BURNS_THE_SKY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Searing_Sunraze_Smash_(move) | Source} */
  SEARING_SUNRAZE_SMASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Menacing_Moonraze_Maelstrom_(move) | Source} */
  MENACING_MOONRAZE_MAELSTROM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lets_Snuggle_Forever_(move) | Source} */
  LETS_SNUGGLE_FOREVER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Splintered_Stormshards_(move) | Source} */
  SPLINTERED_STORMSHARDS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Clangorous_Soulblaze_(move) | Source} */
  CLANGOROUS_SOULBLAZE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Zippy_Zap_(move) | Source} */
  ZIPPY_ZAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Splishy_Splash_(move) | Source} */
  SPLISHY_SPLASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Floaty_Fall_(move) | Source} */
  FLOATY_FALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pika_Papow_(move) | Source} */
  PIKA_PAPOW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bouncy_Bubble_(move) | Source} */
  BOUNCY_BUBBLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Buzzy_Buzz_(move) | Source} */
  BUZZY_BUZZ,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sizzly_Slide_(move) | Source} */
  SIZZLY_SLIDE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Glitzy_Glow_(move) | Source} */
  GLITZY_GLOW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Baddy_Bad_(move) | Source} */
  BADDY_BAD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sappy_Seed_(move) | Source} */
  SAPPY_SEED,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Freezy_Frost_(move) | Source} */
  FREEZY_FROST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sparkly_Swirl_(move) | Source} */
  SPARKLY_SWIRL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Veevee_Volley_(move) | Source} */
  VEEVEE_VOLLEY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Iron_Bash_(move) | Source} */
  DOUBLE_IRON_BASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Guard_(move) | Source} */
  MAX_GUARD,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dynamax_Cannon_(move) | Source} */
  DYNAMAX_CANNON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Snipe_Shot_(move) | Source} */
  SNIPE_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Jaw_Lock_(move) | Source} */
  JAW_LOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Stuff_Cheeks_(move) | Source} */
  STUFF_CHEEKS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/No_Retreat_(move) | Source} */
  NO_RETREAT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tar_Shot_(move) | Source} */
  TAR_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Magic_Powder_(move) | Source} */
  MAGIC_POWDER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Darts_(move) | Source} */
  DRAGON_DARTS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Teatime_(move) | Source} */
  TEATIME,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Octolock_(move) | Source} */
  OCTOLOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bolt_Beak_(move) | Source} */
  BOLT_BEAK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fishious_Rend_(move) | Source} */
  FISHIOUS_REND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Court_Change_(move) | Source} */
  COURT_CHANGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Flare_(move) | Source} */
  MAX_FLARE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Flutterby_(move) | Source} */
  MAX_FLUTTERBY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Lightning_(move) | Source} */
  MAX_LIGHTNING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Strike_(move) | Source} */
  MAX_STRIKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Knuckle_(move) | Source} */
  MAX_KNUCKLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Phantasm_(move) | Source} */
  MAX_PHANTASM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Hailstorm_(move) | Source} */
  MAX_HAILSTORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Ooze_(move) | Source} */
  MAX_OOZE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Geyser_(move) | Source} */
  MAX_GEYSER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Airstream_(move) | Source} */
  MAX_AIRSTREAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Starfall_(move) | Source} */
  MAX_STARFALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Wyrmwind_(move) | Source} */
  MAX_WYRMWIND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Mindstorm_(move) | Source} */
  MAX_MINDSTORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Rockfall_(move) | Source} */
  MAX_ROCKFALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Quake_(move) | Source} */
  MAX_QUAKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Darkness_(move) | Source} */
  MAX_DARKNESS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Overgrowth_(move) | Source} */
  MAX_OVERGROWTH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Max_Steelspike_(move) | Source} */
  MAX_STEELSPIKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Clangorous_Soul_(move) | Source} */
  CLANGOROUS_SOUL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Body_Press_(move) | Source} */
  BODY_PRESS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Decorate_(move) | Source} */
  DECORATE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Drum_Beating_(move) | Source} */
  DRUM_BEATING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Snap_Trap_(move) | Source} */
  SNAP_TRAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pyro_Ball_(move) | Source} */
  PYRO_BALL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Behemoth_Blade_(move) | Source} */
  BEHEMOTH_BLADE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Behemoth_Bash_(move) | Source} */
  BEHEMOTH_BASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aura_Wheel_(move) | Source} */
  AURA_WHEEL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Breaking_Swipe_(move) | Source} */
  BREAKING_SWIPE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Branch_Poke_(move) | Source} */
  BRANCH_POKE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Overdrive_(move) | Source} */
  OVERDRIVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Apple_Acid_(move) | Source} */
  APPLE_ACID,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Grav_Apple_(move) | Source} */
  GRAV_APPLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spirit_Break_(move) | Source} */
  SPIRIT_BREAK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Strange_Steam_(move) | Source} */
  STRANGE_STEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Life_Dew_(move) | Source} */
  LIFE_DEW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Obstruct_(move) | Source} */
  OBSTRUCT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/False_Surrender_(move) | Source} */
  FALSE_SURRENDER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Meteor_Assault_(move) | Source} */
  METEOR_ASSAULT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Eternabeam_(move) | Source} */
  ETERNABEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Steel_Beam_(move) | Source} */
  STEEL_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Expanding_Force_(move) | Source} */
  EXPANDING_FORCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Steel_Roller_(move) | Source} */
  STEEL_ROLLER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Scale_Shot_(move) | Source} */
  SCALE_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Meteor_Beam_(move) | Source} */
  METEOR_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shell_Side_Arm_(move) | Source} */
  SHELL_SIDE_ARM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Misty_Explosion_(move) | Source} */
  MISTY_EXPLOSION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Grassy_Glide_(move) | Source} */
  GRASSY_GLIDE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rising_Voltage_(move) | Source} */
  RISING_VOLTAGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Terrain_Pulse_(move) | Source} */
  TERRAIN_PULSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Skitter_Smack_(move) | Source} */
  SKITTER_SMACK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Burning_Jealousy_(move) | Source} */
  BURNING_JEALOUSY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lash_Out_(move) | Source} */
  LASH_OUT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Poltergeist_(move) | Source} */
  POLTERGEIST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Corrosive_Gas_(move) | Source} */
  CORROSIVE_GAS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Coaching_(move) | Source} */
  COACHING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flip_Turn_(move) | Source} */
  FLIP_TURN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Triple_Axel_(move) | Source} */
  TRIPLE_AXEL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dual_Wingbeat_(move) | Source} */
  DUAL_WINGBEAT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Scorching_Sands_(move) | Source} */
  SCORCHING_SANDS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Jungle_Healing_(move) | Source} */
  JUNGLE_HEALING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wicked_Blow_(move) | Source} */
  WICKED_BLOW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Surging_Strikes_(move) | Source} */
  SURGING_STRIKES,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunder_Cage_(move) | Source} */
  THUNDER_CAGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Energy_(move) | Source} */
  DRAGON_ENERGY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Freezing_Glare_(move) | Source} */
  FREEZING_GLARE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fiery_Wrath_(move) | Source} */
  FIERY_WRATH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunderous_Kick_(move) | Source} */
  THUNDEROUS_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Glacial_Lance_(move) | Source} */
  GLACIAL_LANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Astral_Barrage_(move) | Source} */
  ASTRAL_BARRAGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Eerie_Spell_(move) | Source} */
  EERIE_SPELL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dire_Claw_(move) | Source} */
  DIRE_CLAW,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psyshield_Bash_(move) | Source} */
  PSYSHIELD_BASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Power_Shift_(move) | Source} */
  POWER_SHIFT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Stone_Axe_(move) | Source} */
  STONE_AXE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Springtide_Storm_(move) | Source} */
  SPRINGTIDE_STORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mystical_Power_(move) | Source} */
  MYSTICAL_POWER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Raging_Fury_(move) | Source} */
  RAGING_FURY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wave_Crash_(move) | Source} */
  WAVE_CRASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Chloroblast_(move) | Source} */
  CHLOROBLAST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mountain_Gale_(move) | Source} */
  MOUNTAIN_GALE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Victory_Dance_(move) | Source} */
  VICTORY_DANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Headlong_Rush_(move) | Source} */
  HEADLONG_RUSH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Barb_Barrage_(move) | Source} */
  BARB_BARRAGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Esper_Wing_(move) | Source} */
  ESPER_WING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bitter_Malice_(move) | Source} */
  BITTER_MALICE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shelter_(move) | Source} */
  SHELTER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Triple_Arrows_(move) | Source} */
  TRIPLE_ARROWS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Infernal_Parade_(move) | Source} */
  INFERNAL_PARADE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ceaseless_Edge_(move) | Source} */
  CEASELESS_EDGE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bleakwind_Storm_(move) | Source} */
  BLEAKWIND_STORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wildbolt_Storm_(move) | Source} */
  WILDBOLT_STORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Sandsear_Storm_(move) | Source} */
  SANDSEAR_STORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lunar_Blessing_(move) | Source} */
  LUNAR_BLESSING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Take_Heart_(move) | Source} */
  TAKE_HEART,
  /*G_MAX_WILDFIRE,
  G_MAX_BEFUDDLE,
  G_MAX_VOLT_CRASH,
  G_MAX_GOLD_RUSH,
  G_MAX_CHI_STRIKE,
  G_MAX_TERROR,
  G_MAX_RESONANCE,
  G_MAX_CUDDLE,
  G_MAX_REPLENISH,
  G_MAX_MALODOR,
  G_MAX_STONESURGE,
  G_MAX_WIND_RAGE,
  G_MAX_STUN_SHOCK,
  G_MAX_FINALE,
  G_MAX_DEPLETION,
  G_MAX_GRAVITAS,
  G_MAX_VOLCALITH,
  G_MAX_SANDBLAST,
  G_MAX_SNOOZE,
  G_MAX_TARTNESS,
  G_MAX_SWEETNESS,
  G_MAX_SMITE,
  G_MAX_STEELSURGE,
  G_MAX_MELTDOWN,
  G_MAX_FOAM_BURST,
  G_MAX_CENTIFERNO,
  G_MAX_VINE_LASH,
  G_MAX_CANNONADE,
  G_MAX_DRUM_SOLO,
  G_MAX_FIREBALL,
  G_MAX_HYDROSNIPE,
  G_MAX_ONE_BLOW,
  G_MAX_RAPID_FLOW,*/
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tera_Blast_(move) | Source} */
  TERA_BLAST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Silk_Trap_(move) | Source} */
  SILK_TRAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Axe_Kick_(move) | Source} */
  AXE_KICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Last_Respects_(move) | Source} */
  LAST_RESPECTS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Lumina_Crash_(move) | Source} */
  LUMINA_CRASH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Order_Up_(move) | Source} */
  ORDER_UP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Jet_Punch_(move) | Source} */
  JET_PUNCH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spicy_Extract_(move) | Source} */
  SPICY_EXTRACT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Spin_Out_(move) | Source} */
  SPIN_OUT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Population_Bomb_(move) | Source} */
  POPULATION_BOMB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ice_Spinner_(move) | Source} */
  ICE_SPINNER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Glaive_Rush_(move) | Source} */
  GLAIVE_RUSH,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Revival_Blessing_(move) | Source} */
  REVIVAL_BLESSING,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Salt_Cure_(move) | Source} */
  SALT_CURE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Triple_Dive_(move) | Source} */
  TRIPLE_DIVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mortal_Spin_(move) | Source} */
  MORTAL_SPIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Doodle_(move) | Source} */
  DOODLE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fillet_Away_(move) | Source} */
  FILLET_AWAY,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Kowtow_Cleave_(move) | Source} */
  KOWTOW_CLEAVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Flower_Trick_(move) | Source} */
  FLOWER_TRICK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Torch_Song_(move) | Source} */
  TORCH_SONG,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aqua_Step_(move) | Source} */
  AQUA_STEP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Raging_Bull_(move) | Source} */
  RAGING_BULL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Make_It_Rain_(move) | Source} */
  MAKE_IT_RAIN,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psyblade_(move) | Source} */
  PSYBLADE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hydro_Steam_(move) | Source} */
  HYDRO_STEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ruination_(move) | Source} */
  RUINATION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Collision_Course_(move) | Source} */
  COLLISION_COURSE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Electro_Drift_(move) | Source} */
  ELECTRO_DRIFT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Shed_Tail_(move) | Source} */
  SHED_TAIL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Chilly_Reception_(move) | Source} */
  CHILLY_RECEPTION,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tidy_Up_(move) | Source} */
  TIDY_UP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Snowscape_(move) | Source} */
  SNOWSCAPE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Pounce_(move) | Source} */
  POUNCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Trailblaze_(move) | Source} */
  TRAILBLAZE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Chilling_Water_(move) | Source} */
  CHILLING_WATER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hyper_Drill_(move) | Source} */
  HYPER_DRILL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Twin_Beam_(move) | Source} */
  TWIN_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Rage_Fist_(move) | Source} */
  RAGE_FIST,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Armor_Cannon_(move) | Source} */
  ARMOR_CANNON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Bitter_Blade_(move) | Source} */
  BITTER_BLADE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Double_Shock_(move) | Source} */
  DOUBLE_SHOCK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Gigaton_Hammer_(move) | Source} */
  GIGATON_HAMMER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Comeuppance_(move) | Source} */
  COMEUPPANCE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Aqua_Cutter_(move) | Source} */
  AQUA_CUTTER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Blazing_Torque_(move) | Source} */
  BLAZING_TORQUE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Wicked_Torque_(move) | Source} */
  WICKED_TORQUE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Noxious_Torque_(move) | Source} */
  NOXIOUS_TORQUE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Combat_Torque_(move) | Source} */
  COMBAT_TORQUE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Magical_Torque_(move) | Source} */
  MAGICAL_TORQUE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Blood_Moon_(move) | Source} */
  BLOOD_MOON,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Matcha_Gotcha_(move) | Source} */
  MATCHA_GOTCHA,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Syrup_Bomb_(move) | Source} */
  SYRUP_BOMB,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Ivy_Cudgel_(move) | Source} */
  IVY_CUDGEL,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Electro_Shot_(move) | Source} */
  ELECTRO_SHOT,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tera_Starstorm_(move) | Source} */
  TERA_STARSTORM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Fickle_Beam_(move) | Source} */
  FICKLE_BEAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Burning_Bulwark_(move) | Source} */
  BURNING_BULWARK,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Thunderclap_(move) | Source} */
  THUNDERCLAP,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Mighty_Cleave_(move) | Source} */
  MIGHTY_CLEAVE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Tachyon_Cutter_(move) | Source} */
  TACHYON_CUTTER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Hard_Press_(move) | Source} */
  HARD_PRESS,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Dragon_Cheer_(move) | Source} */
  DRAGON_CHEER,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Alluring_Voice_(move) | Source} */
  ALLURING_VOICE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Temper_Flare_(move) | Source} */
  TEMPER_FLARE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Supercell_Slam_(move) | Source} */
  SUPERCELL_SLAM,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Psychic_Noise_(move) | Source} */
  PSYCHIC_NOISE,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Upper_Hand_(move) | Source} */
  UPPER_HAND,
  /**{@link https://bulbapedia.bulbagarden.net/wiki/Malignant_Chain_(move) | Source} */
  MALIGNANT_CHAIN,
}
