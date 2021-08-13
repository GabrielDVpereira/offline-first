import { StyleSheet } from 'react-native';
import { HEIGHT } from '../../constants';

const styles = StyleSheet.create({
    container: {},
    card: {
        marginBottom: 8
    },
    todoListContainer: {
        maxHeight: HEIGHT,
    },
    title: {
        alignSelf: 'center',
        marginBottom: 26
    },
    cardTitle: {
        marginBottom: 10
    },
    createButton: {
        position: 'absolute',
        bottom: 0,
        right: 20,
        width: 40,
        height: 40,
        borderRadius: 20
    }
})

export default styles;
