import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainButton from "../../../components/Buttons/MainButton";
import styles from "./styles";
import { navigate } from "../../../utils/navigationActions";
import { Image, View } from "react-native";
import Logo from "../../../assets/images/logoGray.png";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Image resizeMode="contain" source={Logo} style={styles.image} />
      <View style={styles.container}>
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
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
