import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';

import colors from '../utils/colors';

const LoadingButton = ({ text, onPress, isLoading }) => {
  const { container, title } = styles;
  return (
    <TouchableOpacity style={container} onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text style={title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
    borderRadius: 4,
    width: 250,
    height: 50,
  },
  title: {
    color: colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 20,
  },
});

export default LoadingButton;
