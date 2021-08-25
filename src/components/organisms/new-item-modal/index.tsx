import React, { useState } from 'react';
import { LayoutAnimation } from 'react-native';
import { useItems } from '../../../hooks';
import { Text, Input } from '../../atoms';
import { Button, Modal } from '../../molecules';



interface NewItemModalProps {
    modalVisible: boolean;
    toggleModal: () => void;
}


export function NewItemModal({ modalVisible, toggleModal }: NewItemModalProps) {
    const { createItem } = useItems();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const handleCreatePress = () => {
        setTitle('')
        setDescription('')
        createItem({ id: Math.random(), title, description, done: false })
        toggleModal()
    };

    return (
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
            <Button onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
                handleCreatePress()
            }}>
                Create item
            </Button>
        </Modal>
    )
}