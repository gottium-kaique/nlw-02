import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8257E5",
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 30,
    marginTop: 80,
    fontFamily: "Poppins_400Regular"
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold"
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },

  button: {
    height: 150,
    width: "48%",
    backgroundColor: "#333",
    borderRadius: 8,
    padding: 24,
    justifyContent: "space-between"
  },

  buttonPrimary: {
    backgroundColor: "#9871f5"
  },

  buttonSecondary: {
    backgroundColor: "#04d361"
  },

  buttonText: {
    color: "#fff",
    fontFamily: 'Archivo_400Regular',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#d4c2ff",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 20,
  }
})

export default styles