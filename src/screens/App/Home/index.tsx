import { View, Text } from "react-native";
import React from "react";
import Header from "./Header";
import CustomSlider from "./Slider";
import { Colors } from "../../../constants/colors";
import Content from "./Content";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: Colors.white, flex: 1 }}>
      <Header />
      <CustomSlider />
      <Content />
    </View>
  );
};

export default HomeScreen;
