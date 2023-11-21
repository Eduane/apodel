import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainButton from "../../../components/Buttons/MainButton";
import { goBack } from "../../../utils/navigationActions";
import MainInput from "../../../components/Inputs/MainInput";
import CustomPhoneInput from "../../../components/Inputs/CustomPhoneInput";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";

const myButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    Login with Facebook
  </Icon.Button>
);

const CustomTextButton = (
  <Icon.Button name="facebook" backgroundColor="#3b5998">
    <Text style={{ fontFamily: "Arial", fontSize: 15 }}>
      Login with Facebook
    </Text>
  </Icon.Button>
);

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainButton onPress={() => goBack()} size="large" label="Go Back" />
      <CustomPhoneInput />
      {CustomTextButton}
      <MainInput placeholder="Fjalkalimi" secureTextEntry />
    </SafeAreaView>
  );
};

export default LoginScreen;
