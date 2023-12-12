import { View, Text, KeyboardAvoidingView, Platform } from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import { Colors } from "../../../constants/colors";
import MainButton from "../../../components/Buttons/MainButton";
import { ScrollView } from "react-native-gesture-handler";
import FormHookInput from "../../../components/Inputs/FormHookInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { initialFormValues, validationSchema } from "./helpers";
import { navigate } from "../../../utils/navigationActions";
import LastAddresCard from "./LastAddresCard";
import SavedAddressesButton from "./SavedAddressesButton";
import { useAuthStore } from "../../../store/Auth";

const ProfileScreen = () => {
  const [canEdit, setCanEdit] = useState(false);
  const { logout } = useAuthStore();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: initialFormValues,
    resolver: yupResolver(validationSchema), // Use Yup schema for validation
  });
  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
    setCanEdit(false);
  };
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.userLogo}>
            <Icon name="user" size={100} color={Colors?.lightBlue} />
          </View>
          <FormHookInput
            containerStyle={styles.inputContainer}
            inputProps={{
              style: styles.input,
              editable: canEdit,
            }}
            name="name"
            errors={errors}
            control={control}
            placeholder="Emri"
            topLabel="Emri"
          />
          <FormHookInput
            containerStyle={styles.inputContainer}
            inputProps={{
              style: styles.input,
              editable: canEdit,
            }}
            name="surname"
            errors={errors}
            control={control}
            placeholder="Mbiemri"
            topLabel="Mbiemri"
          />
          <FormHookInput
            disabled
            containerStyle={styles.inputContainer}
            inputProps={{
              style: styles.input,
              editable: false,
            }}
            name="phone"
            errors={errors}
            control={control}
            placeholder="Telefoni"
            topLabel="Telefoni"
          />
          <FormHookInput
            containerStyle={styles.inputContainer}
            inputProps={{
              style: styles.input,
              editable: false,
            }}
            name="registerDate"
            errors={errors}
            control={control}
            placeholder="Data e regjistrimit"
            topLabel="Data e regjistrimit"
          />

          <FormHookInput
            disabled
            containerStyle={styles.inputContainer}
            inputProps={{
              style: styles.input,
              editable: false,
            }}
            name="city"
            errors={errors}
            control={control}
            placeholder="Qyteti"
            topLabel="Qyteti"
          />
          <View style={styles.bottomPart}>
            <MainButton
              onPress={
                canEdit ? handleSubmit(onSubmit) : () => setCanEdit(true)
              }
              label={canEdit ? "Ruaj" : "Ndrysho"}
              size="small"
            />
          </View>
          <LastAddresCard />
          <SavedAddressesButton
            onPress={() => navigate("General", { screen: "SavedAddresses" })}
          />
        </ScrollView>

        <MainButton
          onPress={() => logout()}
          size="small"
          containerStyle={styles.submitButton}
          label="Dil"
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
