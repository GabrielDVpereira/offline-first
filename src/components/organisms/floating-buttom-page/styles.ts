import { StyleSheet } from 'react-native'; 
import { HEIGHT, PRIMARY, SECONDARY, WHITE, WIDTH } from '../../../constants';

const styles = StyleSheet.create({
        containerActive: {
            position: 'absolute', width: WIDTH, height: HEIGHT,
        }, 
        containerInactive: { 
            position: 'absolute',
            width: 50, 
            height: 50,
            bottom: 10, 
            right: 10
         }, 
        pageContainer: {backgroundColor: WHITE, width: '100%', height: '100%', 
        justifyContent: 'center', alignItems: 'center'}, 
        closeButton: {
            backgroundColor: SECONDARY, 
            padding: 10, 
            borderRadius: 10, 
            marginTop: 10,
        },
        buttonText: {color: WHITE, fontSize: 20}, 
        floatingButton: {
            width: '100%', 
            height: '100%', 
            borderRadius: 50, 
            backgroundColor: PRIMARY,
            justifyContent: 'center', 
            alignItems: 'center',
           
        }

}); 

export default styles; 