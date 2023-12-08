import {StyleSheet} from 'react-native';
import { Colors } from '../../../../constants/colors';

const styles = StyleSheet.create({
    modal:{
        margin:0,
        justifyContent:'flex-end'
    },
    container:{
        backgroundColor:Colors.lightBlue2,
        height:260,
        paddingHorizontal:20,
borderTopRightRadius:16,
borderTopLeftRadius:16
    },
    header:{
        width:'100%',
        alignItems:'center',
        marginTop:10,
        paddingBottom:20,
    },
    buttons:{
        flexDirection:'row',
        justifyContent:"space-evenly",
        marginTop:5
    }
  
});

export default styles;
