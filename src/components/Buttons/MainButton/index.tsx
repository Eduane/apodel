import {
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import MainText from "../../MainText";

interface MainButtonProps extends TouchableOpacityProps {
  label: string;
  size?: "small" | "medium" | "large";
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
  [key: string]: any;
}

const MainButton: FC<MainButtonProps> = ({
  label,
  size = "medium",
  containerStyle,
  labelStyle,
  ...props
}) => {
  const buttonStyle = styles[`${size}Button`];

  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, buttonStyle, containerStyle]}
    >
      <MainText
        size="large"
        weight="medium"
        textStyle={[styles.label, labelStyle]}
      >
        {label}
      </MainText>
    </TouchableOpacity>
  );
};

export default MainButton;
