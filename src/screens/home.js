import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import LoadingButton from '../components/loadingButton';
import { fetchQuiz } from '../redux/actions/quizActions';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const isLoading = useSelector(({ quizReducer }) => quizReducer.isFetching);

  const startGame = () => dispatch(fetchQuiz(navigation));

  const titleText = 'Welcome to the Trivia Challenge!';
  const descriptionText =
    'You will be presented with 10 True or False questions.';
  const questionText = 'Can you score 100%?';
  const buttonText = 'START';

  const { container, title, subTitle } = styles;
  return (
    <View style={container}>
      <Text style={title}>{titleText}</Text>
      <Text style={subTitle}>{descriptionText}</Text>
      <Text style={subTitle}>{questionText}</Text>
      <LoadingButton
        text={buttonText}
        onPress={startGame}
        isLoading={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 90,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 22,
    margin: 10,
  },
});

export default Home;
