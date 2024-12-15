import React from 'react';
import { Text, TouchableOpacity, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { COLORS, SIZES } from '../styles';

interface ButtonProps {
    title: string; 
    onPress: () => void; 
    style?: StyleProp<ViewStyle>; 
  }
  
const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 80,
  },
  buttonText: {
    fontSize: SIZES.button,
    fontFamily: "Outfit",
    color: COLORS.white,
    fontWeight: '600',
  },
});

export default Button;
