import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const Button = ({
  title,
  backgroundColor,
  color,
  width,
  paddingVertical,
  handlePress,
  marginTop,
}) => {
  return (
    <TouchableOpacity
      style={{backgroundColor, width, paddingVertical, marginTop}}
      onPress={handlePress}>
      <Text style={{color, textAlign: 'center'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
