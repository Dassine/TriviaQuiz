import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import Answer from '../components/answer';
import LoadingButton from '../components/loadingButton';
import { resetQuiz } from '../redux/actions/quizActions';

const Results = ({ navigation }) => {
  const dispatch = useDispatch();

  const questions = useSelector(({ quizReducer }) => quizReducer.questions);
  const score = useSelector(({ quizReducer }) => quizReducer.score);
  const answers = useSelector(({ quizReducer }) => quizReducer.answers);

  const onPlayAgain = () => dispatch(resetQuiz(navigation));

  const scoreText = `YOU SCORED \n ${score} / ${questions.length}`;
  const buttonText = 'PLAY AGAIN?';

  const { container, title, list } = styles;
  return (
    <View style={container}>
      <Text style={title}>{scoreText}</Text>
      <FlatList
        data={answers}
        renderItem={({ item }) => <Answer result={item} />}
        keyExtractor={({ question }) => question}
        style={list}
      />
      <LoadingButton text={buttonText} onPress={onPlayAgain} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 50,
    paddingTop: 50,
    margin: 30,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    padding: 10,
  },
  list: { paddingRight: 20, marginBottom: 20 },
});

export default Results;
