import {createAppContainer } from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import Home from "./Home";
import Game from './Game';

const StackNavigator = createStackNavigator(
{
    Home: {
      screen: Home,
    },
    Game: {
      screen: Game,
      navigationOptions: {
        gestureEnabled: false,
      },
    },
},
{
    initialRouteName: 'Game',
    headerMode: 'none',
});

export default createAppContainer(StackNavigator);