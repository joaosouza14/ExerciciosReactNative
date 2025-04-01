import React from "react";
import { View, StyleSheet } from "react-native";
import Quadrado from "./Quadrado";

export default (props) => {
  return (
    <View style={style.Flex}>
      <View style={style.Flex1}>
        <Quadrado cor="#ff801a" lado={20} />
        <Quadrado cor="#50d1f6" lado={30} />
        <Quadrado cor="#dd22c1" lado={40} />
        <Quadrado cor="#8312ed" lado={50} />
        <Quadrado cor="#36c9a7" lado={60} />
      </View>

      <View style={style.Flex2}>
        <Quadrado cor="#ff801a" lado={20} />
        <Quadrado cor="#50d1f6" lado={30} />
        <Quadrado cor="#dd22c1" lado={40} />
        <Quadrado cor="#8312ed" lado={50} />
        <Quadrado cor="#36c9a7" lado={60} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  Flex: {
    height: 350,
    width: "100%",
    backgroundColor: "#000",
  },
  Flex1: {
    flexGrow: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
  },
  Flex2: {
    flexGrow: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
  },
});
