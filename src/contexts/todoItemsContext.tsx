import React, { createContext, ReactNode, useEffect, useCallback } from 'react';
import { useConnectionInfo, usePersistentState } from '../hooks';
import { Item } from '../interfaces/item';
import * as ItemsService from '../services/items';


interface ItemContextInfo {
    items: Item[];
    createItem: (item: Item) => Promise<void>
}

interface ItemContextProps {
    children: ReactNode;
}

export const ItemContext = createContext<ItemContextInfo>({} as ItemContextInfo);

export default function ItemContextProvider({ children }: ItemContextProps) {
    const [items, setItems] = usePersistentState<Item[]>('@items', []);
    const [offlineItemsIds, setOfflineItemsIds] = usePersistentState<number[]>('@items:offline', []);
    const { isConnected } = useConnectionInfo();

    useEffect(() => {
        getItems()
    }, []);

    useEffect(() => {
        const shouldSyncDatabase = isConnected && offlineItemsIds.length;
        if (shouldSyncDatabase) {
            syncDatabase();
        }
    }, [isConnected]);

    const syncDatabase = async (): Promise<void> => {
        const offlineItems = items.filter(item => {
            if (item.offline) {
                delete item.offline
                return true;
            }
        })
        await ItemsService.syncItemsDatabase(offlineItems);
        const newItems = items.map(item => ({ ...item, offline: false }))
        setOfflineItemsIds([]);
        setItems(newItems);
    }

    const createItem = useCallback(async (item: Item): Promise<void> => {
        if (isConnected) {
            await ItemsService.createItem(item);
            setItems([...items, item]);
        } else {
            const offlineItem = {
                ...item,
                offline: true
            };
            setOfflineItemsIds([...offlineItemsIds, item.id]);
            setItems([...items, offlineItem]);
        }
    }, [setItems, setOfflineItemsIds])

    const getItems = async (): Promise<void> => {
        const { data } = await ItemsService.getItems();
        setItems(data);
    }

    return (
        <ItemContext.Provider value={{ items, createItem }}>
            {children}
        </ItemContext.Provider>
    )
}
