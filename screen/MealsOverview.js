import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

const MealsOverview = ({ route, navigation }) => {
  const id = route.params.categoryId;
  
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(id) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id == id
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [id, navigation]);

  return (
    <MealsList displayMeals={displayMeals}/>
  );
};

export default MealsOverview;

