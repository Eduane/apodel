import React from "react";
import PhoneInput from "react-native-phone-number-input";
import styles from "./styles";

const CustomPhoneInput = () => {
  return (
    <PhoneInput
      textInputStyle={styles.textInputStyle}
      textContainerStyle={styles.textContainerStyle}
      containerStyle={[styles.containerInputStyle]}
      placeholder="Numri i telefonit"
      defaultCode="XK"
      layout="second"
      countryPickerButtonStyle={styles.countryPickerButtonStyle}
      countryPickerProps={{ disabled: true }}
    />
  );
};

export default CustomPhoneInput;
