import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';


export async function requestPermissions() {
    const audioPermission = await Audio.requestPermissionsAsync();
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted' && !audioPermission.granted) {
        alert('Sorry, we need permissions to make this work!');
    }
}