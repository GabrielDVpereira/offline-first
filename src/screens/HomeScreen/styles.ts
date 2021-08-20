import { StyleSheet } from 'react-native';
import { HEIGHT, RED } from '../../constants';

const styles = StyleSheet.create({
    container: {},
    card: {
        marginBottom: 8,
        position: 'relative',
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
    emptyListImage: { width: 300, height: 300 },
    offlineIndicator: { backgroundColor: RED, width: 10, height: 10, position: 'absolute', borderRadius: 10, right: 10, top: 10 }
})

export default styles;
