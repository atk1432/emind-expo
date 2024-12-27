import { useNavigation } from "@react-navigation/native"
import { View, Text } from "react-native"
// import { useCameraPermission, useCameraDevice } from "react-native-vision-camera"

export default function HeartRate() {
  const navigation = useNavigation()
  // const device = useCameraDevice('back')
  // const { hasPermission, requestPermission } = useCameraPermission()

  // if (!hasPermission) navigation.navigate('About')
  // if (device == null) return <NoCameraDeviaceError />

  return (
    // <Camera
    //   style={StyleSheet.absoluteFill}
    //   device={device}
    //   isActive={true}
    // />
    <View>
      <Text>Heart rate</Text>
    </View>
  )
}