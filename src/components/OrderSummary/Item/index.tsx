import { View } from "react-native";
import React, { FC } from "react";
import MainText from "../../MainText";
import styles from "./styles";
import { MainTextProps } from "../../../types/general";

interface ItemProps {
  leftText: string;
  rightText: string;
  total?: boolean;
}

const Item: FC<ItemProps> = ({ rightText, leftText, total }) => {
  return (
    <View style={styles.container}>
      <MainText
        textStyle={styles.text}
        size={total ? "xlarge" : "large"}
        weight={total ? "bold" : "medium"}
      >
        {leftText}
      </MainText>
      <MainText
        textStyle={styles.text}
        size={total ? "xlarge" : "large"}
        weight={total ? "bold" : "medium"}
      >
        {rightText}
      </MainText>
    </View>
  );
};

export default Item;
