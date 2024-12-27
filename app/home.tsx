import { HeaderTitle } from "@react-navigation/elements"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View, ImageBackground, Image, Dimensions } from "react-native"
import { Text } from "@react-navigation/elements"
import { _Text } from "@/components/TextUtilities"
import { Container, LayoutContainer } from "@/components/Containers"
import { CategoryCard } from "@/components/CardUtilities"
import React from 'react'
import { Ionicons, FontAwesome6 } from "@expo/vector-icons"
const BackgroundImg = require("@/assets/images/bg.jpg")
const UserImg = require("@/assets/images/user.jpg")


const Welcome = () => (
  <ImageBackground 
    source={ BackgroundImg } 
    resizeMode='cover'
    imageStyle={{ 
      borderRadius: 10,
      width: Dimensions.get('window').width - 18
    }}
    style={{
      alignSelf: 'stretch',
      padding: 10,
      paddingLeft: 18,
      paddingRight: 18,
    }}
  >
    <View style={{ 
      justifyContent: 'space-between', 
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 12,
      marginBottom: 16
    }}>
      <FontAwesome6 name="bars-staggered" size={24} color="white" />
      <Image 
        source={ UserImg } 
        resizeMode="cover" 
        style={{ 
          width: 40, 
          height: 40,
          overflow: 'hidden',
          borderRadius: 100 
        }} 
      />
    </View>
    <_Text style={ style.helloText }>Xin chào,</_Text>
    <_Text style={ style.nameText }>Atk1432</_Text>
  </ImageBackground>
)

const Category = () => {
  const cards = [
    { 
      name: 'Bài test trầm cảm', 
      describe: 'đây là 1 bài test trầm cảm',
      link: '',
      img: require("@/assets/images/categories/depression.jpg")
    },
    { 
      name: 'Bài test stress', 
      describe: 'đây là 1 bài test stress',
      link: 'Stress',
      img: require("@/assets/images/categories/stress.jpg")
    }
  ]

  return (
    <Container title="Bài kiểm tra tâm lí">
      <View style={{ 
        flexWrap: 'wrap', 
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
        justifyContent: 'space-between'
      }}>
        { cards.map((card, index) => (
          <CategoryCard
            key={ index }
            img={ card.img }
            link={ card.link }
            describe={ card.describe }
          >
            { card.name }
          </CategoryCard>
        )) }
      </View>
    </Container>
  )
}

const Guide = () => {
  return (
    <Container title="Hướng dẫn">
      <_Text>sdfsd</_Text>
    </Container>
  )
}

export default function Home() {
  const navigation = useNavigation()

  return (
    <LayoutContainer>
      <Welcome />
      <Category />
      <Guide />
    </LayoutContainer>
  )
}

const style = StyleSheet.create({
  nameText: {
    fontWeight: 'medium',
    fontSize: 28,
    marginTop: 8,
    marginBottom: 12,
    color: 'white'
  },
  helloText: {
    fontWeight: 'thin',
    fontSize: 18,
    color: 'white'
  },
})
