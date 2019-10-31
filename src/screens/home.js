import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Home = () => {
  const titleText = 'Welcome to the Trivia Challenge!';
  const descriptionText =
    'You will be presented with 10 true or false questions.';
  const questionText = 'Can you score 100%?';
  const buttonText = 'START';

  const { container, title, subTitle } = styles;
  return (
    <View style={container}>
      <Text style={title}>{titleText}</Text>
      <Text style={subTitle}>{descriptionText}</Text>
      <Text style={subTitle}>{questionText}</Text>
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
