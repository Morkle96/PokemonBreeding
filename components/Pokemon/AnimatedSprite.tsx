import { pokemonJson } from '@/constants/Data/pokemonJsonLoader';
import { pokemonImages } from '@/constants/Data/spriteCollection/pokemonImages';
import { pokemonImagesShiny } from '@/constants/Data/spriteCollection/pokemonImagesShiny';
import { SpeciesId } from '@/constants/Enums/species';
import { Canvas, FilterMode, MipmapMode, Image as SkiaImage, useImage } from '@shopify/react-native-skia';
import React, { useEffect, useRef, useState } from 'react';
import {
    ImageStyle,
    View,
    ViewStyle
} from 'react-native';

type Frame = {
    filename: string;
    rotated: boolean;
    trimmed: boolean;
    sourceSize: { w: number; h: number };
    spriteSourceSize?: { x: number; y: number; w: number; h: number };
    frame: { x: number; y: number; w: number; h: number };
    zoomX?: number;
    zoomY?: number;
    angle?: number;
};

type TextureEntry = {
    image: string;
    format: string;
    size: { w: number; h: number };
    scale: number;
    frames: Frame[];
};

type Props = {
    pokemonId: number;
    isShiny?: boolean;
    fps?: number;
    customScale?: number;
    play?: boolean;
};

function getFrameByIndex(frames: Frame[], index: number): Frame | undefined {
    const filename = index.toString().padStart(4, '0') + '.png';
    return frames.find(f => f.filename === filename);
}

export const AnimatedSprite: React.FC<Props> = ({
    pokemonId,
    isShiny = false,
    fps = 8,
    customScale = 1,
    play = true,
}) => {

    const speciesName = SpeciesId[pokemonId];
    const json = pokemonJson[speciesName].textures[0] as TextureEntry;

    var pokemonSprite = pokemonImages[speciesName]();
    if (isShiny) {
        pokemonSprite = pokemonImagesShiny[speciesName]();
    }

    const [currentIndex, setCurrentIndex] = useState(0);
    const lastValidFrameRef = useRef<Frame>(json.frames[0]);


    // Handle animation
    useEffect(() => {
        if (!play) {
            setCurrentIndex(0); // reset to first frame if paused/stopped
            return;
        }

        const interval = setInterval(() => {
            setCurrentIndex((i) => (i + 1) % json.frames.length);
        }, 1000 / fps);

        return () => clearInterval(interval);
    }, [json.frames.length, fps, play]);

    const foundFrame = getFrameByIndex(json.frames, currentIndex);

    if (foundFrame) {
        lastValidFrameRef.current = foundFrame;
    }

    const frame = lastValidFrameRef.current;

    const {
        frame: rect,
        sourceSize,
        spriteSourceSize,
        zoomX = 100,
        zoomY = 100,
    } = frame;

    const scaleX = (zoomX / 100) * customScale;
    const scaleY = (zoomY / 100) * customScale;

    const offsetX = spriteSourceSize?.x ?? 0;
    const offsetY = spriteSourceSize?.y ?? 0;

    const containerStyle: ViewStyle = {
        width: sourceSize.w * scaleX,
        height: sourceSize.h * scaleY,
    };

    const heightDiff = rect.h * scaleY - sourceSize.h * scaleY;

    const animatedSpriteStyle: ViewStyle = {
        width: 100 * scaleX,
        height: 100 * scaleY,
        // backgroundColor: "white",
        borderRadius: 12, //12
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    };

    const frameBoxStyle: ViewStyle = {
        width: rect.w * scaleX,
        height: rect.h * scaleY,
        overflow: 'hidden',
        transform: [
            { translateY: -heightDiff },
            { translateX: (spriteSourceSize?.x ?? 0) * scaleX },
        ],
    };

    const imageStyle: ImageStyle = {
        width: json.size.w * scaleX,
        height: json.size.h * scaleY,
        transform: [
            { translateX: (-rect.x * scaleX + offsetX * scaleX) - (spriteSourceSize?.x ?? 0) * scaleX },
            { translateY: (-rect.y * scaleY + offsetY * scaleY) - (spriteSourceSize?.y ?? 0) * scaleY },
        ],
    };

    const pokemonImage = useImage(pokemonSprite);

    return (
        <View style={animatedSpriteStyle}>
            <View style={containerStyle}>
                <View style={frameBoxStyle}>
                    <Canvas style={{ width: imageStyle.width, height: imageStyle.height, position: "absolute", zIndex: 1 }}>
                        <SkiaImage
                            image={pokemonImage}
                            fit="contain"
                            x={(-rect.x * scaleX + offsetX * scaleX) - (spriteSourceSize?.x ?? 0) * scaleX}
                            y={(-rect.y * scaleY + offsetY * scaleY) - (spriteSourceSize?.y ?? 0) * scaleY}
                            width={json.size.w * scaleX}
                            height={json.size.h * scaleY}
                            sampling={{
                                filter: FilterMode.Nearest,
                                mipmap: MipmapMode.Nearest,
                            }}
                        />
                    </Canvas>
                </View>
            </View>
        </View>
    );
};