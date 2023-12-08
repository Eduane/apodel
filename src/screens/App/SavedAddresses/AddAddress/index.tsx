import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import styles from "./styles";
import MainText from "../../../../components/MainText";
import MainButton from "../../../../components/Buttons/MainButton";
import FormHookInput from "../../../../components/Inputs/FormHookInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "./helpers";

interface AddAddressModalProps {
  isVisible: boolean;
  hideModal: () => void;
  onSave: (address: string) => void;
}

const AddAddressModal: React.FC<AddAddressModalProps> = ({
  isVisible,
  hideModal,
}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema), // Use Yup schema for validation
  });

  const onSubmit = (data) => {
    console.log("Data", data);
    hideModal();
    reset();
  };

  return (
    <Modal avoidKeyboard style={styles.modal} isVisible={isVisible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <MainText size="xlarge" weight="bold">
            Shto Adresë
          </MainText>
        </View>
        <View>
          <FormHookInput
            disabled
            defaultValue="Pejë"
            name="city"
            errors={errors}
            control={control}
            placeholder="Qyteti"
          />
          <FormHookInput
            errors={errors}
            name="address"
            control={control}
            placeholder="Adresa"
          />
          <View style={styles.buttons}>
            <MainButton label="Ruaj" onPress={handleSubmit(onSubmit)} />
            <MainButton
              label="Anulo"
              onPress={() => {
                hideModal();
                reset();
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddAddressModal;
