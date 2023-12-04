import React, { FC, useState } from "react";
import { View, TouchableOpacity, FlatList } from "react-native";
import Collapsible from "react-native-collapsible";
import MainText from "../../../../../components/MainText";
import AddresDetails from "./AddresDetails";
import styles from "./styles";
import Icon from "react-native-vector-icons/Entypo";
import { AddresDetailsType } from "../../../../../types/general";

interface AddresType {
  name: string;
  details: AddresDetailsType;
}

interface AddresItemProps {
  data: AddresType;
}

const AddresItem: FC<AddresItemProps> = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const headerStyle = {
    borderBottomWidth: isExpanded ? 0 : 1,
    borderBottomRightRadius: isExpanded ? 0 : 8,
    borderBottomLeftRadius: isExpanded ? 0 : 8,
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles.header, headerStyle]}
        onPress={toggleExpand}
      >
        <MainText size="xlarge" weight="bold">
          {data?.name}
        </MainText>
        <View style={styles.icon}>
          <Icon name="address" size={25} />
        </View>
      </TouchableOpacity>
      <Collapsible style={styles.collapsible} collapsed={!isExpanded}>
        <AddresDetails
          data={{ leftText: "Qyteti", rightText: data?.details.city }}
        />
        <AddresDetails
          data={{ leftText: "Rruga", rightText: data?.details.street }}
        />
      </Collapsible>
    </View>
  );
};

export default AddresItem;
