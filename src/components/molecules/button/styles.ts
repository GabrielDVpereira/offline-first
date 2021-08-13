import { StyleSheet } from 'react-native';
import { MONTSERRAT_SEMIBOLD, SECONDARY, WHITE } from '../../../constants';

const styles = StyleSheet.create({
    button: {
        backgroundColor: SECONDARY,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    text: {
        color: WHITE,
    }
})

export default styles