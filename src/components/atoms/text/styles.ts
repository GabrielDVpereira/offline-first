import { StyleSheet } from 'react-native'
import { MONTSERRAT_REGULAR, MONTSERRAT_SEMIBOLD } from '../../../constants';

const styles = StyleSheet.create({
    h1: {
        fontFamily: MONTSERRAT_SEMIBOLD,
        fontSize: 22,
    },
    h2: {
        fontFamily: MONTSERRAT_SEMIBOLD,
        fontSize: 18,
    },
    h3: {
        fontFamily: MONTSERRAT_SEMIBOLD,
        fontSize: 16,
    },
    p: {
        fontFamily: MONTSERRAT_REGULAR,
        fontSize: 14,
        lineHeight: 16
    }
});

export default styles;