import React, { ReactNode } from 'react';
import { Text as RnText, TextProps, StyleSheet } from 'react-native';
import styles from './styles';

interface Props extends TextProps {
    children: ReactNode
    textStyle?: Object;
    type?: 'h1' | 'h2' | 'h3' | 'p';
}

type CustomTextProps = Omit<Props, 'style'>

export function Text({ children, textStyle, type = 'p', ...rest }: CustomTextProps) {
    return (
        <RnText style={[styles[type], StyleSheet.flatten(textStyle)]} {...rest}>
            {children}
        </RnText>
    )
}