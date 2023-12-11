import { View, Image, ScrollView } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import ImagePlaceHolder from "../../../../../assets/images/imagePlaceHolder.jpg";
import MainText from "../../../../../components/MainText";
import QuantityButtons from "../QuantityButtons";
import MainButton from "../../../../../components/Buttons/MainButton";
import MainHeader from "../../../../../components/Headers/MainHeader";
import { goBack } from "../../../../../utils/navigationActions";
import { useRoute } from "@react-navigation/native";
import useCartStore from "../../../../../store/Cart/useCartStore";

const ProductDetailsScreen: FC = () => {
  const navigate = useRoute();
  const { addToCart, removeFromCart, cartItems } = useCartStore();
  const data = navigate?.params?.data;
  const quantity =
    cartItems?.find((item) => item?.id == data?.id)?.quantity || 0;

  console.log("data", quantity);
  return (
    <>
      <MainHeader
        onLeftIconPress={() => goBack()}
        title="Detajet e produktit"
      />

      <ScrollView style={styles?.container}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={ImagePlaceHolder}
        />

        <View style={styles.content}>
          <MainText weight="bold" textStyle={styles.title}>
            {data?.name}
          </MainText>
          <MainText
            numberOfLines={10}
            size="large"
            textStyle={styles.description}
          >
            {data?.description}
          </MainText>
          <View style={styles.bottom}>
            <QuantityButtons
              counter={quantity}
              onMinusPress={() => removeFromCart(data?.id)}
              onPlusPress={() => addToCart(data)}
            />
            <MainButton size="large" label="Shto në shportë" />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProductDetailsScreen;
