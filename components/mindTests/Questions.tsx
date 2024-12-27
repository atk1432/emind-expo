import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { _Text } from "../TextUtilities";
import { Container, LayoutContainer } from "../Containers";
import { ReactNode, useState } from "react";
import Animated, { FadingTransition, SequencedTransition, LinearTransition, useSharedValue,
            useAnimatedStyle, withSpring, withTiming,  
            Easing} from 'react-native-reanimated';
import { transform } from "@babel/core";
import { AntDesign } from "@expo/vector-icons";


FadingTransition.duration(1000).delay(500)
// SequencedTransition.duration(1000).delay(500)
// LinearTransition.delay(1000)


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
  <View 
    style={[ styles.animatedView ]}
  >
    { children }
  </View>
)

export default function Question() {
  const Q = {
    questions: [
      { q: "This is a question 1", a: [] },
      { q: "This is a question 2", a: [] }
    ],
    answers: [ 'A', 'B', 'C', 'D' ]
  }

  const [ questionIndex, setQuestionIndex ] = useState(1)
  const [ answers, setAnswers ] = useState([
    1, 2
  ])
  const [ answerShow, setAnswerShow ] = useState(true)
  const translateX = useSharedValue<number>(0);
  // const translateX1 = useSharedValue<number>(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ 
      translateX: withTiming(
        translateX.value, {easing: Easing.inOut(Easing.quad), duration: 1000}
      )
    }]
  })) 

  const answerTextPressCallback = () => {
    // if (questionIndex + 1 <= 2)
      setQuestionIndex(questionIndex + 1)
    // else 
    //   setQuestionIndex(1)

    // translateX.value -= 300;
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
      style={{ backgroundColor: 'white', marginTop: 40 }}
    >
      <Container style={{ 
        marginTop: 0,
        flexDirection: 'column', 
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 20,
      }}>
        <View style={{ marginTop: 50, justifyContent: 'center' }}>
          <_Text style={ styles.questionText }>
            { Q.questions[questionIndex - 1].q }
          </_Text>
        </View>
        
        <Animated.View 
          layout={ LinearTransition }
          // style={{ flexDirection: 'row' }}
        >
          { 
            answers.map((answer) => {
              if (answer >= questionIndex) {
                return (<Answer key={answer}>
                  { questionIndex } { getAnswerText() }
                </Answer>)
              }
            })
          }
        </Animated.View>
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
    // flex: 1
  }
})