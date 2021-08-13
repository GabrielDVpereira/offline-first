import React, { ReactNode, useState, useRef } from 'react';
import { useEffect } from 'react';
import { TouchableOpacity, TouchableWithoutFeedback, Animated, View } from 'react-native';
import { GRAY, HEIGHT, LIGHT_BLACK, WHITE, WIDTH } from '../../../constants';

interface ModalProps {
    children: ReactNode;
    visible: boolean;
    toggle?: () => void
}

export function Modal({ children, visible, toggle }: ModalProps) {
    const modalAnimation = useRef(new Animated.Value(0)).current;
    const translateY = modalAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [90, 0]
    })
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (visible) {
            openModal()
        } else {
            closeModal()
        }
    }, [visible]);

    const openModal = () => {
        setOpen(true);
        Animated.timing(modalAnimation, {
            duration: 300,
            toValue: 1,
            useNativeDriver: true
        }).start()
    }

    const closeModal = () => {
        Animated.timing(modalAnimation, {
            duration: 300,
            toValue: 0,
            useNativeDriver: true
        }).start(() => {
            setOpen(false);
        })
    }

    if (!open) {
        return <View />
    }
    return (
        <TouchableOpacity
            style={{ width: WIDTH, height: HEIGHT, position: 'absolute', backgroundColor: LIGHT_BLACK }}
            activeOpacity={1}
            onPress={toggle}
        >
            <TouchableWithoutFeedback>
                <Animated.View
                    style={{
                        backgroundColor: WHITE,
                        margin: 10, padding: 22,
                        borderRadius: 10,
                        transform: [{ translateY }],
                        opacity: modalAnimation,
                        marginTop: HEIGHT * 0.15
                    }}>{children}</Animated.View>
            </TouchableWithoutFeedback>
        </TouchableOpacity>
    )
}