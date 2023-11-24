import React, { FC, ReactNode } from "react";
import { ImageBackground, StatusBar } from "react-native";
import image from "../../assets/images/authBackground.png";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

// Define the props interface
interface AuthLayoutProps {
  children: ReactNode; // ReactNode is used for any child components
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground style={styles.container} source={image}>
        <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
      </ImageBackground>
    </>
  );
};

export default AuthLayout;
