import { StyleSheet, Text, View } from "react-native";

const MealItemDetail = ({ affordability, complexity, duration }) => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.innerContainer}>{affordability.toUpperCase()}</Text>
      <Text style={styles.innerContainer}>{complexity.toUpperCase()}</Text>
      <Text style={styles.innerContainer}>{duration}</Text>
    </View>
  );
};
export default MealItemDetail;

const styles = StyleSheet.create({
  outerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  innerContainer: {
    paddingVertical: 10,
    width: "30%",
    textAlign: "center",
    backgroundColor: "#033E3E",
    fontSize: 10,
    color: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
  },
});
