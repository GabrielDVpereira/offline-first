import React from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native'
import styles from './styles';

interface InputProps extends TextInputProps {
    inputStyle?: Object | Object[];
}

export function Input({ inputStyle, ...rest }: InputProps) {
    return <TextInput style={[styles.input, StyleSheet.flatten(inputStyle)]} {...rest} />
}