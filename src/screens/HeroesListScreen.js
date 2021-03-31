import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/MarvelContext';

const HeroesListScreen = ({ navigation }) => {
    const { state, getHeroes } = useContext(Context);
    useEffect(() => {
        getHeroes();
        const listener = navigation.addListener('didFocus', () => getHeroes());

        return () => listener.remove();
    }, []);

    console.log(state.data);

    return (
        <Text style={styles.title}>Heroes List Screen</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "green"
    }
});

export default HeroesListScreen;