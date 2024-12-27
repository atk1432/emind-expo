import { Container, LayoutContainer } from "@/components/Containers";
import { _Text } from "@/components/TextUtilities";
import { Image, StyleSheet } from "react-native";


export default function Stress() {
  return (
    <LayoutContainer marginTop={100}>
      <Image 
        source={ require("@/assets/images/categories/stress.jpg") } 
        resizeMode='contain'
        style={{
          width: '100%',
          height: 200,
          borderRadius: 10,
          backgroundColor: 'white'
        }}
      />
      <Container title="Miêu tả">
        <_Text style={ styles.describeText }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore 
           magna aliqua. Ut enim ad minim veniam, quis nostrud 
           exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in
             reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat
               cupidatat non proident, sunt in culpa qui officia 
               deserunt mollit anim id est laborum.
        </_Text>
      </Container>
    </LayoutContainer>
  )
}

const styles = StyleSheet.create({
  describeText: {
    fontWeight: 200,
    fontSize: 14
  }
})