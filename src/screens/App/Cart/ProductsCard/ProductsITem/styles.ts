import { StyleSheet } from "react-native";
import { Colors } from "../../../../../constants/colors";

export default StyleSheet.create({
container:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  height:40,
  marginBottom:10,
  marginHorizontal:10,
},
leftPart:{

  flexDirection:'row',
  gap:10

},
buttonsContainer: {
  flexDirection:'row',
gap:10
    // Add styles for the quantity container here
  },
  quantity: {
    // Add styles for the quantity text here
  },
 
  button: {
    height:30,
    width:30,
    backgroundColor:Colors.lightBlue1,
    justifyContent:'center',
    alignItems:"center",
    borderRadius:100
  },
});
