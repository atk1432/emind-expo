import { Text } from "@react-navigation/elements"

export function CategoryTitle({ children }) {
  return (
    <Text style={{
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 20,
      marginBottom: 20
    }}>
      { children }
    </Text>
  )
}