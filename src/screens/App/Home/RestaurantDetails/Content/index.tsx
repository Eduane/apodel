import { FlatList } from "react-native";
import React, { FC } from "react";
import Item from "./Item";
import styles from "./styles";
import { data } from "./helpers";
import { navigate } from "../../../../../utils/navigationActions";
import useCartStore from "../../../../../store/Cart/useCartStore";

const Content: FC = () => {
  const { addToCart, removeFromCart, cartItems } = useCartStore();

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
      data={data}
      renderItem={({ item }) => {
        const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
        const counter = cartItem ? cartItem.quantity : 0;

        return (
          <Item
            counter={counter}
            onPlusPress={() => addToCart(item)}
            onMinusPress={() => removeFromCart(item.id)}
            onPress={() => navigate("ProductDetails", { data: item })}
            data={item}
          />
        );
      }}
    />
  );
};

export default Content;
