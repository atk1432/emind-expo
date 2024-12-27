import { Octicons, Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, StyleSheet } from 'react-native';
import CategoryLayout from '@/app/categories/_layout'
import { StatusBar } from 'expo-status-bar';
import Home from '@/app/home'
import About from './about';
import React from 'react';


const Tabs = createBottomTabNavigator()
const tabBarIconSize = 15

export default function TabLayout() {
  return (<>
    <StatusBar hidden={false} backgroundColor='rgb(162, 162, 162)' />
    <Tabs.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen 
        name="Home" 
        component={ CategoryLayout }  
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="home" size={24} color="black" />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen 
        name="Search" 
        component={ About } 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="search" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen 
        name="Heart" 
        component={ About } 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Octicons name="heart" size={24} color="black" />
          )
        }}
      />
      <Tabs.Screen 
        name="User" 
        component={ About } 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={24} color="black" />
          )
        }}
      />
    </Tabs.Navigator>
  </>);
}

const styles = StyleSheet.create({
  tabBar: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgb(241, 239, 239)',
    position: 'absolute',
    marginLeft: (Dimensions.get('window').width / 2) - 350/2,
    width: 350,
    paddingTop: 8,
  },
  tabBarIcon: {
    height: 10
  }
})