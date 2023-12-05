import React, { FC, useState } from "react";
import { View, TouchableOpacity } from "react-native";
import Collapsible from "react-native-collapsible";
import MainText from "../../../../../components/MainText";
import AddresDetails from "./AddresDetails";
import styles from "./styles";
import Icon from "react-native-vector-icons/Entypo";
import { AddresDetailsType } from "../../../../../types/general";
import OptionsButtons from "./OptionsButtons";
import { onDeleteAddresPress, onSaveDefaultAddresPress } from "./helpers";

interface AddresType {
  name: string;
  details: AddresDetailsType;
}

interface AddresItemProps {
  data: AddresType;
  onPress: () => void;
  defaultAddres: boolean;
}

const AddresItem: FC<AddresItemProps> = ({ data, defaultAddres, onPress }) => {
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
        <View style={styles.left}>
          <MainText size="xlarge" weight="bold">
            {data?.name}
          </MainText>
          {defaultAddres && (
            <MainText
              textStyle={styles.defaultAddresText}
              size="large"
              weight="bold"
            >
              #Adresë kryesore
            </MainText>
          )}
        </View>

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
        <OptionsButtons
          onDeleteAddresPress={onDeleteAddresPress}
          onSaveDefaultAddresPress={onSaveDefaultAddresPress}
        />
      </Collapsible>
    </View>
  );
};

export default AddresItem;
