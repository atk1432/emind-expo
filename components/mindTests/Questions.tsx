import { Dimensions, StyleSheet, View } from "react-native";
import { _Text } from "../TextUtilities";
import { Container, LayoutContainer } from "../Containers";
import { ReactNode } from "react";


const AnswerText = ({ children } : { children?: ReactNode }) => {
  return (
    <_Text style={ styles.answerText }>
      { children }
    </_Text>
  )
}


export default function Question() {
  const Q = {
    questions: { q: "This is a question", a: [] },
    answers: [ 'A', 'B', 'C', 'D' ]
  }

  return (
    <LayoutContainer style={{ marginTop: 30 }}>
      <Container style={{ 
        flexDirection: 'column', 
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 20,
        height: Dimensions.get('window').height,
      }}>
        <View style={{ justifyContent: 'center' }}>
          <_Text style={ styles.questionText }>This is question</_Text>
        </View>
        <View>
          <AnswerText>This is a answer</AnswerText>
          <AnswerText>This is a answer</AnswerText>
          <AnswerText>This is a answer</AnswerText>
          <AnswerText>This is a answer</AnswerText>
        </View>
      </Container>
    </LayoutContainer>
  )
}

const styles = StyleSheet.create({
  questionText: {
    fontSize: 24,
    textAlign: 'center'
  },
  answerText: {
    fontSize: 16,
    padding: 5
  }
})