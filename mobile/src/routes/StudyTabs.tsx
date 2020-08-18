import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { TouchableRipple } from "react-native-paper"

import TeacherList from "../pages/TeacherList"
import Favorites from "../pages/Favorites"

import { Ionicons, AntDesign } from "@expo/vector-icons"

const { Navigator, Screen } = createBottomTabNavigator()

const StudyTabs = () => {
  return (
    <Navigator 
      screenOptions={{
        tabBarButton: ({ children, onPress, style }) => {
          return (
            <TouchableRipple 
              children={children} 
              onPress={onPress} 
              style={style}
            />
          )
        }
      }}
      tabBarOptions={{
        style: {
          height: 64,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "Poppins_400Regular",
          fontSize: 15,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264b",
    }}>
      <Screen 
        name="TeacherList" 
        component={ TeacherList } 
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({color, size, focused}) => (
            <Ionicons 
              name="ios-easel" 
              color={ focused ? "#8257E5" : color }
              size={ size }
            />
          )
        }}
      />

      <Screen 
        name="Favorites" 
        component={ Favorites } 
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({color, size, focused}) => (
            <AntDesign
              name="hearto"
              color={ focused ? "#8257E5" : color }
              size={ size }
            />
          )
        }}
      />
    </Navigator>
  )
}

export default StudyTabs