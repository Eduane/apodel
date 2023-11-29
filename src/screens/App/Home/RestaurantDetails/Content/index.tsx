import { FlatList } from "react-native";
import React, { FC } from "react";
import Item from "./Item";
import styles from "./styles";
import { data } from "./helpers";

const Content: FC = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      data={data}
      renderItem={({ item }) => <Item data={item} />}
    />
  );
};

export default Content;
