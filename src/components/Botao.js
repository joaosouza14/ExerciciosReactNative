import React from "react";
import { Button, Text } from "react-native";

export default (props) => {
    function executar(){
        console.warn('Exec!!!')
    }
    return (
        <>
        <Button title="Executar #1!" onPress={executar}/>
        <Button title="Executar #2!" onPress={() => console.warn('Exec Difenrenciado!')}/>
        </>
    )
}