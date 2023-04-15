import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItemDetail from "../components/MealItemDetail";
import { useContext, useLayoutEffect } from "react";
import ButtonIcon from "../components/ButtonIcon";
import { FavouriteContext } from "../store/context/favourite-context";

const MealsDetail = ({ route, navigation }) => {
  const mealId = route.params.catId;
  const favouriteMealsCtx = useContext(FavouriteContext);
  const selectedMeal = MEALS.find((meal) => meal.id == mealId);
  // const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);
  const mealIsFavourite = false

  const pressHandler = () => {
    if (mealIsFavourite) {
      favouriteMealsCtx.removeFavourites(mealId);
    } else {
      favouriteMealsCtx.addFavourites(mealId);
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <ButtonIcon
            onPress={pressHandler}
            // name="star"
            name={mealIsFavourite ? "star" : "star-outline"}
            size={24}
            color="white"
          />
        );
      },
    });
  }, [navigation, pressHandler]);

  return (
    <ScrollView>
      <View style={styles.root}>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <MealItemDetail
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          duration={selectedMeal.duration}
        />
        <View style={styles.ingredientContainer}>
          <View style={styles.border}>
            <Text style={styles.ingredientTitle}>Ingredients</Text>
          </View>
          {selectedMeal.ingredients.map((ingredient) => (
            <View style={styles.list} key={ingredient}>
              <Text style={styles.listText}>{ingredient}</Text>
            </View>
          ))}
        </View>

        <View style={styles.ingredientContainer}>
          <View style={styles.border}>
            <Text style={styles.ingredientTitle}>Steps to prepare</Text>
          </View>
          {selectedMeal.steps.map((step) => (
            <View style={styles.list} key={step}>
              <Text style={styles.listText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealsDetail;

const styles = StyleSheet.create({
  root: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  ingredientContainer: {
    paddingVertical: 10,
  },
  ingredientTitle: {
    fontSize: 18,
    paddingBottom: 15,
    fontWeight: "600",
    color: "lightgrey",
  },
  border: {
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
    marginBottom: 10,
  },
  list: {
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#348781",
    marginVertical: 3,
  },
  listText: {
    color: "white",
    paddingLeft: 15,
  },
});
