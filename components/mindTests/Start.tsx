import { LayoutContainer } from "../Containers"
import { Image } from "react-native"
import { Container } from "../Containers"
import { _Text } from "../TextUtilities"
import { StyleSheet } from "react-native"
import { Button } from "@react-navigation/elements"
import { getImg } from "./utilities"
import React from "react"
import { useNavigation } from "@react-navigation/native"


export default function StartTest(
  { describe = '', img = 'Stress', link = '' } :
  { describe: string, img: string, link?: string }
) {
  const imgPath = getImg(img)
  const navigation = useNavigation()

  return (
    <>
      <Image 
        source={ imgPath } 
        resizeMode='cover'
        style={[{
            width: '100%',
            height: 300,
            borderRadius: 10,
            backgroundColor: 'white',
          }
        ]}
      />
      <LayoutContainer style={
        { 
          marginTop: -40,       
          shadowOffset: { width: 10, height: 10 }, // Shadow offset
          shadowOpacity: 1, // Shadow transparency
          // shadowRadius: 3, // Shadow blur radius
          shadowColor: 'black',
          elevation: 100,
        }}>
        <Container title="Miêu tả">
          <_Text style={ styles.describeText }>
            { describe }
          </_Text>
        </Container>
        <Button
          onPress={() => navigation.navigate(link)}
          color="rgb(255, 249, 249)"
          style={{
            backgroundColor: '#333',
            marginTop: 15,
            width: '35%',
            alignSelf: 'center',
            elevation: 10
          }}
        > 
          Bắt đầu 
        </Button>
      </LayoutContainer>
    </>
  )
}

const styles = StyleSheet.create({
  describeText: {
    fontWeight: 'thin',
    opacity: 0.8,
    fontSize: 13
  }
})