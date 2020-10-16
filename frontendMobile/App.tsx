import React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import { Nunito_600SemiBold, Nunito_700Bold, Nunito_800ExtraBold } from '@expo-google-fonts/nunito';

import mapMarker from './src/images/map-marker.png';
import Routes from './src/routes';

export default function App() {
   const [fontsLoaded] = useFonts({
      n6: Nunito_600SemiBold,
      n7: Nunito_700Bold,
      n8: Nunito_800ExtraBold
   });

   if (!fontsLoaded) {
      return <Text>Carregando...</Text>
   }

   return (
      <Routes />
   );
}
