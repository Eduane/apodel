import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../constants/colors';


const styles = StyleSheet.create({
    container: {
    backgroundColor:Colors.lightBlue2,
      padding: 10,
      marginBottom: 10,
      flexDirection:'row',
      justifyContent:'space-between',
      height:70,
      borderBottomWidth:1,
      borderColor:Colors.lightGray,
      
      
    },
   

    leftPart:{
        flexDirection:'row',


    },
    image:{
        width:50,
        height:50,
        borderRadius:100
    },
    name: {
   marginLeft:10
    },
    details: {
      fontSize: 14,
      color: "#888",
    },
    rightPart:{
        height:'100%',
        justifyContent:'space-between',
    }
  });
  
export default styles;
