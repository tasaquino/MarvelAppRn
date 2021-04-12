import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HeroesListScreen from "./src/screens/HeroesListScreen";
import { Provider } from './src/context/MarvelContext';
import MoreHeroesScreen from "./src/screens/MoreHeroesScreen";
import HeroDetailsScreen from "./src/screens/HeroDetailsScreen";

const navigator = createStackNavigator({
  HeroesList: HeroesListScreen,
  MoreHeroes: MoreHeroesScreen,
  HeroDetails: HeroDetailsScreen
}, { initialRouteName: 'HeroesList', defaultNavigationOptions: { title: 'Marvel Heroes' } });

const App = createAppContainer(navigator);

export default () => {
  return <Provider><App /></Provider>
};