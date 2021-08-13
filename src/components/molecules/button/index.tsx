import React, { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import styles from './styles';
import { Text } from '../../atoms'

interface Props extends TouchableOpacityProps {
    children: ReactNode;
    textStyle?: Object;
    buttonStyle?: Object;
}

type ButtonProps = Omit<Props, 'style'>

export function Button({
    children,
    textStyle,
    buttonStyle,
    ...rest }: ButtonProps) {
    return (
        <TouchableOpacity style={[styles.button, buttonStyle]} {...rest}>
            <Text type="h3" textStyle={[styles.text, textStyle]}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}