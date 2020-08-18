import React, { ReactNode } from "react"
import styles from "./styles"

import { View, Image, Text } from "react-native"
import { BorderlessButton } from "react-native-gesture-handler"
import { useNavigation } from "@react-navigation/native"

import backIcon from "../../assets/images/icons/back.png"
import logoImg from "../../assets/images/logo.png"

interface PageHeaderProps {
  title: string
  headerRight?: ReactNode
}

const PageHeader: React.FC <PageHeaderProps> = ({title, children, headerRight}) => {
  const { navigate } = useNavigation()

  function handleGoBack() {
    navigate("Landing")
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton 
          onPress={handleGoBack}
          style={{padding: 5,}}
        >
          <Image 
            source={ backIcon } 
            resizeMode="contain" 
          />
        </BorderlessButton>

        <Image source={ logoImg } resizeMode="contain" />
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>
          {title}
        </Text>
        
        {headerRight}

      </View>
      {children}
    </View>
  )
}

export default PageHeader