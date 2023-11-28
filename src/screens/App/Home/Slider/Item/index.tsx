import { View, Image, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import MainText from "../../../../../components/MainText";
import ImagePlaceholder from "../../../../../assets/images/imagePlaceHolder.jpg";
import { SliderItemType } from "../../../../../types/slider";
import { Colors } from "../../../../../constants/colors";

interface ItemProps {
  data: SliderItemType;
  onPress: () => void;
  active: boolean;
}

const Item: FC<ItemProps> = ({ data, onPress, active }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.imageContainer,
          { borderColor: active ? Colors.lightBlue : Colors.white },
        ]}
      >
        <Image
          resizeMode="cover"
          source={ImagePlaceholder} // Replace with your image path
          style={styles.image}
        />
      </View>

      <MainText textStyle={styles.label}>{data?.name}</MainText>
    </TouchableOpacity>
  );
};

export default Item;
