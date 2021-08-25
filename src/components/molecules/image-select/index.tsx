import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { BLACK, PRIMARY } from '../../../constants';
import { Text } from '../../atoms';

interface ImageSelectProps {
    onImageSelected?: (imageUri: string) => void;
}

export function ImageSelect({ onImageSelected }: ImageSelectProps) {
    const [imageUri, setImageUri] = useState('');

    const handleImageSelect = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
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
        >
            <FontAwesome
                name="image"
                siz={24}
                color={imageUri ? PRIMARY : BLACK}
            />
            {imageUri && <Text>Edit</Text>}
        </TouchableOpacity>
    )
}