import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.switchContainer} onPress={toggleSwitch}>
        <View
          style={[
            styles.track,
            { backgroundColor: isEnabled ? '#A1D8D0' : '#D3D3D3' },
          ]}
        />
        <View
          style={[
            styles.thumb,
            { transform: [{ translateX: isEnabled ? 22 : 0 }] },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchContainer: {
    width: 44,
    height: 22,
    borderRadius: 11,
    padding: 4,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
  },
  track: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 11,
  },
  thumb: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#f4f3f4',
    top: 0,
    left: 0,
    borderWidth: 2,
    borderColor: '#dcdcdc',
  },
});

export default ToggleSwitch;
