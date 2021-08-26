import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { GRAY, PRIMARY } from '../../../constants';
import { Text } from '../../atoms';
import styles from './styles';

interface ImageSelectProps {
    onImageSelected?: (imageUri: string) => void;
}

export function ImageSelect({ onImageSelected }: ImageSelectProps) {
    const [imageUri, setImageUri] = useState('');

    const handleImageSelect = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImageUri(result.uri);
            onImageSelected && onImageSelected(result.uri);
        }
    }

    return (
        <TouchableOpacity
            onPress={handleImageSelect}
            style={styles.galeryButton}
        >
            <Feather
                name="image"
                size={50}
                color={imageUri ? PRIMARY : GRAY}
            />
            {!!imageUri && <Text textStyle={styles.edit}>Edit</Text>}
        </TouchableOpacity>
    )
}