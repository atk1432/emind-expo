import { Text } from "@react-navigation/elements"
import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export function _Text({ style = {}, children }) {
  const [ loaded, error ] = useFonts({
    Inter_600SemiBold
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Text style={{ fontFamily: 'Inter_600SemiBold', ...style }}>
    { children }
  </Text>
} 

export function CategoryTitle({ children }) {
  return (
    <_Text style={{
      fontWeight: 600,
      fontSize: 15,
      marginBottom: 10
    }}>
      { children }
    </_Text>
  )
}
