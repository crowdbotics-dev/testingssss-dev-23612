import { Text } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: '#f0f0f1',
    padding: 10,
    position: 'relative',
    height: '100%'
  }}>
      <Text style={{
      left: 38,
      top: 51,
      position: "absolute",
      width: 100,
      height: 51,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "#d54848"
    }}>login color</Text><Text style={{
      left: 66,
      top: 264,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "19DF22"
    }}>Lorem ipsum… </Text><View style={{
      left: 44,
      top: 98,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#2a2eb4",
      borderRadius: 0,
      color: "#19DF22"
    }}></View></View>;
};

export default Untitled1;