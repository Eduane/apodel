import React, { FC } from "react";
import { View, TextInput, TextInputProps, ViewStyle } from "react-native";
import styles from "./styles";
import { Colors } from "../../../constants/colors";
import Icon from "react-native-vector-icons/Feather";

interface SearchInputProps extends TextInputProps {
  containerStyle?: ViewStyle;
}

const SearchInput: FC<SearchInputProps> = ({
  value,
  onChangeText,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.searchIcon}>
        <Icon name="search" size={20} />
      </View>
      <TextInput
        onChangeText={onChangeText}
        value={value}
        style={styles.input}
        placeholder="Kërko..."
        placeholderTextColor={Colors.gray}
      />
    </View>
  );
};

export default SearchInput;
