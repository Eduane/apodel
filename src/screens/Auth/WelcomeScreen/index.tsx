import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainButton from "../../../components/Buttons/MainButton";
import styles from "./styles";
import { navigate } from "../../../utils/navigationActions";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MainButton
        size="large"
        label="Hyr"
        containerStyle={styles.loginButton}
        onPress={() => navigate("Login")}
      />
      <MainButton
        onPress={() => navigate("Register")}
        size="large"
        label="Regjistrohu"
      />
    </SafeAreaView>
  );
};

export default WelcomeScreen;
