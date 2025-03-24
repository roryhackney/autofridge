import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  links: {
    fontSize: 16,
    color: "blue",
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "blue",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  input: {
    width: "90%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 10,
  },
  loginButton: {
    flex: 1,
    backgroundColor: "#23AAA5",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
    marginRight: 10,
  },
  signUpButton: {
    flex: 1,
    backgroundColor: "#00434B",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  genericButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 40,
  },
  genericButtonText: {
    color: "white",
    fontSize: 16
  },
  bodyText: {
    fontSize: 16
  }
});

export default globalStyles;
