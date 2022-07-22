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
      <View style={{
      left: 14,
      top: 90,
      position: "absolute",
      height: 100,
      width: 150,
      backgroundColor: "#E4E4E4",
      borderRadius: 0,
      color: "#DE5497"
    }}></View><Text style={{
      left: 30,
      top: 10,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 14,
      fontSize: 14,
      borderRadius: 0,
      color: "#c15050"
    }}>Lorem ipsum… </Text></View>;
};

export default Untitled1;