import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "../AuthNavigator";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name="App" component={AuthNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
