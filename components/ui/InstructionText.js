import React, { Children } from "react";
import Colors from "../../constants/colors";
import { StyleSheet, Text } from "react-native";

function InstructionText(props) {
  return <Text style={styles.instructionText}>{props.children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
});
