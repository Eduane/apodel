import React from "react";
import styles from "./styles";
import MainHeader from "../../../components/Headers/MainHeader";
import { View } from "react-native";
import MainText from "../../../components/MainText";
import { goBack } from "../../../utils/navigationActions";
import Content from "./Content";

const SavedAddressesScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader onLeftIconPress={() => goBack()} title="Adresat e ruajtura" />
      <Content />
    </View>
  );
};

export default SavedAddressesScreen;
