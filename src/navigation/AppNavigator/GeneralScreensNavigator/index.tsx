import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SavedAddressesScreen from "../../../screens/App/SavedAddresses";

const Stack = createStackNavigator();

const GeneralScreensNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animationEnabled: false }}
    >
      <Stack.Screen name="SavedAddresses" component={SavedAddressesScreen} />
    </Stack.Navigator>
  );
};

export default GeneralScreensNavigator;
