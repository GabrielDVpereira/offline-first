import React, { ReactNode } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface BadgeProps {
    children: ReactNode
    badgeStyle: Object;
    textStyle: Object;
}

export function Badge({ children, badgeStyle, textStyle }: BadgeProps) {
    return (
        <View style={[styles.badge, badgeStyle]}>
            <Text style={[styles.text, textStyle]}>{children}</Text>
        </View>
    )
}