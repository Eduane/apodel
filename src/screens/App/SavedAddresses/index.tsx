import React, { useState } from "react";
import styles from "./styles";
import MainHeader from "../../../components/Headers/MainHeader";
import { View } from "react-native";
import { goBack } from "../../../utils/navigationActions";
import Content from "./Content";
import MainButton from "../../../components/Buttons/MainButton";
import AddAddressModal from "./AddAddress";

const SavedAddressesScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <MainHeader onLeftIconPress={() => goBack()} title="Adresat e ruajtura" />
      <View style={styles.button}>
        <MainButton
          size="large"
          label="Shto adres"
          onPress={() => setIsModalVisible(true)}
        />
      </View>

      <Content />
      <AddAddressModal
        isVisible={isModalVisible}
        hideModal={() => setIsModalVisible(false)}
      />
    </View>
  );
};

export default SavedAddressesScreen;
