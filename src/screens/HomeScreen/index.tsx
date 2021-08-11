import React from 'react';
import styles from './styles';
import { SafeAreaView, View, Text } from 'react-native';

export function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home Screen</Text>
        </SafeAreaView>
    )
}