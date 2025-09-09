import { Color } from "@/constants/Enums/color";
import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface CustomTextProps extends TextProps { }

export const CustomText: React.FC<CustomTextProps> = ({ style, ...props }) => {
    return <Text {...props} style={[styles.text, style]} />;
};

const styles = StyleSheet.create({
    text: {
        color: Color.DARK_GREY,
        fontFamily: "PokemonFont",
    },
});

export default CustomText;
