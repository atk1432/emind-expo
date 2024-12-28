import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { _Text } from "../TextUtilities";
import { Container, LayoutContainer } from "../Containers";
import { ReactNode, useState } from "react";
import Animated, { FadeInRight, FadeOutLeft, Easing} from 'react-native-reanimated';
import QuestionsType from "@/api/mind_tests.json"



const AnswerText = (
  { children, onPressable = () => {} } : { children?: ReactNode, onPressable?: () => void }
) => {
  return (
    <TouchableOpacity
      onPress={ onPressable }
    >
      <_Text style={ styles.answerText }>
        { children }
      </_Text>
    </TouchableOpacity>
  )
}

const Answer = ({ children } : { children?: ReactNode }) => (
  <Animated.View entering={FadeInRight} exiting={FadeOutLeft}
    style={[ styles.animatedView ]}
  >
    { children }
  </Animated.View>
)

export default function Question(
  { name } : { name: string }
) {
  const duration = 200
  const [ questionIndex, setQuestionIndex ] = useState(1)
  const [ answers, setAnswers ] = useState([1, 2])
  const [ answerShow, setAnswerShow ] = useState(true)

  const Q = QuestionsType['Stress']

  const answerTextPressCallback = () => {
    setAnswerShow(false)

    setTimeout(() => {
      if (questionIndex + 1 <= Q.questions.length)
        setQuestionIndex(questionIndex + 1)
      else 
      setQuestionIndex(1)
      setAnswerShow(true)
    }, duration)
  }

  const getAnswerText = () => (
    Q.answers.map((answer, index) => 
      <AnswerText 
        key={ index }
        onPressable={ answerTextPressCallback }
      >
        { answer }
      </AnswerText>
  ))

  return (
    <LayoutContainer 
      safeArea={ false }
      style={{ backgroundColor: 'white', marginTop: 40, zIndex: -1 }}
    >
      { answerShow ?
        <Container style={{ 
          marginTop: 0,
          flexDirection: 'column', 
          justifyContent: 'space-between',
          paddingTop: 10,
          paddingBottom: 20,
        }}>
          <Animated.View 
            style={{ marginTop: 50, justifyContent: 'center' }}
            entering={FadeInRight.duration(duration)} 
            exiting={FadeOutLeft.duration(duration)}
          >
            <_Text style={ styles.questionText }>
              {questionIndex}. { Q.questions[questionIndex - 1] }
            </_Text>
          </Animated.View>
          <Answer>{ getAnswerText() }</Answer>
        </Container> : ""
      }
    </LayoutContainer>
  )
}

const styles = StyleSheet.create({
  questionText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  answerText: {
    fontSize: 18,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 2
  },
  animatedView: {
    marginTop: 10, 
    marginBottom: 10,
    width: '100%',
    position: 'relative'
    // flex: 1
  }
})