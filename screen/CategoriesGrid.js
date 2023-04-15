import { FlatList, StyleSheet, Text, View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoriesGridTile from "../components/CategoriesGridTile";

const CategoriesGrid = ({ navigation }) => {
  const renderCategory = (itemData) => {
    const pressHandler = () => {
      navigation.navigate("Meals-Overview",{
        categoryId: itemData.item.id
      })
    };
    return (
      <CategoriesGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderCategory}
      keyExtractor={(item) => item.id}
      numColumns={2}
    ></FlatList>
  );
};

export default CategoriesGrid;

const styles = StyleSheet.create({});
