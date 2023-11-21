import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { navigationRef } from "../utils/navigationActions";
import MainStackNavigator from "./MainStackNavigator";

interface MainNavigationContainerProps {
  // didTryAutoLogin:Boolean
}

const MainNavigationContainer = ({}) => {
  return (
    //@ts-ignore
    <NavigationContainer ref={navigationRef}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigationContainer;
