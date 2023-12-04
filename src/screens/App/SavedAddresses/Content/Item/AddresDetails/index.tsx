import React, { FC } from "react";
import { View } from "react-native";
import MainText from "../../../../../../components/MainText";
import styles from "./styles";
import { AddresDetailsType } from "../../../../../../types/general";

interface AddresDetailsProps {
  data: AddresDetailsType;
}

const AddresDetails: FC<AddresDetailsProps> = ({ data }) => {
  return (
    <View style={styles.container}>
      <MainText size="xlarge" weight="bold" textStyle={styles.leftText}>
        {data?.leftText} :
      </MainText>
      <MainText size="xlarge" weight="bold" textStyle={styles.rightText}>
        {" "}
        {data?.rightText}
      </MainText>
    </View>
  );
};

export default AddresDetails;
