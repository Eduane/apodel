import { View, Text } from "react-native";
import React, { FC } from "react";
import Header from "./Header";
import Content from "./Content";
import styles from "./styles";
import { useRoute } from "@react-navigation/native";

interface RestaurantDetailsScreenProps {}

const RestaurantDetailsScreen: FC<RestaurantDetailsScreenProps> = () => {
  const route = useRoute();
  const restaurant = route?.params;
  return (
    <View style={styles.container}>
      <Header title={restaurant?.name} />
      <Content />
    </View>
  );
};

export default RestaurantDetailsScreen;
