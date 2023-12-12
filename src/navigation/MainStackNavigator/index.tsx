import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthNavigator from "../AuthNavigator";
import AppNavigator from "../AppNavigator";
import { useAuthStore } from "../../store/Auth";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      {isAuthenticated ? (
        <Stack.Screen name="App" component={AppNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigator} />
      )}
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
