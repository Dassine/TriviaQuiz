import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './screens/home';
import Quiz from './screens/quiz';
import Results from './screens/results';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Quiz: {
      screen: Quiz,
    },
    Result: {
      screen: Results,
    },
  },
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

export default createAppContainer(AppNavigator);
