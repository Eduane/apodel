import { Platform, StyleSheet } from "react-native";
import { Colors } from "../../../../constants/colors";
import { shadowStyle } from "../../../../constants/shadow";

const styles = StyleSheet.create({
    container:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    height:'100%',
    padding: 10,

},
    wrapper: {
        justifyContent:'center',
        width:'100%',
    height:60,
      backgroundColor: Colors.white,
      borderRadius: 8,
      marginTop: 10,
    ...shadowStyle
    },
  
    text: {
      fontWeight: "600",
      marginRight: 10,
    },
  });

  export default styles