import React, { FC, useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Collapsible from "react-native-collapsible";
import MainText from "../../../../components/MainText";
import { Colors } from "../../../../constants/colors";
import { OrderProductType } from "../../../../types/orders";
import ProductItem from "./ProductItem";
import styles from "./styles";

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

  const headerStyle = {
    borderBottomWidth: isExpanded ? 0 : 1,
    borderBottomRightRadius: isExpanded ? 0 : 8,
    borderBottomLeftRadius: isExpanded ? 0 : 8,
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.header, headerStyle]}
        onPress={toggleExpand}
      >
        <MainText size="xlarge" weight="bold">
          Porosia: #{data?.orderId}
        </MainText>
        <View style={styles.right}>
          <MainText weight="medium">Date: {data?.date}</MainText>
          <MainText weight="medium">Statusi: {data?.orderStatus}</MainText>
        </View>
      </TouchableOpacity>
      <Collapsible style={styles.collapsible} collapsed={!isExpanded}>
        <FlatList
          renderItem={({ item }) => <ProductItem data={item} />}
          data={data.products}
        />
      </Collapsible>
    </View>
  );
};

export default OrderItem;
