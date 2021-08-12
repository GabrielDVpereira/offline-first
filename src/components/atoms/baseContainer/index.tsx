import React, { ReactNode } from 'react';
import { SafeAreaView, View } from 'react-native';
import containerStyles from './styles';

interface BaseContainerProps {
    children: ReactNode;
    style?: Object
}

export function BaseContainer({ children, style }: BaseContainerProps) {
    return (
        <SafeAreaView style={[containerStyles.container, style]}>
            <View style={containerStyles.content}>
                {children}
            </View>
        </SafeAreaView>
    )
}