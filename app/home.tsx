import { HeaderTitle } from "@react-navigation/elements"
import { useNavigation } from "@react-navigation/native"
import { StyleSheet, View, ImageBackground, Image, Dimensions, TouchableOpacity } from "react-native"
import { _Text } from "@/components/TextUtilities"
import { Container, LayoutContainer } from "@/components/Containers"
import { CategoryCard } from "@/components/CardUtilities"
import React from 'react'
import { FontAwesome6 } from "@expo/vector-icons"
import { ScrollView } from "react-native"
const BackgroundImg = require("@/assets/images/bg.jpg")
const UserImg = require("@/assets/images/tlu.png")


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
    {/* <_Text style={ style.helloText }>Xin chào,</_Text> */}
    <_Text style={ style.nameText }>Xin chào</_Text>
  </ImageBackground>
)

const Category = () => {
  const cards = [
    { 
      name: 'Mức độ căng thẳng', 
      describe: 'kiểm tra mức độ stress của bạn',
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

const Feature = () => {
  const featureLinks = [
    { text: "Đo nhịp tim", image: require("@/assets/images/features/heart_rate.jpg") },
    { text: "DeepFace", image: require("@/assets/images/features/face_recognition.jpg") }
  ]

  return (
    <Container title="Tính năng">
      <ScrollView horizontal style={[ style.padContent ]}>
        { featureLinks.map((link) => (
          <TouchableOpacity style={{
            width: 80, height: 80,
            justifyContent: 'center',
            flexDirection: 'column',
            marginLeft: 10, marginRight: 10, padding: 5
          }}>
            <Image 
              source={ link.image } 
              style={{
                width: '80%',
                height: '80%',
                borderWidth: 1,
                borderRadius: 20,
                backgroundColor: '#333'
              }} 
            />
            <_Text style={{
              fontSize: 12
            }}>{ link.text }</_Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </Container>
  )
}

const Service = () => {
  const services = [
    { name: 'Tư vấn', image: require("@/assets/images/services/advise.png") },
    { name: 'Hỗ trợ', image: require("@/assets/images/services/support.png") },
  ]

  return (
    <Container title="Dịch vụ">
      <ScrollView horizontal style={ style.padContent } showsHorizontalScrollIndicator={false}>
        { services.map((service) => (
          <TouchableOpacity style={{
            width: 90, height: 120, 
            borderRadius: 10, marginLeft: 5, marginRight: 5,
            justifyContent: 'center', padding: 8,
            alignItems: 'center', backgroundColor: 'rgb(238, 254, 243)'
          }}>
            <Image 
              source={ service.image } 
              resizeMode="cover"
              style={{
                width: '70%', height: '70%'
              }}
            />
            <_Text style={{ 
              zIndex: 10, textAlign: 'center', 
              marginTop: 5,
              marginBottom: 5
            }}>{ service.name }</_Text>
          </TouchableOpacity>
        )) }
      </ScrollView>
    </Container>
  )
}

export default function Home() {
  const navigation = useNavigation()

  return (
    <ScrollView>
      <LayoutContainer>
        <Welcome />
        <Feature />
        <Category />
        <Service />
      </LayoutContainer>
    </ScrollView>
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
  logo: {
    width: 20,
    height: 20
  },
  padContent: {
    paddingLeft: 8,
    paddingRight: 8,
  }
})
