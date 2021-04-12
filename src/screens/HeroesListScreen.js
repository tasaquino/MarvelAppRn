import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { Context } from '../context/MarvelContext';
import HeroItem from '../components/HeroItem';
import Attribution from '../components/Attribution';
import ViewMoreButton from '../components/ViewMoreButton';
import FeaturedHero from '../components/FeaturedHero';
import backgroundImage from '../../assets/background.jpeg';

const HeroesListScreen = ({ navigation }) => {
    const { state, getHeroes } = useContext(Context);
    useEffect(() => {
        getHeroes();
        const listener = navigation.addListener('didFocus', () => getHeroes());

        return () => listener.remove();
    }, []);

    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.image} resizeMode='stretch'>
            {state.isLoaded ? <FeaturedHero item={state.data.data.results[7]}></FeaturedHero> : <Text />}
            {state.isLoaded ?
                <View>
                    <FlatList style={styles.list}
                        horizontal={true}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled={true}
                        tvParallaxTiltAngle={true}
                        data={state.data.data.results}
                        keyExtractor={(result) => result.id}
                        renderItem={({ item }) => {
                            return <TouchableOpacity><HeroItem item={item} /></TouchableOpacity>
                        }} />
                    <ViewMoreButton onPress={() => {
                        console.log('Tap on more ================= ')
                        navigation.navigate("MoreHeroes");
                    }} />
                </View>
                : <Text style={styles.title}>No heroes to show</Text>}
            {state.isLoaded ? <Attribution copyright={state.data.copyright} attributionHtml={state.data.attributionHtml} /> : <Text></Text>}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
      },
    title: {
        fontSize: 30,
        color: "green"
    },
    list: {
        alignContent: 'flex-start',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
      },
});

export default HeroesListScreen;