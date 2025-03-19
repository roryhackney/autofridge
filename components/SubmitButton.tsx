import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
// components Submit Button and this is blank at the moment
const SubmitButton = ({ onPress, title }: { onPress: () => void, title: string }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;