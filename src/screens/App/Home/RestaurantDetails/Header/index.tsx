import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import MainHeader from "../../../../../components/Headers/MainHeader";
import SearchInput from "../../../../../components/Inputs/SearchInput";
import Slider from "./Slider";
import { goBack } from "../../../../../utils/navigationActions";
import Icon from "react-native-vector-icons/Feather";
import { Colors } from "../../../../../constants/colors";

const Header = () => {
  return (
    <View style={styles.container}>
      <MainHeader
        onLeftIconPress={() => goBack()}
        title="Jana Napolitana"
        rightLabel="122€"
        rightIcon={
          <Icon name="shopping-cart" size={20} color={Colors?.black} />
        }
      />
      <SearchInput />
      <Slider />
    </View>
  );
};

export default Header;
