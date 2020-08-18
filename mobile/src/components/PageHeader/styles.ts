import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    padding: 35,
    backgroundColor: "#8257e5"
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color: "#fff",
    fontSize: 24,
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
})

export default styles