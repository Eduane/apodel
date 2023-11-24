import React, { FC } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Colors } from "../../../../constants/colors";
import styles from "./styles";

interface SavedAddressesButtonProps {
  onPress?: () => void;
}

const SavedAddressesButton: FC<SavedAddressesButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>Adresat e ruajtura</Text>
        <Icon name="arrow-right" size={16} color={Colors.black} />
      </TouchableOpacity>
    </View>
  );
};

export default SavedAddressesButton;
