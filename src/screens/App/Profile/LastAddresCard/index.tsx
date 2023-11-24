import { View, Text } from "react-native";
import React from "react";
import MainText from "../../../../components/MainText";
import styles from "./styles";

const LastAddresCard = () => {
  return (
    <View style={styles.container}>
      <MainText textStyle={styles.title} size="xlarge">
        Adresa e fundit
      </MainText>
      <MainText textStyle={styles.text} size="large">
        Prishtine
      </MainText>
    </View>
  );
};

export default LastAddresCard;
