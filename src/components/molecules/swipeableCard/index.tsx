import React, { ReactNode, useRef } from 'react';
import { Animated, Text } from 'react-native'
import { Card, CardProps } from '../../atoms';
import { RectButton, Swipeable } from "react-native-gesture-handler";

import styles from './styles'


interface SwipeableCardProps extends CardProps {
    onRightButtonPress: () => void;
    rightButtonContent: ReactNode;
    rightButtonContentStyle?: Object;
}

export function SwipeableCard({
    children,
    onRightButtonPress,
    rightButtonContent,
    rightButtonContentStyle,
    ...rest }: SwipeableCardProps) {
    const ref = useRef<Swipeable>(null);

    return (
        <Swipeable
            ref={ref}
            overshootRight={false}
            renderRightActions={() => (
                <Animated.View style={styles.rightButtonContainer}>
                    <RectButton style={[styles.rightButtonContent, rightButtonContentStyle]} onPress={() => {
                        ref.current?.close()
                        onRightButtonPress()
                    }}>
                        {rightButtonContent}
                    </RectButton>
                </Animated.View>
            )}
        >
            <Card {...rest}>
                {children}
            </Card>
        </Swipeable>
    )
}