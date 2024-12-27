import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProviderCompat } from "@react-navigation/elements"
import { StyleSheet, View, ViewStyle } from "react-native";
import { useEffect } from "react";
import { CategoryTitle } from "./TextUtilities"
import React, { ReactElement, ReactNode } from "react";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


SplashScreen.preventAutoHideAsync();

export function LayoutContainer(
  { children, style, safeArea = true } : 
  { children?: ReactNode, style?: ViewStyle, safeArea?: boolean }
) : ReactElement {
  const _styles = StyleSheet.create({
    layoutStyle: {
      flex: 1, 
      padding: 10, 
      paddingLeft: 8,
      paddingRight: 8,
      // backgroundColor: 'rgba(234, 234, 234, 0.2)',
    } 
})

  if (safeArea)
    return (
      <SafeAreaProvider>
        <SafeAreaView
          style={ [_styles.layoutStyle, style] }
        >
          { children }
        </SafeAreaView>
      </SafeAreaProvider>
    )
  else 
    return (
      <View style={ [_styles.layoutStyle, style] }>
        { children }
      </View>
    )
}

export function Container(
  { title='', children, style } : 
  { title?: string, children : ReactNode, style?: ViewStyle }
) {
  var categoryTitle : ReactNode
  if (title) 
    categoryTitle = (<CategoryTitle>{ title }</CategoryTitle>)

  return (
    <View style={[{ 
      marginTop: 15,
      borderRadius: 10,
      backgroundColor: 'white',
      padding: 14,
      paddingTop: 18,
      paddingBottom: 18,
    }, style]}>
      { categoryTitle }
      { children }
    </View>
  )
} 

export function CardListContainer(
  { children } : { children : ReactNode }
) {
  return (
    <View>
      { children }
    </View>
  )
}

