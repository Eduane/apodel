import {Pressable, View, StyleProp, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import styles from './styles';
import MainText from '../MainText';
import {Colors} from '../../constants/colors';

interface BottomBarItemProps {
  icon: ReactNode;
  label: string;
  focused?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
}

const BottomBarItem: React.FC<BottomBarItemProps> = ({
  icon,
  label,
  focused,
  containerStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.icon}>{icon}</View>
      <MainText
        textStyle={[
          styles.label,
          {color: focused ? Colors.black : Colors.gray},
        ]}>
        {label}
      </MainText>
    </View>
  );
};

export default BottomBarItem;
