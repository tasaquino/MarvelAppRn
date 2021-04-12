import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HeroesListScreen from "./src/screens/HeroesListScreen";
import { Provider } from './src/context/MarvelContext';
import MoreHeroesScreen from "./src/screens/MoreHeroesScreen";

const navigator = createStackNavigator({
  HeroesList: HeroesListScreen,
  MoreHeroes: MoreHeroesScreen,
}, { initialRouteName: 'HeroesList', defaultNavigationOptions: { title: 'Marvel Heroes' } });

const App = createAppContainer(navigator);

export default () => {
  return <Provider><App /></Provider>
};