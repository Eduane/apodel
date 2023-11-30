import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { Colors } from "../../../../../constants/colors";
import MainText from "../../../../../components/MainText";

const QuantityButtons = () => {
  const [counter, setCounter] = useState(1);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setCounter(counter - 1)}
        style={styles.button}
      >
        <Icon name="minus" size={20} color={Colors.black} />
      </TouchableOpacity>
      <MainText size="xlarge">{counter}</MainText>
      <TouchableOpacity
        onPress={() => setCounter(counter + 1)}
        style={styles.button}
      >
        <Icon name="plus" size={20} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default QuantityButtons;
