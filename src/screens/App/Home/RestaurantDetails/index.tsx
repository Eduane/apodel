import { View, Text } from "react-native";
import React, { FC } from "react";
import Header from "./Header";
import Content from "./Content";
import styles from "./styles";

interface RestaurantDetailsScreenProps {}

const RestaurantDetailsScreen: FC<RestaurantDetailsScreenProps> = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Content />
    </View>
  );
};

export default RestaurantDetailsScreen;
