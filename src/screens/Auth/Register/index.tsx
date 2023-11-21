import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainButton from "../../../components/Buttons/MainButton";
import { goBack } from "../../../utils/navigationActions";

const RegisterScreen = () => {
  return (
    <SafeAreaView>
      <MainButton onPress={() => goBack()} size="large" label="Go Back" />
      <Text>RegisterScreen</Text>
    </SafeAreaView>
  );
};

export default RegisterScreen;
