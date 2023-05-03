import React from "react";
import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";
function Card({ children }) {
  return <View style={styles.inputContainer}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    borderRadius: 8,
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary800,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { height: 4, width: 3 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
});
