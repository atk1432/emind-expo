import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "@/app/home"
import Stress from "./stress"

const Stack = createNativeStackNavigator()

export default function CategoryLayout() {
  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerTransparent: true
      // }}
    >
      <Stack.Screen 
        name="HomeMain" 
        component={ Home } 
        options={{ headerShown: false }} 
      />
      <Stack.Screen name="Căng thẳng" component={ Stress } />
    </Stack.Navigator>
  )
}