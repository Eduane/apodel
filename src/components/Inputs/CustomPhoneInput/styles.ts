import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors';
import { fonts } from '../../../constants/typography';

 const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: Colors.white,
    height: 50,
alignItems:"center",
borderRadius: 8,
paddingLeft: 10,
overflow:'hidden',
marginBottom:5
  },
  prefix: {
    marginRight: 10,
    color: 'black',
  },
  input: {
    flex:1,
    fontSize: 14,
    padding: 0,
    margin: 0,
    color: Colors.black,
    backgroundColor: Colors.white,
    height: 50,
    paddingLeft: 10,
    fontFamily: fonts.medium,

  },
  topLabel: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 5,
    fontFamily: fonts.medium,
  },
  bottomLabel: {fontSize: 12, color: 'red', marginBottom: 5, marginTop: 5},

});


export default styles