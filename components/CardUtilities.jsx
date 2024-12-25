import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from "react-native";
import { Text } from "@react-navigation/elements";
import gbStyle from "./styles/globalStyle"
import { StyleSheet } from 'react-native';

export function CategoryCard({ 
  color = 'black', 
  icon = '',
  number = 0,
  unit = '',
  children 
}) {
  const style = StyleSheet.create({
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: `${color}`
    }
  })

  const bgColor = {
    'red': 'rgba(255, 0, 0, 0.2)',
    'green': 'rgba(0, 255, 0, 0.2)'
  }[color]

  return (
    <View 
      style={{
        padding: 10,
        backgroundColor: `${bgColor}`,
        borderRadius: 10,
        aspectRatio: 1
      }}
    >
      <Text style={ style.headerText }>
        <Ionicons name='heart' />
        { children }
      </Text>
      <Text style={ style.headerText }>
        { number }
        <Text>{ unit }</Text>
      </Text>
    </View>
  )
}


