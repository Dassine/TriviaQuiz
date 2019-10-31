import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AllHtmlEntities } from 'html-entities';

import colors from '../utils/colors';

const Question = ({ question, index, total }) => {
  const decodedQuestion = new AllHtmlEntities().decode(question);
  const { container, text } = styles;
  return (
    <View>
      <View style={container}>
        <Text style={text}>{decodedQuestion}</Text>
      </View>
      <Text style={text}>
        {index} of {total}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 20,
    height: 250,
    width: 250,
    padding: 5,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    margin: 30,
  },
});

export default Question;
