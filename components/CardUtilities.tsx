import Ionicons from '@expo/vector-icons/Ionicons';
import { View, TouchableOpacity, Image } from "react-native";
import { Text } from "@react-navigation/elements";
import { _Text } from './TextUtilities';
import gbStyle from "./styles/globalStyle"
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

export function CategoryCard({ 
  describe = '',
  img, link = '',
  children 
}) {
  const style = StyleSheet.create({
    headerText: {
      fontSize: 15,
      fontWeight: '700'
    },
    describeText: {
      fontSize: 12, 
      // opacity: 0.6,
      marginTop: 5
    }
  })

  const navigation = useNavigation()

  return (
    <TouchableOpacity 
      style={{
        padding: 2,
        backgroundColor: 'rgb(255, 248, 248)',
        borderRadius: 10,
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
      }}
      onPress={() => navigation.navigate(link)}
    >
      <Image 
        source={ img } 
        resizeMode='cover'
        style={{
          width: 70,
          height: 70,
          borderRadius: 10
        }}
      />
      <View style={{ padding: 8, paddingLeft: 10 }}>
        <_Text style={ style.headerText }>
          { children }
        </_Text>
        <_Text style={ style.describeText }>
          { describe }
        </_Text>
      </View>
      <Ionicons 
        name='ellipsis-horizontal-sharp' 
        size={20} 
        style={{ position: 'absolute', right: 5 }} 
      />
    </TouchableOpacity>
  )
}


