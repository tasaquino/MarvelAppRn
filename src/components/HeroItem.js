import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const HeroItem = ({ item }) => {
    const imageUrl = `${item.thumbnail.path}.${item.thumbnail.extension}`;
    return <View style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <View style={styles.descriptionContainer}>
            <Text numberOfLines={1} style={styles.name}>{item.name}</Text>
        </View>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginRight: 16,
        marginLeft: 16,
        marginTop: 8,
        borderRadius: 5,
        elevation: 3,
        flexDirection: 'column',
        alignItems: 'flex-start',
        alignSelf: 'flex-start'
    },
    image: {
        width: 250,
        height: 250
    },
    descriptionContainer: {
        alignSelf: 'stretch',
        backgroundColor: '#f4f3ee',
        opacity: 0.8
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8,
        width: 200,
        padding: 8
    },
});

export default HeroItem;