// styles.ts
import { StyleSheet } from 'react-native';
import { Colors } from '../../../../../../../constants/colors';
import { layoutHelpers } from '../../../../../../../constants/helpers';

const commonContainerStyle = {
  backgroundColor: Colors.lightBlue,
  borderWidth: 1,
  borderColor: Colors.lightBlue,
  borderRadius: 8,
  paddingVertical: 5,
paddingHorizontal:15,
marginLeft:layoutHelpers.commonSpace

};

const styles = StyleSheet.create({
  container: commonContainerStyle,
  activeContainer: {
    ...commonContainerStyle,
    backgroundColor: Colors.white,
    borderColor: Colors.lightBlue,
  },
  text: {
    color: Colors.white,
  },
  activeText: {
    color: Colors.lightBlue,
  },
});

export default styles;
