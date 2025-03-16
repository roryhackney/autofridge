import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff", 
  },
  links: {
    "color": "blue",
    "textDecorationLine": "underline",
    "textDecorationStyle": "solid",
    "textDecorationColor": "blue",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain", 
  },
});
