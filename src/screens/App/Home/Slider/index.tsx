import React, { FC, useState } from "react";
import { FlatList } from "react-native";
import Item from "./Item";
import styles from "./styles";
import { foodTypes } from "./helpers";

const CustomSlider: FC = () => {
  const [selectedMenu, setSelectedMenu] = useState<string | undefined>();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={foodTypes}
      horizontal
      renderItem={({ item }) => (
        <Item
          active={selectedMenu == item?.value}
          onPress={() => setSelectedMenu(item?.value)}
          data={item}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default CustomSlider;
