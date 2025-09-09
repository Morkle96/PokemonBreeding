import React from "react";
import { View } from "react-native";
import { VictoryBar, VictoryChart, VictoryPolarAxis, VictoryTheme } from "victory";

export const PokemonRadar = ({ labels, values }: { labels: string[], values: number[] }) => {
    const data = labels.map((label, i) => ({
        x: label,
        y: values[i],
    }));

    return (
        <View>
            <VictoryChart
                polar
                theme={VictoryTheme.clean}
                startAngle={90}
                endAngle={450}
            >
                <VictoryPolarAxis
                    tickValues={[
                        0, 45, 90, 135, 180, 225, 270,
                        315,
                    ]}
                    labelPlacement="vertical"
                />
                <VictoryBar
                    data={[
                        { x: 0, y: 2 },
                        { x: 60, y: 3 },
                        { x: 120, y: 5 },
                        { x: 180, y: 4 },
                        { x: 240, y: 4 },
                        { x: 300, y: 4 },
                    ]}
                />
            </VictoryChart>

            <VictoryChart
                polar
                theme={VictoryTheme.clean}
                startAngle={0}
                endAngle={180}
            >
                <VictoryPolarAxis
                    tickValues={[0, 45, 90, 135, 180]}
                    labelPlacement="vertical"
                />
                <VictoryBar
                    data={[
                        { x: 0, y: 2 },
                        { x: 45, y: 3 },
                        { x: 90, y: 5 },
                        { x: 135, y: 4 },
                        { x: 180, y: 7 },
                    ]}
                />
            </VictoryChart>
        </View>
    );
};
