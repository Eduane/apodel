import { FlatList } from "react-native";
import React, { FC } from "react";
import Item from "./Item";
import styles from "./styles";
import { data } from "./helpers";
import { navigate } from "../../../../../utils/navigationActions";

const Content: FC = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      data={data}
      renderItem={({ item }) => (
        <Item
          onPress={() => navigate("ProductDetails", { data: item })}
          data={item}
        />
      )}
    />
  );
};

export default Content;
