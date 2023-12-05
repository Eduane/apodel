// OrderItemStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../constants/colors';

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
        
    },
    label:{ fontSize: 14, textAlign: "center" },
    button:{
backgroundColor:Colors.lightBlue2
    }

});

export default styles;
