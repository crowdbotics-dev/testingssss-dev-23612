import { Text } from "react-native";
import { Pressable } from "react-native";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled3 = () => {
  return <View style={_styles.cQFkuhyJ}>
      <Pressable onPress={() => navigation.navigate("Untitled4")} style={_styles.LspJYHyv}><View style={_styles.SsuvqEZD}></View></Pressable><Pressable onPress={{}} style={_styles.KYAaykMY}><Text style={_styles.RTYjbuuY}>Lorem ipsum…</Text></Pressable></View>;
};

export default Untitled3;

const _styles = StyleSheet.create({
  cQFkuhyJ: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  SsuvqEZD: {
    left: 68.18120792682265,
    top: 147.46168226033737,
    position: "absolute",
    height: 60,
    width: 140,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  LspJYHyv: {
    position: "unset"
  },
  RTYjbuuY: {
    left: 128.43436842029385,
    top: 334.5636016874321,
    position: "absolute",
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  KYAaykMY: {
    position: "unset"
  }
});