import React, {useState} from 'react'; 
import { View, LayoutAnimation, TouchableOpacity, Text } from 'react-native'; 
import { HEIGHT, PRIMARY, SECONDARY, WHITE, WIDTH } from '../../../constants';
import styles from './styles'; 

export function FloatingButtonPage(){
    const [visible, setVisible] = useState(false); 

    const renderFormPage = () => {
        return (
            <View style={styles.pageContainer}>
                <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                    setVisible(false)
                }}
                >
                    <Text
                        style={styles.buttonText}
                    >
                    Close
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
    const renderButton = () => {
        return (
            <TouchableOpacity 
                onPress={() =>{
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                    setVisible(true)
                    }}
                style={styles.floatingButton}
            >
                <Text
                    style={{color: WHITE}}
                >
                    +
                </Text>
            </TouchableOpacity>
        );
    }

    return (
        <View
            style={visible ? styles.containerActive : styles.containerInactive}
        >
           { visible ? renderFormPage() : renderButton()}
        </View>
    );

}