import { View, ViewStyle } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import Item from "./Item";
import MainText from "../MainText";
import MainButton from "../Buttons/MainButton";

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
  return (
    <View style={[styles.container, containerStyle]}>
      <MainText textStyle={styles.title} size="xlarge" weight="bold">
        Përmbledhje
      </MainText>
      <View style={styles.content}>
        <Item leftText="Porosia" rightText="46.8€" />
        <Item leftText="Dërgesa" rightText="5€" />
        <Item total leftText="Totali" rightText="51.8€" />
        {showButton && <MainButton onPress={onButtonPress} label="Porosit" />}
      </View>
    </View>
  );
};

export default OrderSummary;
