import React, { ReactNode } from 'react';
import { TextInput, TextInputProps } from 'react-native'
import styles from './styles';

interface InputProps extends TextInputProps {
    children: ReactNode;
    inputStyle: Object;
}

export function Input({ children, inputStyle, ...rest }: InputProps) {
    return <TextInput style={[styles.input, inputStyle]} {...rest} />
}