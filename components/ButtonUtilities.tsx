import { Button } from "@react-navigation/elements"
import { CommonActions, useNavigation } from "@react-navigation/native"
import { ReactNode } from "react"

export const _Button = ({children, link} :
  { children?: string, link?: string }
) => {
  const navigation = useNavigation()

  return (
    <Button 
        onPress={() => navigation.navigate(link)}
        color="rgb(255, 249, 249)"
        style={{
          backgroundColor: '#333',
          marginTop: 15,
          alignSelf: 'center',
          elevation: 10
        }}
    > 
      { children }
    </Button>
  )
}

export const _GoBackButton = ({children, link} :
  { children?: string, link?: string }
) => {
  const navigation = useNavigation()

  return (
    <Button 
        onPress={() => navigation.dispatch(CommonActions.reset(
            { index: 0, routes: [{ name: "HomeMain" }] }
          )
        )}
        color="rgb(255, 249, 249)"
        style={{
          backgroundColor: '#333',
          marginTop: 15,
          alignSelf: 'center',
          elevation: 10
        }}
    > 
      { children }
    </Button>
  )
}
