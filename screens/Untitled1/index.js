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
      left: 63,
      top: 197,
      position: "absolute",
      width: "100px",
      height: "155px",
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      letterSpacing: 0,
      color: "#d31010"
    }}>Lorem ipsum… </Text><View style={{
      left: 17,
      top: 90,
      position: "absolute",
      height: 60,
      width: 140,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#777777"
    }}></View></View>;
};

export default Untitled1;