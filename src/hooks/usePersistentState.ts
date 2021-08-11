import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function usePersistentState<T>(key: string, initalValue: T) {
    const [value, setValue] = useState(initalValue);
    useEffect(() => {
        AsyncStorage.getItem(key).then((storagedValue: string | null) => {
            if (storagedValue) {
                setValue(JSON.parse(storagedValue))
            }
        })
    }, []);

    const setPersistentState = async (newValue: T): Promise<void> => {
        await AsyncStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    };

    const checkPersistentState = async (): Promise<boolean> => {
        const data = await AsyncStorage.getItem(key);
        if (data) {
            return true;
        }
        return false;
    };

    return [value, setPersistentState, checkPersistentState] as const;
}