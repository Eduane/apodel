import { StyleSheet, Platform } from 'react-native';
import { layoutHelpers } from '../../../../../constants/helpers';
import { Colors } from '../../../../../constants/colors';

const styles = StyleSheet.create({
container:{
    height:250,
    justifyContent:'flex-end',
    maxHeight:250,

},
searchInput:{
    marginBottom:20,
    marginHorizontal:layoutHelpers.commonSpace,
    opacity:0.9
},
titleContainer:{

    marginBottom:20,
    width:'100%',
    alignItems:'center'
},
title:{
    fontSize:28,
    lineHeight:28,
    color:Colors.white,

},
overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  }

});

export default styles;
