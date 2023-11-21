import {StyleSheet} from 'react-native';
import {fonts} from '../../constants/typography';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  text: {
    color: Colors.black,
  },
  light: {
    fontFamily: fonts.light,
  },
  regular: {

    fontFamily: fonts.regular,
  },
  medium: {
    fontFamily: fonts.medium,
  },
  semiBold: {
    fontFamily: fonts.semiBold,
  },
  bold: {
    fontFamily: fonts.bold,
  },
  small: {
    fontSize: 12,
    lineHeight: 14,
  },
  regularSize: {
    fontSize: 14,
    lineHeight: 16,
  },
  large: {
    fontSize: 16,
    lineHeight: 18,
  },
  xlarge: {
    fontSize: 18,
    lineHeight: 20,
  },
});

export default styles;
