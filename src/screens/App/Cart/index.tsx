import React from "react";
import { ScrollView } from "react-native";
import MainHeader from "../../../components/Headers/MainHeader";
import ProductListComponent from "./ProductsCard";
import styles from "./styles";
import MapGetLocation from "../../../components/MapGetLocation";
import OrderSummary from "../../../components/OrderSummary";
import { handleOrderPress } from "./helpers";

const CartScreen = () => {
  // Sample data for the store, number of products, and product list
  const storeName = "Sample Store";

  return (
    <>
      <MainHeader showLeftIcon={false} title="Shporta" />

      <ScrollView style={styles.container}>
        <ProductListComponent storeName={storeName} />
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
