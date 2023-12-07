import { Alert } from "react-native";

export const handleOrderPress = () => {
  Alert.alert(
    "Konfirmo Porosinë",
    "Jeni të sigurt që dëshironi të bëni porosinë?",
    [
      {
        text: "Anulo",
        onPress: () => console.log("Porosia u anulua"),
        style: "cancel",
      },
      {
        text: "Porosit",
        onPress: () => {
        },
      },
    ],
    { cancelable: false }
  );
};
