import React from 'react';
import {
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

interface HeaderProps {
  title: string;
  rightIcon?: ImageSourcePropType;
  onRightPress?: () => void;
}

export const Header = ({title, rightIcon, onRightPress}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{title}</Text>

      <TouchableOpacity style={styles.logoutBtn} onPress={onRightPress}>
        <Image source={rightIcon} style={styles.logoutImg} />
      </TouchableOpacity>
    </View>
  );
};
