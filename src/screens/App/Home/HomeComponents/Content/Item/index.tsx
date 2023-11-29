import React, { FC } from "react";
import { View, ImageBackground, TouchableOpacity } from "react-native";
import ImagePlaceholder from "../../../../../../assets/images/imagePlaceHolder.jpg";
import styles from "./styles";
import MainText from "../../../../../../components/MainText";
import Icon from "react-native-vector-icons/Fontisto";
import { Colors } from "../../../../../../constants/colors";
import { RestaurantData } from "../../../../../../types/home";
import dayjs from "dayjs";

interface ItemProps {
  onPress: () => void;
  isClosed: boolean;
  data: RestaurantData;
}

const Item: FC<ItemProps> = ({ onPress, isClosed = true, data }) => {
  const currentDayOfWeek = dayjs().format("dddd");
  const footerLeftText = () => {
    if (isClosed) {
      return (
        <MainText weight="medium" textStyle={styles.leftTextClosed}>
          Mbyllur
        </MainText>
      );
    } else {
      return <MainText textStyle={styles.leftText}>30 - 60 minuta</MainText>;
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageWrapper}>
        <ImageBackground style={styles.image} source={ImagePlaceholder}>
          <View style={[isClosed ? styles.darkOverlay : styles.overlay]} />
          <MainText weight="medium" numberOfLines={2} textStyle={styles.title}>
            {data.name}
          </MainText>
          {isClosed && (
            <MainText textStyle={styles.subTitle}>
              Hapet në orën{" "}
              {data.schedule.map((scheduleItem) => {
                if (scheduleItem.day === currentDayOfWeek) {
                  return scheduleItem.openFrom;
                }
                return null;
              })}
            </MainText>
          )}
        </ImageBackground>
      </View>
      <View style={styles.footer}>
        <View style={styles.left}>
          <Icon
            name="clock"
            size={20}
            color={isClosed ? Colors.orange : Colors.black}
          />

          {footerLeftText()}
        </View>
        <View style={styles.right}>
          <Icon name="motorcycle" size={20} color={Colors.black} />
          <MainText textStyle={styles.rightText} size="large">
            Euro
          </MainText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
