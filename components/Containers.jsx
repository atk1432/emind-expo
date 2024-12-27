import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProviderCompat } from "@react-navigation/elements"
import { View } from "react-native";
import { useEffect } from "react";
import { CategoryTitle } from "./TextUtilities"
import React from "react";

SplashScreen.preventAutoHideAsync();

export function LayoutContainer({ children, marginTop = 0 }) {
  return (
    <View
      style={{ 
        flex: 1, 
        padding: 10, 
        paddingLeft: 8,
        paddingRight: 8,
        backgroundColor: 'rgba(234, 234, 234, 0.2)',
        marginTop: `${marginTop}px`
      }}
    >
      { children }
    </View>
  )
}

export function Container({ title='', children }) {
  var categoryTitle = ''
  if (title) 
    categoryTitle = (<CategoryTitle>{ title }</CategoryTitle>)

  return (
    <View style={{ 
      marginTop: 15,
      borderRadius: 10,
      backgroundColor: 'white',
      padding: 14,
      paddingTop: 18,
      paddingBottom: 18
    }}>
      { categoryTitle }
      { children }
    </View>
  )
} 

export function CardListContainer({ children }) {
  return (
    <View>
      { children }
    </View>
  )
}