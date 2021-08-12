import React, { ReactNode } from 'react';
import { Text as RnText, TextProps } from 'react-native';
import styles from './styles';

interface Props extends TextProps {
    children: ReactNode
    textStyle: Object
}

export function Text({ children, textStyle, ...rest }: Props) {
    return (
        <RnText style={[styles.container, textStyle]} {...rest}>
            {children}
        </RnText>
    )
}