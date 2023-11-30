import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../constants/colors';

const styles = StyleSheet.create({
container:{
        flexDirection:'row',
        gap:10,
        alignItems:'center'
    },
    button: {
        height:32,
        width:32,
        backgroundColor:Colors.lightBlue1,
        justifyContent:'center',
        alignItems:"center",
        borderRadius:100
      },

});

export default styles;
