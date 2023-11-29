import { View, Text } from "react-native";
import React from "react";
import Header from "./HomeComponents/Header";
import CustomSlider from "./HomeComponents/Slider";
import { Colors } from "../../../constants/colors";
import Content from "./HomeComponents/Content";

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
