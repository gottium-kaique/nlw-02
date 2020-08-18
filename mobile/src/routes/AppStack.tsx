import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import StudyTabs from "./StudyTabs"

import Landing from "../pages/Landing"
import GiveClasses from "../pages/GiveClasses"

const { Navigator, Screen } = createStackNavigator()

const AppStack = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Landing" component={ Landing } />
        <Screen name="GiveClasses" component={ GiveClasses } />
        <Screen name="Study" component={ StudyTabs } />
      </Navigator>
    </NavigationContainer>
  )
}

export default AppStack