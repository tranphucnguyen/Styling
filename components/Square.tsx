// components/Square.tsx

import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

type SquareProps = {
    color: string;
    title: string;
};

const Square: React.FC<SquareProps> = ({ color, title }) => {
    return (
        <View style={[styles.square, { backgroundColor: color }]}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    text: {
        color: '#FFFFFF',
    },
});

export default Square;
