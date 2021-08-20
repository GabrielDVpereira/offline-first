import { StyleSheet } from 'react-native';
import { HEIGHT } from '../../constants';

const styles = StyleSheet.create({
    container: {},
    card: {
        marginBottom: 8
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
        paddingVertical: 0,
        paddingHorizontal: 0,
        width: 40,
        height: 40,
        borderRadius: 999,
    },
    createButtonText: {
        fontSize: 28,
    },
    emptyListContainer: { width: '100%', alignItems: 'center', marginTop: 100 },
    emptyListImage: { width: 300, height: 300 }
})

export default styles;
