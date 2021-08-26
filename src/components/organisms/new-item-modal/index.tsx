import React, { useState, useEffect } from 'react';
import { LayoutAnimation, Image, View } from 'react-native';
import { useItems } from '../../../hooks';
import { Text, Input } from '../../atoms';
import { Button, Modal, ImageSelect } from '../../molecules';
import { Audio } from 'expo-av';
import { AudioRecord } from '../../molecules/audio-record';

interface NewItemModalProps {
    modalVisible: boolean;
    toggleModal: () => void;
}


export function NewItemModal({ modalVisible, toggleModal }: NewItemModalProps) {
    const { createItem } = useItems();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageUri, setImageUri] = useState('');
    const [audioUri, setAudioUri] = useState('');


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

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <ImageSelect
                    onImageSelected={(uri) => {
                        setImageUri(uri);
                    }}
                />
                <AudioRecord />
            </View>

            <Button onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
                handleCreatePress()
            }}>
                Create item
            </Button>
        </Modal>
    )
}