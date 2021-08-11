import React from 'react';
import { HomeScreen } from './src/screens/HomeScreen';
import { ConectionContextProvider, ItemContextProvider } from './src/contexts';

export default function App() {
  return (
    <ConectionContextProvider>
      <ItemContextProvider>
        <HomeScreen />
      </ItemContextProvider>
    </ConectionContextProvider>
  );
}

