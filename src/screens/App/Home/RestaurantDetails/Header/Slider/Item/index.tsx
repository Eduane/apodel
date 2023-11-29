// Item.tsx
import { View, Text, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import MainText from "../../../../../../../components/MainText";

interface ItemProps {
  data: {
    name: string;
    value: string;
  };
  onPress: () => void;
  isActive: boolean;
}

const Item: FC<ItemProps> = ({ data, onPress, isActive }) => {
  const containerStyle = isActive ? styles.activeContainer : styles.container;
  const textStyle = isActive ? styles.activeText : styles.text;

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      <MainText size="xlarge" textStyle={textStyle}>
        {data?.name}
      </MainText>
    </TouchableOpacity>
  );
};

export default Item;
