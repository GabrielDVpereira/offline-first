import React from 'react';
import styles from './styles';
import { SafeAreaView, Text } from 'react-native';
import { useItems } from '../../hooks';

export function HomeScreen() {
    const { items } = useItems();
    return (
        <SafeAreaView style={styles.container}>
            {items.map(item => (
                <Text key={item.id}>{item.title}</Text>
            ))}
        </SafeAreaView>
    )
}