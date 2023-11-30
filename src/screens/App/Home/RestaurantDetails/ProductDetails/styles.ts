import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../constants/colors';
import { layoutHelpers } from '../../../../../constants/helpers'

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:Colors.white,
    },
    imageContainer:{
        justifyContent:'center',
        maxHeight:250,
        width:'100%',
        backgroundColor:'red'
    },
    image:{
        maxHeight:250,
        width:'100%'
    },
    content:{
        marginHorizontal:layoutHelpers.screenContainerSpace,
        marginTop:20
    },
    bottom:{
        alignItems:'center',
        gap:20,
        marginTop:20
    },
    title:{
        fontSize:22,
        lineHeight:22
    },
    description:{
marginTop:10,
marginHorizontal:10,
    },

 
});

export default styles;
