import {StyleSheet} from 'react-native';
import { Colors } from '../../../constants/colors';
import { fonts } from '../../../constants/typography';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  topLabel: {
    fontSize: 16,
    color: Colors.black,
    marginBottom: 5,
    fontFamily: fonts.medium,
  },
  bottomLabel: {fontSize: 12, color: 'red', marginBottom: 5, marginTop: 5},
  inputStyle: {
    fontSize: 14,
    padding: 0,
    margin: 0,
    color: Colors.black,
    backgroundColor: Colors.white,
    height: 50,
    borderRadius: 8,
    paddingLeft: 10,
    fontFamily: fonts.medium,
  },
});

export default styles;
