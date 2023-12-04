import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabsNavigator from "./BottomTabNavigator";
import GeneralScreensNavigator from "./GeneralScreensNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <Stack.Screen name="BottomTab" component={BottomTabsNavigator} />
      <Stack.Screen name="General" component={GeneralScreensNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
