import React, {useState} from 'react'; 
import { View, LayoutAnimation, TouchableOpacity, Text } from 'react-native'; 
import { HEIGHT, PRIMARY, SECONDARY, WHITE, WIDTH } from '../../../constants';

export function FloatingButtonPage(){
    const [visible, setVisible] = useState(false); 

    const renderFormPage = () => {
        return (
            <View style={{backgroundColor: WHITE, width: '100%', height: '100%', 
            justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity
                style={{
                    backgroundColor: SECONDARY, 
                    padding: 10, 
                    borderRadius: 10, 
                    marginTop: 10,
                }}
                onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
                    setVisible(false)
                }}
                >
                    <Text
                        style={{color: WHITE, fontSize: 20}}
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
                style={{
                    width: '100%', 
                    height: '100%', 
                    borderRadius: 50, 
                    backgroundColor: PRIMARY,
                    justifyContent: 'center', 
                    alignItems: 'center',
                   
                }}
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
            style={visible ? {
                position: 'absolute', width: WIDTH, height: HEIGHT,
            } : { 
                position: 'absolute',
                width: 50, 
                height: 50,
                bottom: 10, 
                right: 10
             }}
        >
           { visible ? renderFormPage() : renderButton()}
        </View>
    );

}