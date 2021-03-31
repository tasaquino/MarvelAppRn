import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const HeroItem = ({ item }) => {
    const imageUrl = `${item.thumbnail.path}.${item.thumbnail.extension}`;
    return <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageUrl}} />
        <Text style={styles.name}>{item.name}</Text>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 16,
        padding: 5,
        borderRadius: 5,
        elevation: 3
    },
    image: {
        width: 120,
        height: 120
    },
    name: {
        fontSize: 18
    }
});

export default HeroItem;