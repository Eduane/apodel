import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import MainHeader from "../../../../../components/Headers/MainHeader";
import SearchInput from "../../../../../components/Inputs/SearchInput";
import Slider from "./Slider";
import { goBack } from "../../../../../utils/navigationActions";

const Header = () => {
  return (
    <View style={styles.container}>
      <MainHeader onLeftIconPress={() => goBack()} title="Jana Napolitana" />
      <SearchInput />
      <Slider />
    </View>
  );
};

export default Header;
