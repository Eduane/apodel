import {StyleSheet} from 'react-native';
import { Colors } from '../../../constants/colors';
const styles = StyleSheet.create({
   safeArea:{
      flex:1,
      backgroundColor:Colors.lightBlue1
   },
 container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:Colors.lightBlue1
 },
 loginButton:{ marginBottom: 5 },
 image:{
   width:150,
   height:50,
   alignSelf:'center'
 }
});

export default styles;
