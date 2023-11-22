import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  TextInputProps,
} from "react-native";
import styles from "./styles"; // Import styles
import MainText from "../../MainText";

interface CustomPhoneInputProps extends TextInputProps {
  value?: string; // Make the value prop optional
  onValueChange: (value: string | undefined) => void; // Rename the prop
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  topLabel?: string;
  bottomLabel?: string;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({
  value,
  onValueChange, // Rename the prop here
  style,
  textStyle,
  topLabel,
  bottomLabel,
  ...textInputProps // Pass other TextInput props
}) => {
  const prefix = "+383";
  const [formattedValue, setFormattedValue] = useState<string | undefined>(
    value
  );

  const handleChangeText = (text: string) => {
    const newValue = text?.startsWith(prefix) ? text : `${prefix}${text}`;
    setFormattedValue(newValue);
  };

  useEffect(() => {
    if (formattedValue === value) {
      // Avoid calling onValueChange if the value hasn't changed
      return;
    }
    if (formattedValue === prefix) {
      onValueChange(undefined);
    } else {
      onValueChange(formattedValue);
    }
  }, [formattedValue, value, onValueChange]);

  const displayValue = value?.startsWith(prefix)
    ? value?.slice(prefix.length)
    : value;

  return (
    <>
      {topLabel && <MainText style={styles.topLabel}>{topLabel}</MainText>}
      <View style={[styles.container, style]}>
        <MainText textStyle={[styles.prefix, textStyle]}>{prefix}</MainText>
        <TextInput
          placeholderTextColor={"gray"}
          style={[styles.input, textStyle]}
          value={displayValue}
          onChangeText={handleChangeText}
          keyboardType="phone-pad"
          {...textInputProps} // Pass other TextInput props
        />
      </View>
      {bottomLabel && (
        <MainText textStyle={styles.bottomLabel}>{bottomLabel}</MainText>
      )}
    </>
  );
};

export default CustomPhoneInput;
