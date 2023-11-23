import {StyleSheet} from 'react-native';
import { layoutHelpers } from '../../../constants/helpers';
import { Colors } from '../../../constants/colors';
const styles = StyleSheet.create({
   safeArea:{ flex: 1,backgroundColor:Colors.lightBlue1 },
 container:{
   flexGrow: 1,
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:layoutHelpers.screenContainerSpace
 },
 bottomPart:{alignItems: "center" ,marginBottom:20},
 image:{
  width:150,
  height:50,
  alignSelf:'center'
}

});

export default styles;
