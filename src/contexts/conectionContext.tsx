import React, { useState } from 'react';
import { createContext, ReactNode, useEffect } from 'react';
import NetInfo, { NetInfoStateType } from "@react-native-community/netinfo";

interface ConectionInfo {
    isConnected: boolean | null;
    type: NetInfoStateType;
}

interface ConectionInfoProps {
    children: ReactNode;
}

export const ConectionContext = createContext<ConectionInfo>({} as ConectionInfo);

export default function ConectionContextProvider({ children }: ConectionInfoProps) {
    const [connectionInfo, setConnectionInfo] = useState<ConectionInfo>({} as ConectionInfo)

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setConnectionInfo({
                isConnected: state.isConnected,
                type: state.type
            })
        });
        () => unsubscribe();
    }, [])

    return (
        <ConectionContext.Provider value={connectionInfo}>
            {children}
        </ConectionContext.Provider>
    )
}