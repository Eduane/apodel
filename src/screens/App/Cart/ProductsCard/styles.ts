import { StyleSheet } from "react-native";
import { shadowStyle } from "../../../../constants/shadow";
import { Colors } from "../../../../constants/colors";

export default StyleSheet.create({
  container:{
  backgroundColor:Colors.white,
  ...shadowStyle,
  marginTop:20,
  maxHeight:250,  
  marginHorizontal:5,
  borderRadius:8,
  },
  items: {
    // Add your container styles here
    backgroundColor:Colors.white,
    paddingTop:10,
    paddingHorizontal:10,


  },
  header: {
    // Add styles for store information here
    marginBottom:5,
    borderWidth:1,
    borderRadius:8,
    borderColor:Colors.lightGray,
    with:'100%',
    paddingVertical:10,
    paddingHorizontal:15,
    backgroundColor:Colors.lightBlue2
    
  },
  productItem: {
    // Add styles for each product item here
  },
  quantityContainer: {
    // Add styles for the quantity container here
  },
  quantityText: {
    // Add styles for the quantity text here
  },
  buttonsContainer: {
    // Add styles for the buttons container here
  },
  button: {
    // Add styles for the +/- buttons here
  },
});
