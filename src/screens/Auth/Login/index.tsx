import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MainButton from "../../../components/Buttons/MainButton";
import { goBack } from "../../../utils/navigationActions";
import styles from "./styles";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import FormHookInput from "../../../components/Inputs/FormHookInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationSchema } from "./helpers";

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema), // Use Yup schema for validation
  });

  const onSubmit = (data) => {
    // Handle form submission here
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <FormHookInput
            phoneInput
            name="phone"
            errors={errors}
            control={control}
            placeholder="Telefoni"
          />
          <FormHookInput
            errors={errors}
            name="password"
            control={control}
            placeholder="Fjalëkalimi"
            secureTextEntry
          />

          <MainButton
            containerStyle={{ marginTop: 10 }}
            onPress={handleSubmit(onSubmit)}
            size="large"
            label="Vazhdo"
          />
        </ScrollView>
        <View style={styles.bottomPart}>
          <MainButton onPress={() => goBack()} size="large" label="Kthehu" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
