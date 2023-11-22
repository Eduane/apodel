import { View, Text, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import styles from "./styles";
import { Colors } from "../../constants/colors";
import BottomBarItem from "../../components/BottomBarItem";
import OrdersScreen from "../../screens/App/Orders";
import FavoriteScreen from "../../screens/App/Favorite";
import HomeScreen from "../../screens/App/Home";
import CartScreen from "../../screens/App/Cart";
import ProfileScreen from "../../screens/App/Profile";
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarLabel: "",
        tabBarStyle: {
          ...styles.tabBarStyle,
          height: Platform.OS == "ios" ? 70 + bottom : 70,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomBarItem
                focused={focused}
                label="Porositë"
                icon={
                  <View
                    style={[
                      styles.placeHolder,
                      {
                        backgroundColor: focused
                          ? Colors.orange
                          : Colors.backgroundColor,
                      },
                    ]}
                  />
                }
              />
            );
          },
        }}
        name="Orders"
        component={OrdersScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomBarItem
                focused={focused}
                label="Të preferuara"
                icon={
                  <View
                    style={[
                      styles.placeHolder,
                      {
                        backgroundColor: focused
                          ? Colors.orange
                          : Colors.backgroundColor,
                      },
                    ]}
                  />
                }
              />
            );
          },
        }}
        name="Favorite"
        component={FavoriteScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomBarItem
                focused={focused}
                label="Home"
                icon={
                  <View
                    style={[
                      styles.placeHolder,
                      {
                        backgroundColor: focused
                          ? Colors.orange
                          : Colors.backgroundColor,
                      },
                    ]}
                  />
                }
              />
            );
          },
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomBarItem
                focused={focused}
                label="Shporta"
                icon={
                  <View
                    style={[
                      styles.placeHolder,
                      {
                        backgroundColor: focused
                          ? Colors.orange
                          : Colors.backgroundColor,
                      },
                    ]}
                  />
                }
              />
            );
          },
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BottomBarItem
                focused={focused}
                label="Profili"
                icon={
                  <View
                    style={[
                      styles.placeHolder,
                      {
                        backgroundColor: focused
                          ? Colors.orange
                          : Colors.backgroundColor,
                      },
                    ]}
                  />
                }
              />
            );
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
