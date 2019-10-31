import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import colors from '../utils/colors';

const VotingButton = ({ isCorrect = false, onPress }) => {
  const { container, title } = styles;
  return (
    <TouchableOpacity
      style={[
        container,
        { backgroundColor: isCorrect ? colors.green : colors.red },
      ]}
      onPress={onPress}
    >
      <Text style={title}>{String(isCorrect)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: 125,
    height: 40,
    margin: 5,
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: colors.white,
    fontSize: 18,
  },
});

export default VotingButton;
