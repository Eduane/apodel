import { StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const styles = StyleSheet.create({
    horizontalLine: {
      
      borderBottomWidth: 1, // You can adjust the width of the line
      borderColor: Colors.lightGray1, // You can set the color of the line
      marginVertical: 10, // You can adjust the margin top and bottom
      width:'100%'
    },
  });

  export default styles