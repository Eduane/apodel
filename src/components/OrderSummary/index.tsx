import { View, ViewStyle } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import Item from "./Item";
import MainText from "../MainText";
import MainButton from "../Buttons/MainButton";
import useCartStore from "../../store/Cart/useCartStore";
import { calculateTotalSum } from "../../utils/getTotalSum";

interface OrderSummaryProps {
  containerStyle?: ViewStyle;
  showButton?: boolean;
  onButtonPress?: () => void;
}

const OrderSummary: FC<OrderSummaryProps> = ({
  containerStyle,
  showButton,
  onButtonPress,
}) => {
  const { cartItems } = useCartStore();
  return (
    <View style={[styles.container, containerStyle]}>
      <MainText textStyle={styles.title} size="xlarge" weight="bold">
        Përmbledhje
      </MainText>
      <View style={styles.content}>
        <Item
          leftText="Porosia"
          rightText={`${calculateTotalSum(cartItems)?.toString()} €`}
        />
        <Item leftText="Dërgesa" rightText="5€" />
        <Item total leftText="Totali" rightText="51.8€" />
        {showButton && <MainButton onPress={onButtonPress} label="Porosit" />}
      </View>
    </View>
  );
};

export default OrderSummary;
