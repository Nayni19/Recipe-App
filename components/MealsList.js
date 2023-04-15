import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

const renderMeals = (itemData) => {
  return (
    <MealItem
      title={itemData.item.title}
      imageItem={itemData.item.imageUrl}
      duration={itemData.item.duration}
      affordability={itemData.item.affordability}
      complexity={itemData.item.complexity}
      id={itemData.item.id}
    />
  );
};

const MealsList = ({ displayMeals }) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        renderItem={renderMeals}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
export default MealsList;

const styles = StyleSheet.create({
  screen: {
    padding: 15,
    justifyContent: "center",
  },
});
