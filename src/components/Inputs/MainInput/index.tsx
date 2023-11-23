import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import styles from "./style";
import { MainInputProps } from "../../../types/MainComponents";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MainText from "../../MainText";

const MainInput: FC<MainInputProps> = ({
  topLabel,
  bottomLabel,
  containerStyle,
  secureTextEntry,
  ...props
}) => {
  const [isPasswordVisible, setPasswordVisibility] = useState(true);

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };
  return (
    <View style={[styles.container]}>
      {topLabel && (
        <MainText weight="bold" textStyle={styles.topLabel}>
          {topLabel}
        </MainText>
      )}
      <View style={[styles.inputWrapper, containerStyle]}>
        <TextInput
          placeholderTextColor={"gray"}
          secureTextEntry={secureTextEntry && isPasswordVisible}
          style={[styles.inputStyle, { marginBottom: bottomLabel ? 0 : 5 }]}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          >
            <FontAwesomeIcon // Use FontAwesomeIcon
              name={isPasswordVisible ? "eye" : "eye-slash"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        )}
      </View>
      {bottomLabel && (
        <MainText textStyle={styles.bottomLabel}>{bottomLabel}</MainText>
      )}
    </View>
  );
};

export default MainInput;
