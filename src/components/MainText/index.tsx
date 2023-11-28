import React, { FC } from "react";
import { Text, TextProps } from "react-native";
import styles from "./style";

interface MainTextProps extends TextProps {
  weight?: "light" | "regular" | "medium" | "semiBold" | "bold";
  size?: "small" | "regularSize" | "large" | "xlarge";
  [key: string]: any;
  textStyle?: {};
}

const MainText: FC<MainTextProps> = ({
  children,
  weight = "regular",
  size = "regularSize",
  textStyle,
  ...props
}) => {
  return (
    <Text
      {...props}
      style={[styles.text, styles[weight], styles[size], textStyle]}
    >
      {children}
    </Text>
  );
};

export default MainText;
