import { StyleSheet } from 'react-native';
import { BLACK, WHITE } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        borderRadius: 5,
        padding: 16,
        backgroundColor: WHITE,
        shadowColor: BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    }
});

export default styles;