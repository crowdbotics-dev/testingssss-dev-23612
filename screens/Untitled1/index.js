import { Text } from "react-native";
import { ImageBackground } from "react-native";
import React from "react";
import { View } from "react-native";

const Untitled1 = () => {
  return <View style={{
    backgroundColor: "#4141a8",
    padding: 10,
    position: "relative",
    height: "100%"
  }}>
      <ImageBackground style={{
      left: 46,
      top: 74,
      position: "absolute",
      width: 60,
      height: 60
    }} source={{
      uri: "data:image/svg+xml,%3csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='upload' class='svg-inline--fa fa-upload fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3e%3cpath fill='currentColor' d='M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z'%3e%3c/path%3e%3c/svg%3e"
    }} resizeMode="cover"></ImageBackground><Text style={{
      left: 79,
      top: 248,
      position: "absolute",
      width: 100,
      height: 50,
      lineHeight: 20,
      fontSize: 15,
      borderRadius: 0,
      color: "#d32525",
      fontWeight: 700,
      fontFamily: "Crimson Text",
      textAlign: "center",
      opacity: 0.47,
      letterSpacing: 2
    }}>Text are working fine </Text></View>;
};

export default Untitled1;