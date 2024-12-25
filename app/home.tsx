import { HeaderTitle } from "@react-navigation/elements"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View } from "react-native"
import { Text } from "@react-navigation/elements"
import { Container, LayoutContainer } from "@/components/Containers"
import { CategoryCard } from "@/components/CardUtilities"
import React from 'react'


const Welcome = () => (
  <Container>
    <HeaderTitle style={ style.helloText }>Hello,</HeaderTitle >
    <Text style={ style.nameText }>Atk1432</Text>
  </Container>
)

const Category = () => {
  const cards = [
    { name: 'Nhịp tim', icon: 'heart', number: 78, unit: 'bpm', color: 'red' },
    { name: 'Stress', icon: 'heart', number: 78, unit: 'bpm', color: 'green' }
  ]

  return (
    <Container title="Sức khỏe">
      <View style={{ 
        flexWrap: 'wrap', 
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}>
        { cards.map((card, index) => (
          <View 
            key={ index }
            style={{ 
              flex: 0.45,         
            }}
          >
            <CategoryCard 
              color={ card.color }
              icon={ card.icon }
              number={ card.number }
              unit={ card.unit }
            >
                { card.name }
            </CategoryCard>
          </View>
        )) }
      </View>
    </Container>
  )
}

export default function Home() {
  const navigation = useNavigation()

  return (
    <LayoutContainer>
      <Welcome />
      <Category />
    </LayoutContainer>
  )
}

const style = StyleSheet.create({
  nameText: {
    fontWeight: 'medium',
    fontSize: 28,
    marginTop: 8
  },
  helloText: {
    fontWeight: 'thin',
    fontSize: 22
  },
})
