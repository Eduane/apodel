import { View, Image, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import ImagePlaceHolder from "../../../../../../assets/images/imagePlaceHolder.jpg";
import MainText from "../../../../../../components/MainText";
import styles from "./styles";
import QuantityButtons from "../../QuantityButtons";

interface ItemProps {
  data: {
    name: string;
    description: string;
    price: number;
  };
  onPress: () => void;
}

const Item: FC<ItemProps> = ({ data, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image style={styles.image} source={ImagePlaceHolder} />
      <View style={styles.rightPart}>
        <MainText textStyle={styles.title} size="xlarge" weight="bold">
          {data?.name}
        </MainText>
        <MainText size="large" textStyle={styles.description} numberOfLines={2}>
          {data?.description}
        </MainText>
        <View style={styles.priceContainer}>
          <MainText size="large" weight="medium" textStyle={styles.price}>
            Qmimi: {data?.price} €
          </MainText>
        </View>
        <QuantityButtons />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
