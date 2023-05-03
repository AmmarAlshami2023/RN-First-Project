import { View, Text, Image, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButtons from "../components/ui/PrimaryButtons";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlaight}>{roundsNumber} </Text>
        rounds to guess the number
        <Text style={styles.highlaight}> {userNumber}</Text>
      </Text>
      <PrimaryButtons onPress={onStartNewGame}> start new Game</PrimaryButtons>
    </View>
  );
}

export default GameOverScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderColor: Colors.primary800,
    borderWidth: 3,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlaight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});
