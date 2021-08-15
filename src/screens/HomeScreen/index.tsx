import React, { useState } from 'react';
import styles from './styles';
import { FlatList } from 'react-native';
import { BaseContainer, Card, Text, Input } from '../../components/atoms';
import { Button, Modal } from '../../components/molecules';
import { useItems } from '../../hooks';

export function HomeScreen() {
    const { items, createItem } = useItems();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [modalVisible, setModalVisible] = useState(false);


    const toggleModal = () => setModalVisible(oldState => !oldState);

    const handleCreatePress = () => {
        setTitle('')
        setDescription('')
        createItem({ id: Math.random(), title, description, done: false })
        toggleModal()
    };

    return (
        <BaseContainer >
            <Text type="h2" textStyle={styles.title}>Offline First Todo List ✨</Text>
            <FlatList
                contentContainerStyle={{ flex: 1 }}
                style={styles.todoListContainer}
                data={items}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <Card cardStyles={styles.card}>
                        <Text type="h3" textStyle={styles.cardTitle}>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </Card>
                )}
            />


            <Modal visible={modalVisible} toggle={toggleModal}>
                <Text>New Item</Text>
                <Input
                    value={title}
                    placeholder="Item Title"
                    onChangeText={(text) => setTitle(text)}
                />
                <Input
                    value={description}
                    placeholder="Item Description"
                    onChangeText={(text) => setDescription(text)}
                />
                <Button onPress={handleCreatePress}>
                    Create item
                </Button>
            </Modal>

            <Button onPress={toggleModal} buttonStyle={styles.createButton}>
                +
            </Button>
        </BaseContainer>
    )
}