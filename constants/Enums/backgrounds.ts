import { Type } from "./type";

export const getBackgroundColorForType = (type: Type): string => {
    switch (type) {
        case Type.NORMAL:
            return require("@/assets/images/Backgrounds/grass_bg.png");
        case Type.FIGHTING:
            return require("@/assets/images/Backgrounds/grass_bg.png");
        case Type.FLYING:
            return require("@/assets/images/Backgrounds/grass_bg.png");
        case Type.POISON:
            return require("@/assets/images/Backgrounds/grass_bg.png");
        case Type.GROUND:
            return require("@/assets/images/Backgrounds/grass_bg.png");
        case Type.ROCK:
            return require("@/assets/images/Backgrounds/cave_bg.png");
        case Type.BUG:
            return require("@/assets/images/Backgrounds/grass_bg.png");
        case Type.GHOST:
            return require("@/assets/images/Backgrounds/space_bg.png");
        case Type.STEEL:
            return require("@/assets/images/Backgrounds/grass_bg.png");
        case Type.FIRE:
            return require("@/assets/images/Backgrounds/volcano_bg.png");
        case Type.WATER:
            return require("@/assets/images/Backgrounds/sea_bg.png");
        case Type.GRASS:
            return require("@/assets/images/Backgrounds/grass_bg.png");
        case Type.ELECTRIC:
            return require("@/assets/images/Backgrounds/grass_bg.png");
        case Type.PSYCHIC:
            return require("@/assets/images/Backgrounds/space_bg.png");
        case Type.ICE:
            return require("@/assets/images/Backgrounds/snowy_forest_bg.png");
        case Type.DRAGON:
            return require("@/assets/images/Backgrounds/grass_bg.png");
        case Type.DARK:
            return require("@/assets/images/Backgrounds/space_bg.png");
        case Type.FAIRY:
            return require("@/assets/images/Backgrounds/fairy_cave_bg.png");
        case Type.STELLAR:
            return require("@/assets/images/Backgrounds/space_bg.png");
        default:
            return require("@/assets/images/Backgrounds/grass_bg.png");
    }
};