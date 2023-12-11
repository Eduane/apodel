import { View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import ImagePlaceHolder from "../../../../../../assets/images/imagePlaceHolder.jpg";
import MainText from "../../../../../../components/MainText";
import styles from "./styles";
import QuantityButtons from "../../QuantityButtons";
import useCartStore from "../../../../../../store/Cart/useCartStore";

interface ItemProps {
  data: {
    name: string;
    description: string;
    price: number;
  };
  onPress: () => void;
  onPlusPress: () => void; // Add onPlusPress prop
  onMinusPress: () => void; // Add onMinusPress prop
  counter: number;
}

const Item: FC<ItemProps> = ({
  data,
  onPress,
  onPlusPress,
  onMinusPress,
  counter,
}) => {
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
        <QuantityButtons
          counter={counter}
          onPlusPress={onPlusPress} // Pass onPlusPress prop
          onMinusPress={onMinusPress} // Pass onMinusPress prop
        />
      </View>
    </TouchableOpacity>
  );
};

export default Item;
