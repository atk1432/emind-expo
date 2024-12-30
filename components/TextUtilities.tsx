import { Text } from "@react-navigation/elements"
import { Inter_600SemiBold, useFonts } from '@expo-google-fonts/inter'
import * as SplashScreen from 'expo-splash-screen';
import { ReactNode, useEffect } from "react";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

SplashScreen.preventAutoHideAsync();

export function _Text(
  { style = {}, children } : 
  { children?: ReactNode, style?: TextStyle[] | TextStyle | undefined }
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

export function NotificationText(
  { children, level, style } : 
  { children?: ReactNode, level: number, style?: TextStyle | TextStyle[] | any }
) {
  const _style = StyleSheet.create({
    illnessText: {
      color: 'green'
    },
    moderateText: {
      color: 'orange'
    },
    seriousText: {
      color: 'red'
    }
  })

  const styleTexts : TextStyle[] = [
    _style.illnessText, 
    _style.moderateText, 
    _style.seriousText
  ]

  const styleText = styleTexts[level]

  return (
    <_Text style={[ styleText, style ]}>
      { children }
    </_Text>
  )
}
