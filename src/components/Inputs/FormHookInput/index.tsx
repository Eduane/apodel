import { TextInputProps } from "react-native";
import React, { FC } from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import MainInput from "../MainInput";
import CustomPhoneInput from "../CustomPhoneInput";

interface FormHookInputProps extends UseControllerProps {
  topLabel?: string;
  [key: string]: any;
  placeholder?: string;
  placeholderTextColor?: string;
  containerStyle?: {};
  inputProps?: TextInputProps;
  secureTextEntry: boolean;
  phoneInput: boolean;
}

const FormHookInput: FC<FormHookInputProps> = ({
  topLabel,
  placeholder,
  placeholderTextColor,
  containerStyle,
  inputProps,
  secureTextEntry,
  phoneInput,
  ...props
}) => {
  return (
    <Controller
      {...props}
      render={({ field: { onChange, onBlur, value, disabled } }) => {
        return phoneInput ? (
          <CustomPhoneInput
            onValueChange={onChange}
            bottomLabel={props?.errors?.[props?.name]?.message ?? ""}
            placeholder={placeholder}
          />
        ) : (
          <MainInput
            editable={!disabled}
            containerStyle={containerStyle}
            placeholderTextColor={placeholderTextColor || "gray"}
            placeholder={placeholder}
            onChangeText={onChange}
            topLabel={topLabel}
            value={value}
            secureTextEntry={secureTextEntry}
            onBlur={onBlur}
            bottomLabel={props?.errors?.[props?.name]?.message ?? ""}
            {...inputProps}
          />
        );
      }}
    />
  );
};

export default FormHookInput;
