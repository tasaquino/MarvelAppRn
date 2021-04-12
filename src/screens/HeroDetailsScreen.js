import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FeaturedHero from '../components/FeaturedHero';

const HeroDetailsScreen = ({navigation}) => {
    const item = navigation.getParam("item")
    return <FeaturedHero item={item}/>
}

const style = StyleSheet.create({});

export default HeroDetailsScreen;