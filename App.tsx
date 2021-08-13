import React from 'react';
import { HomeScreen } from './src/screens/HomeScreen';
import { ConectionContextProvider, ItemContextProvider } from './src/contexts';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';


export default function App() {

  const [fontsLoaded] = useFonts({
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ConectionContextProvider>
      <ItemContextProvider>
        <HomeScreen />
      </ItemContextProvider>
    </ConectionContextProvider>
  );
}

