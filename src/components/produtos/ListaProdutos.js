import React from "react";
import { Text } from "react-native";
import Estilo from "../estilo";
import produtos from "./produtos.js";

export default (props) => {
  return (
    <>
      <Text style={Estilo.fontG}>Lista de produtos</Text>
      {produtos.map((p) => {
        return (
          <Text key={p.id}>
            {p.id}) {p.nome} tem preço R${p.preco}
          </Text>
        );
      })}
    </>
  );
};
