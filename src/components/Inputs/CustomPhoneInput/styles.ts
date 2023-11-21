import {StyleSheet} from 'react-native';
import { Colors } from '../../../constants/colors';
import { fonts } from '../../../constants/typography';
const styles = StyleSheet.create({
 container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
 },
 textContainerStyle: {
    margin: 0,
    backgroundColor: 'white',
  },
  containerInputStyle: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    height: 50,
    marginBottom: 5,
    padding: 0,
    margin: 0,
  },
  textInputStyle:{
    fontSize: 14,
    padding: 0,
    margin: 0,
    color: Colors.black,
    backgroundColor: Colors.white,
    paddingLeft: 10,
    fontFamily: fonts.medium,
  },
  countryPickerButtonStyle: {
    width: 70}
  
});

export default styles;
