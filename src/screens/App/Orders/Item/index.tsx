import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MainText from "../../../../components/MainText";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";
import ProductItem from "./ProductItem";
import { OrderProductType } from "../../../../types/orders";

interface Order {
  orderId: string;
  date: string;
  orderStatus: string;
  products: OrderProductType[];
}

interface OrderItemProps {
  data: Order;
}

const OrderItem: FC<OrderItemProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <TouchableOpacity style={styles.header} onPress={toggleExpand}>
        <MainText size="xlarge" weight="bold">
          Porosia: #{data?.orderId}
        </MainText>
        <View style={styles.right}>
          <MainText weight="medium">Date: {data?.date}</MainText>
          <MainText weight="medium">Statusi: {data?.orderStatus}</MainText>
        </View>
      </TouchableOpacity>
      <Collapsible style={styles.collapsible} collapsed={!isExpanded}>
        <View>
          <FlatList
            renderItem={({ item }) => <ProductItem data={item} />}
            data={data.products}
          />
        </View>
      </Collapsible>
    </View>
  );
};

export default OrderItem;
