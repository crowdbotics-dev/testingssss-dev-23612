import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: "#5b7f28",
    padding: 10,
    position: "relative",
    height: "100%"
  }}>
      <Text style={{
      left: 143,
      top: 162,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0
    }}>Lorem ipsum…</Text><View style={{
      left: 49,
      top: 228,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View></View>;
};

export default Untitled1;