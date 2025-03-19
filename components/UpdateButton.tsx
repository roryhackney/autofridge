import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
// components Update Button and this is blank at the moment
const UpdateButton = ({ onPress, title }: { onPress: () => void, title: string }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default UpdateButton;