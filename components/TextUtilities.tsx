import { Text } from "@react-navigation/elements"
import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen';
import { ReactNode, useEffect } from "react";
import { TextStyle, ViewStyle } from "react-native";

SplashScreen.preventAutoHideAsync();

export function _Text(
  { style = {}, children } : { children?: ReactNode, style?: TextStyle }
) {
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

  return <Text style={[{ fontFamily: 'Inter_600SemiBold' }, style ]}>
    { children }
  </Text>
} 

export function CategoryTitle({ children } : { children?: ReactNode }) {

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
