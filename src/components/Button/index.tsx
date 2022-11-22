import React from 'react';
import {TouchableOpacity, Text, ViewStyle, TextStyle} from 'react-native';
import styles from './styles';

interface ButtonProps {
  title: string;
  overrideStyles?: ViewStyle;
  textStyles?: TextStyle;
  onPress: () => void;
}

export const Button = ({title, onPress, overrideStyles = {}}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, overrideStyles]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
