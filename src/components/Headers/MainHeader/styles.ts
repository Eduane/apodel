import {StyleSheet} from 'react-native';
import {Colors} from '../../../constants/colors';
import {layoutHelpers} from '../../../constants/helpers';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderBottomWidth:1,
    borderColor:Colors.lightGray
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: layoutHelpers.commonSpace,
    alignItems: 'center',
    height: 50,
    gap: 5,
  },
  leftContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
  },
  leftLabel: {
    textAlign: 'left',
    flex: 1,
  },
  rightContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  rightLabel: {
    marginRight: 10,
    flex: 1,
  },
  circle: {
    backgroundColor: Colors.orange,
    height: 25,
    width: 25,
    borderRadius: 100,
  },
  leftIcon: {
    width: 25,
    height: 25,
    paddingBottom: 2,
    marginRight: 10,
  },
  rightIcon: {
    height: 25,
    width: 25,
  },
});

export default styles;
