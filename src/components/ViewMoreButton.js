import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const ViewMoreButton = ({ onPress }) => {
    return <TouchableOpacity onPress={onPress}><Text style={style.text}>View more</Text></TouchableOpacity>;
}

const style = StyleSheet.create({
    text: {
        margin: 16,
        fontSize: 14,
        fontWeight: 'bold',
        color: 'blue'
    }
});

export default ViewMoreButton;