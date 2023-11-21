import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';

const buttonSizes = {
  small: {
    height: 30,
    width: 100,
  },
  medium: {
    height: 40,
    width: 150,
  },
  large: {
    height: 40,
    width: 200,
  },
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlue,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  label: {
    color: 'black',
  },
  // Add styles for each size here
  smallButton: {
    ...buttonSizes.small,
  },
  mediumButton: {
    ...buttonSizes.medium,
  },
  largeButton: {
    ...buttonSizes.large,
  },
});

export default styles;
