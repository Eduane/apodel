import { TextProps } from "react-native";

export type AddresDetailsType={
    city:string,
    street:string
}

export interface MainTextProps extends TextProps {
    weight?: "light" | "regular" | "medium" | "semiBold" | "bold";
    size?: "small" | "regularSize" | "large" | "xlarge";
    [key: string]: any;
    textStyle?: {};
  }