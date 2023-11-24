import React, { FC, ReactNode } from "react";
import { StatusBar, TouchableOpacity, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MainText from "../../MainText";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

interface MainHeaderProps {
  leftLabel?: string;
  rightLabel?: string;
  onLeftIconPress?: () => void;
  onLeftLabelPress?: () => void;
  onRightIconPress?: () => void;
  onRightLabelPress?: () => void;
  showLeftIcon?: boolean;
  showRightIcon?: boolean;
  rightIcon?: ReactNode;
  containerStyle?: ViewStyle;
  title?: string;
}

const MainHeader: FC<MainHeaderProps> = ({
  leftLabel,
  rightLabel,
  onLeftIconPress,
  onLeftLabelPress,
  onRightIconPress,
  onRightLabelPress,
  showLeftIcon = true,
  showRightIcon = true,
  rightIcon,
  containerStyle,
  title,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />

      <SafeAreaView style={[styles.container, containerStyle]} edges={["top"]}>
        <View style={styles.headerContainer}>
          <View style={styles.leftContent}>
            {showLeftIcon && (
              <TouchableOpacity
                hitSlop={{ top: 10, bottom: 20, left: 10 }}
                style={{ paddingRight: 5 }}
                onPress={onLeftIconPress}
              >
                <View style={styles.leftIcon}>
                  {/* Replace ArrowLeft with FontAwesome5 icon */}
                  <Icon name="chevron-left" size={25} color="black" />
                </View>
              </TouchableOpacity>
            )}
            {leftLabel && (
              <MainText
                numberOfLines={1}
                ellipsizeMode="tail"
                onPress={onLeftLabelPress}
                textStyle={styles.leftLabel}
                weight="bold"
                size="xlarge"
              >
                {leftLabel}
              </MainText>
            )}
          </View>
          {title && (
            <MainText weight="medium" size="xlarge">
              {title}
            </MainText>
          )}
          <View style={styles.rightContent}>
            {rightLabel && (
              <TouchableOpacity
                style={styles.rightLabel}
                onPress={onRightLabelPress}
              >
                <MainText
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  weight="regular"
                >
                  {rightLabel}
                </MainText>
              </TouchableOpacity>
            )}
            {showRightIcon && (
              <TouchableOpacity
                hitSlop={{ right: 10, bottom: 10 }}
                onPress={onRightIconPress && onRightIconPress}
              >
                {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default MainHeader;
