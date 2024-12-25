import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Home from '@/app/home'
import About from './about';


const Tabs = createBottomTabNavigator()
const tabBarIconSize = 15

export default function TabLayout() {
  return (
    <Tabs.Navigator 
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen 
        name="Home" 
        component={ Home }  
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen 
        name="About" 
        component={ About } 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    borderRadius: 20,
    borderTopWidth: 0,
    bottom: 10,
    position: 'absolute',
    backgroundColor: '#ededed'
  },
  tabBarIcon: {
    height: 10
  }
})