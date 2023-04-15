import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MealItemDetail from "./MealItemDetail";

const MealItem = ({
  title,
  duration,
  imageItem,
  affordability,
  complexity,
  id,
}) => {
  const navigation = useNavigation();
  const selectMealItem = () => {
    navigation.navigate("Meals-Details", { catId: id });
  };
  return (
    <View style={styles.tab}>
      <Pressable
        android_ripple={{ color: "grey" }}
        style={({ pressed }) => (pressed ? [styles.button] : null)}
        onPress={selectMealItem}
        key={title}
      >
        <View>
          <Image
            source={{
              uri: imageItem,
            }}
            style={styles.image}
          />
          <Text style={styles.title}>{title} </Text>
          <MealItemDetail affordability={affordability} complexity={complexity} duration={duration}/>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  button: { opacity: 0.25, flex: 1 },
  tab: {
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    backgroundColor: "white",
    padding: 15,
    margin: 5,
  },
  image: {
    height: 250,
    width: "100%",
  },
  title: {
    fontSize: 18,
    marginVertical: 16,
    textAlign: "center",
  },
  
});
