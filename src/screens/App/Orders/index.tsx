import React from "react";
import { View, FlatList } from "react-native";
import styles from "./styles";
import OrderItem from "./Item";
import MainHeader from "../../../components/Headers/MainHeader";
import { data } from "./helpers";

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      <MainHeader title="Porositë" showLeftIcon={false} />
      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <OrderItem data={item} />}
      />
    </View>
  );
};

export default OrdersScreen;
