import React, { useState } from "react";
import { ScrollView, View, Alert } from "react-native";
import MainHeader from "../../../components/Headers/MainHeader";
import ProductListComponent from "./ProductsCard";
import styles from "./styles";
import MapGetLocation from "../../../components/MapGetLocation";
import OrderSummary from "../../../components/OrderSummary";
import { handleOrderPress } from "./helpers";

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
    <>
      <MainHeader showLeftIcon={false} title="Shporta" />

      <ScrollView style={styles.container}>
        <ProductListComponent
          storeName={storeName}
          numberOfProducts={numberOfProducts}
          products={products}
        />
        <MapGetLocation />
      </ScrollView>
      <OrderSummary
        onButtonPress={handleOrderPress}
        showButton
        containerStyle={styles.summary}
      />
    </>
  );
};

export default CartScreen;
