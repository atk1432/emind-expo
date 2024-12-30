import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { _Text } from "../TextUtilities";
import { Container, LayoutContainer } from "../Containers";
import { ReactNode, useRef, useState } from "react";
import Animated, { FadeInRight, FadeOutLeft, Easing} from 'react-native-reanimated';
import QuestionsType from "@/api/mind_tests.json"
import Result from "./Result";
import { increaseScore, showResult } from "./utilities";


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
  { name } : { name: "Stress" }
) {
  const [ questionIndex, setQuestionIndex ] = useState(1)
  const [ resultShow, setResultShow ] = useState(false)
  const [ answerShow, setAnswerShow ] = useState(true)
  const score = useRef(0)
  const Q = QuestionsType['Stress']
  const duration = 300
  const questionLength = Q.questions.length


  const answerTextPressCallback = (answerIndex : number) => ( () => {
    const nextQuestion = questionIndex + 1
    setAnswerShow(false)

    increaseScore(score, answerIndex, name)
    if (nextQuestion <= questionLength) {
      setTimeout(() => {
        setQuestionIndex(questionIndex + 1)  
        setAnswerShow(true)
      }, duration)
    } else {
      setTimeout(() => {
        setResultShow(true)
      }, duration + 1000)
    }
  } )

  const getAnswerText = () => (
    Q.answers.map((answer, index) => 
      <AnswerText 
        key={ index }
        onPressable={ answerTextPressCallback(index) }
      >
        { answer }
      </AnswerText>
  ))

  const renderTest = () => {
    if (resultShow) {
      const result = showResult(score, name)
      return (
        <Result result={ result } />
      )
    }

    if (answerShow)
      return (
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
        </Container>
      )
  }

  return (
    <LayoutContainer 
      safeArea={ false }
      style={{ backgroundColor: 'white', marginTop: 40, zIndex: -1 }}
    >
      { renderTest() }
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