import {StyleSheet} from 'react-native';
import { Colors } from '../../../constants/colors';
import { fonts } from '../../../constants/typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems:'center',
    marginBottom:5
  },
  topLabel: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 5,
    fontFamily: fonts.medium,
    width:'100%',
    marginTop:5,
    marginLeft:10,
    fontWeight:'600'
  },
  bottomLabel: {fontSize: 12, color: 'red', marginBottom: 5, marginTop: 5},
  inputStyle: {
    flex:1,
    fontSize: 14,
    padding: 0,
    margin: 0,
    color: Colors.black,
    fontFamily: fonts.medium, 
height:'100%',

  },
  inputWrapper:{ 
  flexDirection: "row" ,paddingHorizontal:10, width: '100%',
  backgroundColor:Colors.white,
  height: 50,
borderRadius:8,

},
eyeIcon:{
justifyContent:'center',
paddingHorizontal:5
}
});

export default styles;
