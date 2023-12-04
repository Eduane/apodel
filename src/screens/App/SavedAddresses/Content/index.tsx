import { FlatList, View } from "react-native";
import React from "react";
import styles from "./styles";
import AddresItem from "./Item";
import { data } from "./helpers";

const Content = () => {
  return (
    <FlatList
      style={styles.container}
      renderItem={({ item }) => <AddresItem data={item} />}
      data={data}
    />
  );
};

export default Content;
