// OrderItemStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:"#F5F5F5",
        borderBottomWidth:1,
        borderTopWidth:1,
        borderColor:Colors.lightGray
    },
    title:{
marginBottom:10
    },
    content:{
        alignItems:'center'
    }
});

export default styles;
