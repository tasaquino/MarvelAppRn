import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Attribution = ({ copyright, attributionHtml }) => {
    return <View>
        <Text style={styles.text}>Data provided by Marvel. {copyright}</Text>
    </View>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 12,
        margin: 30,
        alignSelf: 'center'
    }
});

export default Attribution;