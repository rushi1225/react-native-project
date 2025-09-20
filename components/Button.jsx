import Colors from '@/components/Colors';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ title, onPress}) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.primary,
        paddingVertical: 15,
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        borderRadius: 30,
    },
    text: {
        color: Colors.white,
        fontSize: 20,
        fontWeight: 'bold',
    },
});
