import { View, Text } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import MainHeader from "../../../../../components/Headers/MainHeader";
import SearchInput from "../../../../../components/Inputs/SearchInput";
import Slider from "./Slider";
import { goBack } from "../../../../../utils/navigationActions";
import Icon from "react-native-vector-icons/Feather";
import { Colors } from "../../../../../constants/colors";
import useCartStore from "../../../../../store/Cart/useCartStore";
import { calculateTotalSum } from "../../../../../utils/getTotalSum";

interface HomeProps {
  title: string;
}

const Header: FC<HomeProps> = ({ title }) => {
  const { cartItems } = useCartStore();
  return (
    <View style={styles.container}>
      <MainHeader
        onLeftIconPress={() => goBack()}
        title={title}
        rightLabel={`${calculateTotalSum(cartItems)?.toString()}€`}
        rightIcon={
          <Icon name="shopping-cart" size={20} color={Colors?.black} />
        }
      />
      <SearchInput />
      <Slider />
    </View>
  );
};

export default Header;
