import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../../screens/App/Home";
import RestaurantDetailsScreen from "../../../screens/App/Home/RestaurantDetails";

const Stack = createStackNavigator();

const HomeNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Restaurants"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Restaurants" component={HomeScreen} />
      <Stack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
