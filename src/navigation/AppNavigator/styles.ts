import { StyleSheet} from 'react-native';
import { Colors } from '../../constants/colors';

const styles = StyleSheet.create({
  placeHolder: {
    height: '100%',
    width: '100%',
    backgroundColor: 'green',
    borderRadius: 100,
  },
  tabBarStyle: {
    backgroundColor: Colors.white,
    shadowColor: 'transparent',
    marginBottom: 0,
    alignItems: 'center',
  },
});

export default styles;
