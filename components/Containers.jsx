import { Roboto, useFonts } from "@expo-google-fonts/inter"
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProviderCompat } from "@react-navigation/elements"
import { View } from "react-native";
import { useEffect } from "react";
import { CategoryTitle } from "./TextUtilities"
import React from "react";

SplashScreen.preventAutoHideAsync();

export function LayoutContainer({ children }) {
  const [ loaded, error ] = useFonts({
    Roboto
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <View
      style={{ 
        flex: 1, 
        padding: 40, 
        paddingLeft: 28,
        paddingRight: 28,
        backgroundColor: 'white',
      }}
    >
      { children }
    </View>
  )
}

export function Container({ title = '', children }) {
  const categoryTitle = title ? <CategoryTitle>{ title }</CategoryTitle> : "" 

  return (
    <>
      { categoryTitle }
      { children }
    </>
  )
}

export function CardListContainer({ children }) {
  return (
    <View>
      { children }
    </View>
  )
}