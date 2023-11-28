import {StyleSheet, Platform} from 'react-native';
import {Colors} from '../../../constants/colors';
import {fonts} from '../../../constants/typography';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 8,
    height: 50,
 paddingHorizontal:10
  },
  input: {
    flex: 1,
    height: 50,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 15,
  },
});

export default styles;
