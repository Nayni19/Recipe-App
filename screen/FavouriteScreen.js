import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { FavouriteContext } from "../store/context/favourite-context";
import { MEALS } from "../data/dummy-data";

const FavouriteScreen = () => {
  const FavouriteMealsCtx = useContext(FavouriteContext);
  // const FavouriteMeal = MEALS.filter((meal) =>
  //   FavouriteMealsCtx.ids.includes(meal.id)
  // );
  const FavouriteMeal = [];
  if (FavouriteMeal.length == 0) {
    return (
      <View style={styles.root}>
        <Text style={styles.favText}>There are no favourite meals!</Text>
      </View>
    );
  }
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#001616",
    justifyContent: "center",
    alignItems: "center",
  },
  favText: {
    fontSize: 18,
    fontWeight: 300,
    color: "white",
  },
});
