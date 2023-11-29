import { FlatList } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import Item from "./Item";
import { data } from "./helpers";

const Slider = () => {
  const [activeCategory, setActiveCategory] = useState<string>();
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <Item
          isActive={activeCategory == item?.value}
          onPress={() => setActiveCategory(item?.value)}
          data={item}
        />
      )}
    />
  );
};

export default Slider;
