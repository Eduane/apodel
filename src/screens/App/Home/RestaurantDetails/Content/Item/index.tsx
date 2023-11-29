import { View, Image, TouchableOpacity } from "react-native";
import React, { FC, useState } from "react";
import ImagePlaceHolder from "../../../../../../assets/images/imagePlaceHolder.jpg";
import MainText from "../../../../../../components/MainText";
import Icon from "react-native-vector-icons/Feather";
import { Colors } from "../../../../../../constants/colors";
import styles from "./styles";

interface ItemProps {
  data: {
    name: string;
    description: string;
    price: number;
  };
}

const Item: FC<ItemProps> = ({ data }) => {
  const [counter, setCounter] = useState(1);

  return (
    <View style={styles.container}>
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
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() => setCounter(counter - 1)}
            style={styles.button}
          >
            <Icon name="minus" size={20} color={Colors.black} />
          </TouchableOpacity>
          <MainText size="xlarge">{counter}</MainText>
          <TouchableOpacity
            onPress={() => setCounter(counter + 1)}
            style={styles.button}
          >
            <Icon name="plus" size={20} color={Colors.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Item;
