import React from "react";
import { Text, View, StyleSheet } from "react-native";

// import Primeiro from './components/Primeiro.js'
// import X, { Comp2, Comp3 } from './components/Multi'
// import MinMax from './components/MinMax.js'
// import Alea from './components/Aleatorio'
// import Botao from './components/Botao'
// import Contador from './components/Contador'
// import Pai from './components/direta/Pai';
// import ContadorV2 from './components/contador/ContadorV2';
// import ListaProdutos from "./components/produtos/ListaProdutos";
import ListaProdutosV2 from "./components/produtos/ListaProdutosV2";

export default () => (
  <View style={style.App}>
    <ListaProdutosV2 />
    {/* <ListaProdutos /> */}
    {/* <ContadorV2/> */}
    {/* <Pai /> */}
    {/* <Contador inicial={1}/> */}
    {/* <Botao/> */}
    {/* <Alea num1={1} num2={60}/> */}
    {/* <MinMax min={3} max={20}/>
    <MinMax min={1} max={53}/> */}
    {/* <Primeiro />
    <X></X>
    <Comp3></Comp3>
    <Comp2></Comp2> */}
  </View>
);

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
