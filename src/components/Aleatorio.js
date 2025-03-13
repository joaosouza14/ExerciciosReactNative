import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

export default (props) => {
    console.warn(props)
    return (
        <>
        <Text>Boa sorte!</Text>
        <Text style={Estilo.fontG}>
            O número é: {parseInt(Math.random() * (props.num2 - props.num1 + 1)) + props.num1}
        </Text>
        </>
    )
}