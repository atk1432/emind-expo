import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "@/app/home"
import MindTest from "./mindTest"
import MindTestQuestions from "./mindTestQuestions"

const Stack = createNativeStackNavigator()

export default function CategoryLayout() {
  return (
    <Stack.Navigator screenOptions={{
      // headerShadowVisible: false
      headerTransparent: true,
      headerTitle: '',
      headerTitleAlign: 'center'
    }}>
      <Stack.Screen 
        name="HomeMain" 
        component={ Home } 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Stress" 
        component={ MindTest } 
        options={{ title: "" }} 
      />

      <Stack.Screen 
        name="StressTest" 
        component={ MindTestQuestions } 
        options={{ title: "Câu hỏi ", headerStyle: { backgroundColor: 'white' } }} 
      />
    </Stack.Navigator>
  )
}