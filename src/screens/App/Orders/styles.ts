import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';
import { layoutHelpers } from '../../../constants/helpers';

const styles = StyleSheet.create({
    container: {
flex:1,
backgroundColor:Colors.white,
      },
      flatList:{
        paddingHorizontal:layoutHelpers.commonSpace
    },
 
});

export default styles;
