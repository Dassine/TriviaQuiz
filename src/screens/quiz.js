import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import colors from '../utils/colors';
import Question from '../components/question';
import VotingButton from '../components/votingButton';
import { getNextQuestion } from '../redux/actions/quizActions';

const Quiz = ({ navigation }) => {
  const dispatch = useDispatch();

  const total = useSelector(({ quizReducer }) => quizReducer.questions.length);
  const currIndex = useSelector(({ quizReducer }) => quizReducer.currIndex);
  const currQuestion = useSelector(
    ({ quizReducer }) => quizReducer.currQuestion
  );
  const currCategory = useSelector(
    ({ quizReducer }) => quizReducer.currCategory
  );

  const onAnswer = answer =>
    dispatch(getNextQuestion(currIndex, answer, navigation));

  const { container, title, buttonsContainer } = styles;
  return (
    <View style={container}>
      <Text style={title}>{currCategory}</Text>
      <Question question={currQuestion} index={currIndex + 1} total={total} />
      <View style={buttonsContainer}>
        <VotingButton onPress={() => onAnswer('False')} />
        <VotingButton isCorrect onPress={() => onAnswer('True')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 10,
  },
  buttonsContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 30,
  },
});

export default Quiz;
