import React, { ReactNode } from 'react';
import { View } from 'react-native';
import styles from './styles';

export interface CardProps {
    children: ReactNode;
    cardStyles?: Object
}

export function Card({ children, cardStyles }: CardProps) {
    return (
        <View style={[styles.container, cardStyles]}>
            {children}
        </View>
    )
}