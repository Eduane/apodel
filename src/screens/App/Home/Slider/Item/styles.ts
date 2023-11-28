import { StyleSheet } from 'react-native';
import { layoutHelpers } from '../../../../../constants/helpers';

const styles = StyleSheet.create({
    container: {
        alignItems: "center", 
        borderRadius: 40,
       marginHorizontal:layoutHelpers.commonSpace, // Adjust this for item spacing
marginBottom:5
      },
     
      selectedItem: {
        borderColor: "purple",
      },
      imageContainer:{
        borderWidth: 3,
        borderColor: "black",
        padding:5,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        overflow:'hidden',

      },
      image: {
        width: 60, 
        height: 60, 
        borderRadius:100
      },
      label: {
        marginTop: 5,
      },
});

export default styles;
