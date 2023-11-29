import React from "react";
import { View } from "react-native";
import MainHeader from "../../../components/Headers/MainHeader";
import ProductListComponent from "./ProductsCard";
import styles from "./styles";
import MapGetLocation from "../../../components/MapGetLocation";

const CartScreen = () => {
  // Sample data for the store, number of products, and product list
  const storeName = "Sample Store";
  const numberOfProducts = 5;
  const products = [
    { id: 1, name: "Product 1", price: "10.99" },
    { id: 2, name: "Product 2", price: "12.99" },
    { id: 3, name: "Product 3", price: "9.99" },
    { id: 4, name: "Product 4", price: "15.99" },
    { id: 5, name: "Product 5", price: "8.99" },
  ];

  return (
    <View style={styles.container}>
      <MainHeader showLeftIcon={false} title="Shporta" />
      <ProductListComponent
        storeName={storeName}
        numberOfProducts={numberOfProducts}
        products={products}
      />
      <MapGetLocation />
    </View>
  );
};

export default CartScreen;
