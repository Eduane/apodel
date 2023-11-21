import { View, Text, TextInputProps } from "react-native";
import React, { FC } from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import MainInput from "../MainInput";

interface FormHookInputProps extends UseControllerProps {
  topLabel?: string;
  [key: string]: any;
  placeholder?: string;
  placeholderTextColor?: string;
  containerStyle?: {};
  inputProps?: TextInputProps;
}

const FormHookInput: FC<FormHookInputProps> = ({
  topLabel,
  placeholder,
  placeholderTextColor,
  containerStyle,
  inputProps,
  ...props
}) => {
  return (
    <Controller
      {...props}
      render={({ field: { onChange, onBlur, value } }) => (
        <MainInput
          containerStyle={{ marginBottom: 5, ...containerStyle }}
          placeholderTextColor={placeholderTextColor || "gray"}
          placeholder={placeholder}
          onChangeText={onChange}
          topLabel={topLabel}
          value={value}
          onBlur={onBlur}
          bottomLabel={props?.errors?.[props?.name]?.message ?? ""}
          {...inputProps}
        />
      )}
    />
  );
};

export default FormHookInput;
