import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../constants/colors';

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        marginTop:15
    },
    image:{
        width:120,
        height:120,
        borderRadius:100
    },
    priceContainer:{
width:'100%',
alignItems:'flex-end'
    },
    price:{},
    rightPart:{
        flex:1,
        paddingHorizontal:10,
        marginVertical:5
    },
    title:{marginBottom:5},
    description:{flex:1},
    buttonsContainer:{
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
