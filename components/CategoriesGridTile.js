import { Text, View, StyleSheet, Pressable } from "react-native";

const CategoriesGridTile = ({ title, color, onPress }) => {
  return (
    <View style={[styles.categoryTile, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.buttonPressed, styles.root] : styles.root
        }
        android_ripple={{ color: "grey" }}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoriesGridTile;

const styles = StyleSheet.create({
  innerContainer: {
    height: 130,
    width: 130,
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  categoryTile: {
    padding: 22,
    margin: 10,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    textShadowOffset: { width: 2, height: 2 },
  },
  titleText: {
    fontSize: 17,
    fontWeight: 300,
    color: "white",
  },
});
