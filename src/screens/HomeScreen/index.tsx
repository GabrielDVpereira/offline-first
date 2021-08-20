import React, { useState } from 'react';
import styles from './styles';
import { FlatList, LayoutAnimation, Image, View } from 'react-native';
import { BaseContainer, Text, Input } from '../../components/atoms';
import { Button, Modal, SwipeableCard } from '../../components/molecules';
import { useItems } from '../../hooks';
import { Feather } from "@expo/vector-icons";
import { RED, WHITE } from '../../constants';
import emptyImage from '../../assets/images/empty.png';


export function HomeScreen() {
    const { items, createItem, deleteItem } = useItems();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [modalVisible, setModalVisible] = useState(false);


    const toggleModal = () => setModalVisible(oldState => !oldState);

    const handleCreatePress = () => {
        setTitle('')
        setDescription('')
        createItem({ id: Math.random(), title, description, done: false })
        toggleModal()
    };

    return (
        <BaseContainer >
            <Text type="h2" textStyle={styles.title}>Offline First Todo List ✨</Text>
            <FlatList
                data={items}
                ListEmptyComponent={
                    <View style={styles.emptyListContainer}>
                        <Image source={emptyImage} resizeMode="cover" style={styles.emptyListImage} />
                    </View>
                }
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <SwipeableCard
                        onRightButtonPress={() => {
                            LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
                            deleteItem(item.id)
                        }}
                        rightButtonContent={
                            <Feather name="trash" size={28} color={WHITE} />
                        }
                        rightButtonContentStyle={{ backgroundColor: RED }}
                        cardStyles={styles.card}
                    >
                        {item.offline && <View style={styles.offlineIndicator} />}
                        <Text type="h3" textStyle={styles.cardTitle}>{item.title}</Text>
                        <Text>{item.description}</Text>
                    </SwipeableCard>
                )}
            />


            <Modal visible={modalVisible} toggle={toggleModal}>
                <Text>New Item</Text>
                <Input
                    value={title}
                    placeholder="Item Title"
                    onChangeText={(text) => setTitle(text)}
                />
                <Input
                    value={description}
                    placeholder="Item Description"
                    onChangeText={(text) => setDescription(text)}
                />
                <Button onPress={() => {
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear)
                    handleCreatePress()
                }}>
                    Create item
                </Button>
            </Modal>

            <Button onPress={toggleModal} buttonStyle={styles.createButton} textStyle={styles.createButtonText}>
                +
            </Button>
        </BaseContainer >
    )
}