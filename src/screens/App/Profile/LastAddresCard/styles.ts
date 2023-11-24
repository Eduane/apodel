import { StyleSheet, Platform } from 'react-native';
import { Colors } from '../../../../constants/colors';
import { shadowStyle } from '../../../../constants/shadow';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 10,
    backgroundColor:Colors.white,
    borderRadius:8,
    marginTop:10,
  ...shadowStyle
  },
  title: {
    fontWeight: '600',
    marginBottom: 5,
  },
  text: {
    marginLeft: 5,
  },
});

export default styles;
