// OrderItemStyles.js
import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../constants/colors';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.lightGray,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    height: 60,
    marginTop: 10,
  },
  right: {
    justifyContent: 'space-between',
    height: '100%',
  },
  collapsible: {
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.lightGray,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  icon:{
    alignItems:'center',
    justifyContent:'center'
  }
});

export default styles;
