import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f7",
    flex: 1,
  },

  teacherList: {
    marginTop: -40,
  },

  searchForm: {
    marginBottom: 24,
  },

  label: {
    color: "#d4c2ff",
    fontFamily: "Poppins_400Regular"
  },

  input: {
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 16,
  },

  inputBlock: {
    width: "48%"
  },

  inputGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  submitButton: {
    backgroundColor: "#04d361",
    flexDirection: "row",
    height: 56,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  submitButtonText: {
    color: "#fff",
    fontFamily: "Archivo_700Bold",
    fontSize: 16,
  }
})

export default styles