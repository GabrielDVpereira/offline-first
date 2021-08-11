import React, { useState } from 'react';
import styles from './styles';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useItems } from '../../hooks';

export function HomeScreen() {
    const { items, createItem } = useItems();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleCreatePress = () => {
        setTitle('')
        setDescription('')
        createItem({ id: Math.random(), title, description, done: false })
    };

    return (
        <SafeAreaView style={styles.container}>
            {items.map(item => (
                <View key={item.id} style={{ padding: 10 }}>
                    <Text>{item.title}</Text>
                    <Text>{item.description}</Text>
                    {item.offline ?
                        <View style={{ width: 10, height: 10, backgroundColor: 'red' }} /> :
                        <View style={{ width: 10, height: 10, backgroundColor: 'green' }} />}
                </View>
            ))}

            <View style={{ padding: 10 }}>
                <TextInput
                    placeholder="Item Title"
                    onChangeText={(text) => setTitle(text)}
                />
                <TextInput
                    placeholder="Item Description"
                    onChangeText={(text) => setDescription(text)}
                />
            </View>
            <TouchableOpacity onPress={handleCreatePress}>
                <Text>Create item</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}