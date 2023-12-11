import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles"; // Import your styles
import MainText from "../../../../components/MainText";
import ProductItem from "./ProductsITem";
import useCartStore from "../../../../store/Cart/useCartStore";

interface Product {
  id: number;
  name: string;
  price: string;
}

interface ProductListComponentProps {
  storeName: string;
}

const ProductListComponent: React.FC<ProductListComponentProps> = ({
  storeName,
}) => {
  const { addToCart, removeFromCart, cartItems } = useCartStore();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MainText size="large">
          {cartItems?.length} produkte nga{"  "}
          <MainText size="large" weight="bold">
            "{storeName}"
          </MainText>
        </MainText>
      </View>
      <ScrollView style={styles.items}>
        {cartItems?.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            quantity={
              cartItems?.find((item) => item?.id == product?.id)?.quantity || 0
            }
            onIncrement={() => addToCart(product)}
            onDecrement={() => removeFromCart(product?.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductListComponent;
