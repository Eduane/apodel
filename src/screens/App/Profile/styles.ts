import {StyleSheet} from 'react-native';
import { layoutHelpers } from '../../../constants/helpers';
import { Colors } from '../../../constants/colors';
const styles = StyleSheet.create({
   safeArea:{ flex: 1,backgroundColor:Colors.lightBlue1,},
   userLogo:{
alignSelf:'center',
paddingTop:20

   },
 container:{
   flexGrow: 1,
    alignItems:"center",
    paddingHorizontal:layoutHelpers.screenContainerSpace,
    paddingTop:15,
    paddingBottom:100
 },
 bottomPart:{alignItems: "flex-end" ,width:'100%'},
 inputContainer:{
   backgroundColor: "transparent",
   borderBottomWidth: 1,
   marginBottom: 10,
   borderColor: Colors.lightGray1,
   borderRadius: 0,
   height:40,
 },
input:{ fontSize: 18, color: Colors.black,
  flex:1

},
submitButton:{ alignSelf:'center',marginTop:30 }
});

export default styles;
