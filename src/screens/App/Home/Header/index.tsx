import { View, Text, ImageBackground } from "react-native";
import React from "react";
import SearchInput from "../../../../components/Inputs/SearchInput";
import PlaceholderImage from "../../../../assets/images/imagePlaceHolder.jpg";
import styles from "./styles";
import MainText from "../../../../components/MainText";

const Header = () => {
  return (
    <ImageBackground
      resizeMode="cover"
      style={styles.container}
      source={PlaceholderImage}
    >
      <View style={styles.overlay} />

      <View style={styles.titleContainer}>
        <MainText weight="medium" textStyle={styles.title}>
          RESTORANTE
        </MainText>
      </View>

      <SearchInput containerStyle={styles.searchInput} />
    </ImageBackground>
  );
};

export default Header;
