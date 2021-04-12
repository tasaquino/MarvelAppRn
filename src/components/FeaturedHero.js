import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const FeaturedHero = ({ item, navigator }) => {
    const imageUrl = `${item.thumbnail.path}.${item.thumbnail.extension}`;
    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} resizeMode='cover' />
        <View style={styles.detail}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        margin: 16
    },
    image: {
        height: 250
    },
    detail: {
        backgroundColor: '#f4f3ee',
        opacity: 0.8
    },
    title: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8,
        width: 200,
        padding: 8,
        color: 'black'
    },
    description: {
        fontSize: 12,
        marginBottom: 8,
        width: 200,
        padding: 8,
        color: 'black'
    },
});

export default FeaturedHero;