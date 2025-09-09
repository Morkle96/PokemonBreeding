import { getBackgroundColorForType } from '@/constants/Enums/backgrounds';
import { PokemonType } from '@/constants/Enums/type';
import { Canvas, FilterMode, MipmapMode, Image as SkiaImage, useImage } from '@shopify/react-native-skia';
import React from 'react';
import {
    View
} from 'react-native';


type Props = {
    type: PokemonType;
    scaleX?: number;
    scaleY?: number;
};

export const PokemonBackground: React.FC<Props> = ({
    type,
    scaleX = 1,
    scaleY = 1
}) => {

    const backgroundImage = useImage(getBackgroundColorForType(type));

    return (
        <View>
            <Canvas style={{ width: 100 * scaleX, height: 100 * scaleY, position: "absolute", zIndex: 0 }}>
                <SkiaImage image={backgroundImage}
                    fit={"cover"}
                    x={0}
                    y={0}
                    width={100 * scaleX}
                    height={100 * scaleY}
                    sampling={{
                        filter: FilterMode.Nearest,
                        mipmap: MipmapMode.Nearest,
                    }} />
            </Canvas>

        </View>

    );
};

