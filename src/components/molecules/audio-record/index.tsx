import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '../../atoms';
import { Audio } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { GRAY, PRIMARY } from '../../../constants';


export function AudioRecord() {
    const [sound, setSound] = useState<Audio.Sound>();
    const [recording, setRecording] = useState<Audio.Recording>();
    const [audioUri, setAudioUri] = useState('');


    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, []);

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


    return (
        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
                onPress={recording ? stopRecording : startRecording}
            >
                <AntDesign name="play" size={40} color={recording ? PRIMARY : GRAY} />
            </TouchableOpacity>

            {!!audioUri && <TouchableOpacity
                onPress={playAudio}
            >
                <Text >Play Audio</Text>
            </TouchableOpacity>}
        </View>
    )
}