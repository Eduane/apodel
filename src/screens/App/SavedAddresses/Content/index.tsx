import { FlatList, View } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import AddresItem from "./Item";
import { data } from "./helpers";

const Content = () => {
  const [defaultAddres, saveAsDefaultAddress] = useState(1);
  return (
    <FlatList
      style={styles.container}
      renderItem={({ item }) => (
        <AddresItem
          onPress={() => saveAsDefaultAddress(item?.id)}
          defaultAddres={defaultAddres == item?.id}
          data={item}
        />
      )}
      data={data}
    />
  );
};

export default Content;
