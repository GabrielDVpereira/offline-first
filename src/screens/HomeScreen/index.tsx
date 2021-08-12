import React, { useState } from 'react';
import styles from './styles';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, FlatList } from 'react-native';
import { useItems } from '../../hooks';
import { BaseContainer, Card } from '../../components/atoms';

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
        <BaseContainer>
            <FlatList
                style={styles.todoListContainer}
                data={items}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Card cardStyles={styles.card}>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        {item.offline ?
                            <View style={{ width: 10, height: 10, backgroundColor: 'red' }} /> :
                            <View style={{ width: 10, height: 10, backgroundColor: 'green' }} />}
                    </Card>
                )}
            />


            <View style={{ padding: 10 }}>
                <TextInput
                    value={title}
                    placeholder="Item Title"
                    onChangeText={(text) => setTitle(text)}
                />
                <TextInput
                    value={description}
                    placeholder="Item Description"
                    onChangeText={(text) => setDescription(text)}
                />
            </View>
            <TouchableOpacity onPress={handleCreatePress}>
                <Text>Create item</Text>
            </TouchableOpacity>
        </BaseContainer>
    )
}