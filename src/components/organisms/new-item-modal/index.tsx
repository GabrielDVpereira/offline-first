import React, { useState, useEffect } from 'react';
import { LayoutAnimation, Image } from 'react-native';
import { useItems } from '../../../hooks';
import { Text, Input } from '../../atoms';
import { Button, Modal } from '../../molecules';
import { Audio } from 'expo-av';

interface NewItemModalProps {
    modalVisible: boolean;
    toggleModal: () => void;
}


export function NewItemModal({ modalVisible, toggleModal }: NewItemModalProps) {
    const { createItem } = useItems();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [audioUri, setAudioUri] = useState('');
    const [recording, setRecording] = useState<Audio.Recording>();
    const [sound, setSound] = useState<Audio.Sound>();

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);



    const playAudio = async () => {
        const { sound } = await Audio.Sound.createAsync(
            { uri: audioUri }
        );
        setSound(sound);
        await sound.playAsync();
    }

    async function startRecording() {
        try {

            await Audio.setAudioModeAsync({
                allowsRecordingIOS: true,
                playsInSilentModeIOS: true,
            });
            console.log('Starting recording..');
            const { recording } = await Audio.Recording.createAsync(
                Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
            );
            setRecording(recording);
            console.log('Recording started');
        } catch (err) {
            console.error('Failed to start recording', err);
        }
    }

    async function stopRecording() {
        await recording?.stopAndUnloadAsync();
        const uri = recording?.getURI();
        setAudioUri(uri || '');
        setRecording(undefined);
        console.log('Recording stopped and stored at', uri);
    }


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
            <Button onPress={recording ? stopRecording : startRecording}>
                {recording ? 'Stop Record' : 'Record'}
            </Button>

            <Button onPress={playAudio}>
                Play audio
            </Button>

            <Button onPress={() => {
                LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
                handleCreatePress()
            }}>
                Create item
            </Button>
        </Modal>
    )
}