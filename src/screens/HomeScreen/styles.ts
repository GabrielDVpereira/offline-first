import { StyleSheet } from 'react-native';
import { HEIGHT } from '../../constants';

const styles = StyleSheet.create({
    container: {},
    card: {
        marginBottom: 8
    },
    todoListContainer: {
        height: HEIGHT * 0.5,
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
        paddingVertical: 10,
        paddingHorizontal: 10,
        right: 20,
    }
})

export default styles;
