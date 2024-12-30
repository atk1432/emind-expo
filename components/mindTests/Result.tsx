import { StyleSheet, Image } from "react-native";
import { Container, LayoutContainer } from "../Containers";
import { _Text } from "../TextUtilities";
import Animated, { FadeIn } from "react-native-reanimated";
import { ReactNode } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { getTextLevel, ResultObj, showResult } from "./utilities";
import { NotificationText } from "../TextUtilities"
import { _Button, _GoBackButton } from "../ButtonUtilities";
import { Link } from "@react-navigation/native";

const ScoreText = (
  { children } : { children?: ReactNode }
) => {
  return (
    <Animated.View style={ styles.scoreView }>
      <_Text style={styles.scoreText}>{ children }</_Text>
    </Animated.View>
  )
}

export default function Result(
  { result } : { result: ResultObj }
) {
  const levelText = getTextLevel(result.name, result.level)
  return (
    <LayoutContainer>
      <Animated.View entering={FadeIn}>
        <Container style={{ marginTop: 40 }}> 
          <Animated.Image source={ result.image } style={ styles.image } />
          <NotificationText level={ result.level } style={ styles.scoreText } >
            { result.score }
          </NotificationText>
          <NotificationText level={ result.level } style={ styles.levelText } >
            { levelText }
          </NotificationText>
          <_Text style={ styles.commentText }>{ result.comment }</_Text>
          <Link style={{ textAlign: 'center' }}>Xem cách tính điểm</Link>
          <_GoBackButton link="HomeMain">Quay về trang chủ</_GoBackButton>
        </Container>
      </Animated.View>
    </LayoutContainer>
  )
}

const styles = StyleSheet.create({
  scoreView: {
    justifyContent: 'center'
  },
  scoreText: {
    fontSize: 70,
    alignSelf: 'center'
  },
  levelText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: -10,
  },
  commentText: {
    fontSize: 14,
    opacity: 0.8,
    textAlign: 'center',
    padding: 5,
    marginBottom: 20
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    borderRadius: 10
  },
  button: {
    marginTop: 20 
  }
})