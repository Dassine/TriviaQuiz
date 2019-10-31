import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AllHtmlEntities } from 'html-entities';

import colors from '../utils/colors';

const Answer = ({ result: { question, correctAnswer, answer } }) => {
  const decodedQuestion = new AllHtmlEntities().decode(question);
  const displayedSign = answer == correctAnswer ? '+' : '-';
  const displayerColor = answer == correctAnswer ? colors.green : colors.red;

  const { container, questionText, answerText } = styles;
  return (
    <View style={container}>
      <Text style={[questionText, { color: displayerColor }]}>
        {displayedSign}
      </Text>

      <Text style={[answerText, { color: displayerColor }]}>
        {decodedQuestion}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin: 15,
    flex: 1,
  },
  questionText: {
    color: colors.darkGrey,
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: 14,
    paddingRight: 10,
  },
  answerText: {
    textAlign: 'left',
    fontSize: 15,
  },
});

export default Answer;
