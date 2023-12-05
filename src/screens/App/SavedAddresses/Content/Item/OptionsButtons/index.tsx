import { View } from "react-native";
import React, { FC } from "react";
import styles from "./styles";
import MainButton from "../../../../../../components/Buttons/MainButton";

interface OptionsButtonsProps {
  onSaveDefaultAddresPress: () => void;
  onDeleteAddresPress: () => void;
}

const OptionsButtons: FC<OptionsButtonsProps> = ({
  onDeleteAddresPress,
  onSaveDefaultAddresPress,
}) => {
  return (
    <View style={styles.container}>
      <MainButton
        onPress={onSaveDefaultAddresPress}
        containerStyle={styles.button}
        labelStyle={styles.label}
        label={`Ruaj si adresë\nkryesore`}
      />
      <MainButton
        onPress={onDeleteAddresPress}
        containerStyle={styles.button}
        label="Fshije"
      />
    </View>
  );
};

export default OptionsButtons;
