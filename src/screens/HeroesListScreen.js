import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/MarvelContext';
import HeroItem from '../components/HeroItem';

const HeroesListScreen = ({ navigation }) => {
    const { state, getHeroes } = useContext(Context);
    useEffect(() => {
        getHeroes();
        const listener = navigation.addListener('didFocus', () => getHeroes());

        return () => listener.remove();
    }, []);

    console.log('============== state =========');
    console.log(state);

    return (
        <>
            {state.isLoaded ?
                <FlatList
                
                    data={state.data.data.results}
                    keyExtractor={(result) => result.id}
                    renderItem={({ item }) => {
                        return <TouchableOpacity><HeroItem item={item} /></TouchableOpacity>
                    }} />
                : <Text style={styles.title}>No heroes to show</Text>}
        </>

    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        color: "green"
    }
});

export default HeroesListScreen;