import { MutableRefObject, RefObject } from "react"
import { ImageSourcePropType } from "react-native"
import Result from "./Result"


export const getImg = (name : String) => {
  if (name == 'Stress') {
    return  require('@/assets/images/categories/stressBg.jpg')
  } else if (name == 'Depression') {
    return
  }
}

export const increaseScore = (
  score : MutableRefObject<number>, 
  answerIndex : number,
  name : string
) => {
  if (name == 'Stress') {
    score.current += answerIndex
  }
}

export interface ResultObj { 
  name: "Stress",
  score: number, 
  comment?: string, 
  image?: ImageSourcePropType,
  level: number
}

export const showResult = (
  score : MutableRefObject<number>,
  name: "Stress"
)  => {
  const _score : number = score.current
  var result : ResultObj = { score: _score, name: name, level: 0 }
  if (name == 'Stress') {
    if (_score >= 0 && _score <= 13) {
      result.comment = 'Chúc mừng bạn! Mức độ căng thẳng của bạn đang ở mức thấp, cho thấy bạn có khả năng quản lý tốt các áp lực trong cuộc sống. Đây là dấu hiệu tích cực về sức khỏe tinh thần và cảm xúc.',
      result.image = require("@/assets/images/result/happy.jpg")
      result.level = 0
    } else if (_score >= 14 && _score <= 26) {
      result.comment = 'Bạn đang trải qua mức độ căng thẳng vừa phải, điều này khá bình thường. Hãy chăm sóc bản thân bằng cách nghỉ ngơi, tập thể dục hoặc thư giãn. Nếu áp lực tăng lên, đừng ngần ngại tìm sự hỗ trợ từ người thân hoặc chuyên gia.',
      result.image = require("@/assets/images/result/normal_stress.jpg")
      result.level = 1
    } else {
      result.comment = 'Bạn đang trải qua mức độ căng thẳng cao, cho thấy áp lực trong cuộc sống đang ảnh hưởng đáng kể đến bạn. Hãy ưu tiên nghỉ ngơi, thư giãn, và thử các kỹ thuật giảm căng thẳng như hít thở sâu hoặc tập thể dục. '
      result.image = require("@/assets/images/result/high_stress.jpg")
      result.level = 2
    }
  }

  return result
}

export const getTextLevel = 
  (name: "Stress", level: number) => {
  if (name == 'Stress')
    return [ 'Nhẹ', 'Trung bình', 'Cao' ][level]
}