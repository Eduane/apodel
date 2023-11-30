import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MainText from "../../../../../components/MainText";
import styles from "./styles";
import { OrderProductType } from "../../../../../types/orders";

interface ProductItemProps {
  data: OrderProductType;
}

const ProductItem: FC<ProductItemProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftPart}>
        <Image style={styles.image} source={data.image} />
        <MainText size="xlarge" weight="bold" textStyle={styles.name}>
          {data?.name}
        </MainText>
      </View>
      <View style={styles.rightPart}>
        <MainText size="large" weight="medium">
          Sasia: {data?.quantity}
        </MainText>
        <MainText size="large" weight="medium">
          Qmimi: {data?.price} €
        </MainText>
      </View>
    </View>
  );
};

export default ProductItem;
