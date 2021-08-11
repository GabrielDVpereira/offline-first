import React, { createContext, ReactNode, useEffect } from 'react';
import { useConnectionInfo, usePersistentState } from '../hooks';
import * as ItemsService from '../services/items';

interface Item {
    id: number;
    title: string;
    description: string;
    done: boolean
}

interface ItemContextProps {
    children: ReactNode;
}

export const ItemContext = createContext<Item[]>([] as Item[]);

export default function ItemContextProvider({ children }: ItemContextProps) {
    const [items, setItems] = usePersistentState<Item[]>('@items', []);
    const { isConnected } = useConnectionInfo();

    console.log(items);
    useEffect(() => {
        getItems()
    }, []);

    const getItems = async () => {
        const { data } = await ItemsService.getItem();
        setItems(data);
    }
    return (
        <ItemContext.Provider value={[]}>
            {children}
        </ItemContext.Provider>
    )
}
