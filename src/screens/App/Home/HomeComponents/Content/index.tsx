import { FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import Item from "./Item";
import { data, isRestaurantOpen } from "./helpers";
import { navigate } from "../../../../../utils/navigationActions";

const Content = () => {
  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={data}
      renderItem={({ item }) => (
        <Item
          onPress={() => navigate("RestaurantDetails", { name: item?.name })}
          isClosed={!isRestaurantOpen(item?.schedule)}
          data={item}
        />
      )}
    />
  );
};

export default Content;
