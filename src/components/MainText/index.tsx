import React, { FC } from "react";
import { Text } from "react-native";
import styles from "./style";
import { MainTextProps } from "../../types/general";

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
