import React, { useState } from "react"
import styles from "./styles"

import PageHeader from "../../components/PageHeader"
import TeacherItem, { Teacher } from "../../components/TeacherItem"
import { ScrollView, Text, View, AsyncStorage } from "react-native"
import { 
  TextInput, 
  BorderlessButton, 
  RectButton 
} from "react-native-gesture-handler"

import api from "../../services/api"

import { Feather } from "@expo/vector-icons"
import { useFocusEffect } from "@react-navigation/native"

const TeacherList = () => {
  const [teachers, setTeachers] = useState([])
  const [favorites, setFavorites] = useState<number[]>([])
  const [isFiltersVisible, setIsFiltersVisible] = useState(false)
  const [subject, setSubject] = useState("")
  const [week_day, setWeekDay] = useState("")
  const [time, setTime] = useState("")

  async function loadFavorites() {
    const response = await AsyncStorage.getItem("favorites")
    if (response) {
      const favoritedTeachers = JSON.parse(response)
      const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id)
      setFavorites(favoritedTeachersIds)
    }
  }

  useFocusEffect(() => {
    loadFavorites()
  })

  function handleToggleFiltersVisible() {
    loadFavorites()
    setIsFiltersVisible(!isFiltersVisible)
  }

  async function handleFiltersSubmit() {
    const {data} = await api.get("/classes", {
      params: {subject, time, week_day}
    })
    setIsFiltersVisible(false)
    setTeachers(data)
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title="Proffys Disponíveis" 
        headerRight={ (
          <BorderlessButton 
            onPress={ handleToggleFiltersVisible }
            style={{ padding: 10, }}
          >
            <Feather 
              name="filter" 
              color="#fff" 
              size={20} 
            />
          </BorderlessButton>
        ) }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
          <Text style={styles.label}>
            Matéria
          </Text>

          <TextInput 
            style={styles.input}
            placeholder="Qual a matéria"
            onChangeText={ setSubject }
            placeholderTextColor="#c1bccc"
          />

          <View style={styles.inputGroup}>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Dia da semana</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual o dia?"
                onChangeText={ setWeekDay }
                placeholderTextColor="#c1bccc"
              />
            </View>

            <View style={styles.inputBlock}>
              <Text style={styles.label}>Horário</Text>
              <TextInput
                style={styles.input}
                placeholder="Qual horário?"
                onChangeText={ setTime }
                placeholderTextColor="#c1bccc"
              />
            </View>

          </View>

          <RectButton 
            style={styles.submitButton}
            onPress={ handleFiltersSubmit }
          >
            <Text style={styles.submitButtonText}>Filtrar</Text>
          </RectButton>

        </View>
        )}
      </PageHeader>
      <ScrollView 
        style={styles.teacherList} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}>

        {
          teachers.map((teacher: Teacher) => {
            const TeacherProps = {teacher}
            return (
              <TeacherItem 
                key={ teacher.id } 
                {...TeacherProps}
                favorited={ favorites.includes(teacher.id) }
              />
            )
          })
        }
      </ScrollView>
    </View>
  )
}

export default TeacherList