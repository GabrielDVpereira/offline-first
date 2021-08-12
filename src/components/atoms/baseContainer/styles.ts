import { StyleSheet } from 'react-native';
import { BACKGROUND, HEIGHT } from '../../../constants';

const styles = StyleSheet.create({
    container: {
        backgroundColor: BACKGROUND,
        height: HEIGHT,
        flex: 1,
    },
    content: {
        padding: 32,
    }
});

export default styles;