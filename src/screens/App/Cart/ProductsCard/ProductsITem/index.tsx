import React from "react";
import { View, TouchableOpacity } from "react-native";
import MainText from "../../../../../components/MainText";
import styles from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { Colors } from "../../../../../constants/colors";

interface ProductItemProps {
  product: any;
  quantity: number | undefined;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  quantity,
  onIncrement,
  onDecrement,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftPart}>
        <MainText size="large" weight="bold" textStyle={styles.quantity}>
          {quantity}x
        </MainText>
        <MainText size="large">{product?.name}</MainText>
        <MainText size="large">({product?.price} €)</MainText>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onDecrement} style={styles.button}>
          <Icon name="minus" size={20} color={Colors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement} style={styles.button}>
          <Icon name="plus" size={20} color={Colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductItem;
