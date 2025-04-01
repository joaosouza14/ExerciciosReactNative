import React, { Component } from "react";
import { View, Button, Text, TextInput } from "react-native";
import Estilo from "../estilo";
import MegaNumero from "./MegaNumero";

export default class Mega extends Component {
  state = {
    qtdNumeros: this.props.qtdNumeros,
    numeros: [],
  };

  alterarQtdNumeros = (qtd) => {
    this.setState({
      qtdNumeros: +qtd,
    });
  };

  gerarNumeroNaoContido = (nums) => {
    const novo = parseInt(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdNumeros)
      .fill()
      .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({ numeros });
  };

  exibirNUmeros = () => {
    const nums = this.state.numeros;
    return nums.map((num) => {
      return <MegaNumero num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={Estilo.fontG}>Gerador de Mega-Sena</Text>
        <TextInput
          keyboardType={"numeric"}
          style={{ borderBottomWidth: 1 }}
          placeholder="Quantidade de Números a gerar: "
          value={this.state.qtdNumeros}
          onChangeText={this.alterarQtdNumeros}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {this.exibirNUmeros()}
        </View>
      </>
    );
  }
}
