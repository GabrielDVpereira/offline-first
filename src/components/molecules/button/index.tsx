import React, { ReactNode } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
    children: ReactNode;
    textStyles: Object;
    buttonStyles: Object;
}

export function Button({
    children,
    textStyles,
    buttonStyles,
    ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, buttonStyles]} {...rest}>
            <Text style={[styles.text, textStyles]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}