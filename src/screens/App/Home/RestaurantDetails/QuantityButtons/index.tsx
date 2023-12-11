import { View, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { Colors } from "../../../../../constants/colors";
import MainText from "../../../../../components/MainText";

interface QuantityButtonsProps {
  counter: number;
  onPlusPress?: () => void;
  onMinusPress?: () => void;
}

const QuantityButtons: React.FC<QuantityButtonsProps> = ({
  counter = 0,
  onPlusPress,
  onMinusPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onMinusPress} style={styles.button}>
        <Icon name="minus" size={20} color={Colors.black} />
      </TouchableOpacity>
      <MainText size="xlarge">{counter}</MainText>
      <TouchableOpacity onPress={onPlusPress} style={styles.button}>
        <Icon name="plus" size={20} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityButtons;
