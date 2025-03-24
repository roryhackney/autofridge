import React from 'react';
import { TouchableOpacity, Text } from 'react-native';


const AddItems = ({ onPress, title }: { onPress: () => void, title: string }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default AddItems;