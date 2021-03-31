import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HeroesListScreen from "./src/screens/HeroesListScreen";
import { Provider } from './src/context/MarvelContext';

const navigator = createStackNavigator({
  HeroesList: HeroesListScreen
}, { initialRouteName: 'HeroesList', defaultNavigationOptions: { title: 'Heroes' } });

const App = createAppContainer(navigator);

export default () => {
  return <Provider><App /></Provider>
};