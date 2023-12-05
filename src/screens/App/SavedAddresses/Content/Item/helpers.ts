import { Alert } from "react-native";

export const onDeleteAddresPress = () => {
    Alert.alert(
      "Fshij Adresën",
      "Jeni të sigurt që dëshironi të fshini këtë adresë?",
      [
        {
          text: "Anulo",
          style: "cancel",
        },
        {
          text: "Fshij",
          onPress: () => {
            // Perform the delete action here
            console.log("Adresa është fshirë");
          },
          style: "destructive",
        },
      ]
    );
  };
  
  export const onSaveDefaultAddresPress = () => {
    Alert.alert(
      "Cakto si Adresë Kryesore",
      "Jeni të sigurt që dëshironi ta caktoni këtë adresë si adresën kryesore?",
      [
        {
          text: "Anulo",
          style: "cancel",
        },
        {
          text: "Po",
          onPress: () => {
            // Perform the set default action here
            console.log("Adresa është caktuar si adresë kryesore");
          },
          style: "default",
        },
      ]
    );
  };
  