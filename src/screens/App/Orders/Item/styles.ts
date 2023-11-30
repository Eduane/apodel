import { StyleSheet } from 'react-native';
import { Colors } from '../../../../constants/colors';


const styles = StyleSheet.create({
    container: {

      },
      header:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:1,
        borderColor:Colors.lightGray,
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:8,
        height:60,
        marginTop:10,
    

      },
      right:{
        justifyContent:'space-between',
        height:'100%'
      },
    
      collapsible:{
        marginHorizontal:10,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderBottomWidth:1,
        borderColor:Colors.lightGray
      }
 
});

export default styles;
