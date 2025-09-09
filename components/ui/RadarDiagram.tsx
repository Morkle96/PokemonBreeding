import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Svg, { Polygon } from "react-native-svg";
import {
    VictoryArea,
    VictoryChart,
    VictoryGroup,
    VictoryPolarAxis,
    VictoryTheme
} from "victory-native";

const ivLabels = ["HP", "ATK", "DEF", "SPD", "SP.DEF", "SP.ATK"];

export function ChartRadarIVs({ pokemon }: { pokemon: { name: string; iv: number[] } }) {
    const radarData = ivLabels
        .map((label, i) => ({ x: label, y: pokemon.iv[i] }))
        .reverse()

    // Make hexagon grid points (N = number of stats)
    const makePolygon = (radius: number, sides: number) => {
        const angle = (2 * Math.PI) / sides
        return Array.from({ length: sides }, (_, i) => {
            const x = radius * Math.sin(i * angle)
            const y = -radius * Math.cos(i * angle)
            return `${x},${y}`
        }).join(" ")
    }

    const labelPosition = (index: number, total: number, distance: number) => {
        const angle = (2 * Math.PI * index) / total;
        const x = distance * Math.sin(angle);
        const y = -distance * Math.cos(angle);

        return [
            { translateX: x },
            { translateY: y }
        ];
    };

    return (
        <View style={styles.card}>
            <View style={{ width: 250, height: 250, alignItems: "center", justifyContent: "center" }}>

                {ivLabels.map((label, i) => (
                    <View key={label} style={{ position: "absolute", transform: labelPosition(i, ivLabels.length, 130) }}>
                        <Text style={{ fontSize: 12, fontFamily: "PokemonFont", textAlign: "center" }}>{pokemon.iv[i]}</Text>
                        <Text style={{ fontSize: 12, fontFamily: "PokemonFont", textAlign: "center" }}>{label}</Text>
                    </View>
                ))}

                {/* Overlay container */}
                <View style={{ position: "absolute", width: "100%", height: "100%" }}>
                    {/* Hexagon background */}
                    <Svg height="100%" width="100%" viewBox="-100 -100 200 200">
                        <Polygon points={makePolygon(40, 6)} stroke="#ddd" fill="none" />
                        <Polygon points={makePolygon(70, 6)} stroke="#6c7fcb" fill="none" strokeWidth={5} />
                    </Svg>
                </View>

                {/* Radar chart on top */}
                <View style={{ transform: [{ rotate: "210deg" }] }}>
                    <VictoryChart polar theme={VictoryTheme.material} domain={{ y: [0, 31] }} height={270} width={350}>
                        <VictoryGroup
                            color="#6c7fcb"
                            style={{ data: { fillOpacity: 0.6, strokeWidth: 0 } }}
                        >
                            <VictoryArea data={radarData} />
                        </VictoryGroup>

                        <VictoryPolarAxis
                            tickFormat={() => ""}
                            style={{
                                axis: { stroke: "none" },
                                grid: { stroke: "none" },
                                ticks: { stroke: "none" },
                                tickLabels: { stroke: "none", fill: "transparent" }, // hides tick labels
                                axisLabel: { stroke: "none", fill: "transparent" },
                            }}
                        />
                    </VictoryChart>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        width: 350,
        height: 350,
        backgroundColor: "#fff",
        padding: 16,
        margin: 16,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        textAlign: "center",
    },
})
