import { View, Text, TextInput } from "react-native";
import React, { FC } from "react";
import styles from "./style";
import { MainInputProps } from "../../types/MainComponents";

const MainInput: FC<MainInputProps> = ({
  topLabel,
  bottomLabel,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {topLabel && <Text style={styles.topLabel}>{topLabel}</Text>}
      <TextInput
        placeholderTextColor={"gray"}
        style={[styles.inputStyle, { marginBottom: bottomLabel ? 0 : 5 }]}
        {...props}
      />
      {bottomLabel && <Text style={styles.bottomLabel}>{bottomLabel}</Text>}
    </View>
  );
};

export default MainInput;
