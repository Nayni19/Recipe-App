import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import CategoriesGrid from "./screen/CategoriesGrid";
import MealsOverview from "./screen/MealsOverview";
import MealsDetail from "./screen/MealsDetail";
import FavouriteScreen from "./screen/FavouriteScreen";
import Ionicons from "@expo/vector-icons/Ionicons";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavouritesProvider from "./store/context/favourite-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#033E3E" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#001616" },
        drawerStyle: { backgroundColor: "#F0FFFF" },
        drawerInactiveTintColor: "grey",
        drawerActiveTintColor: "#033E3E",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesGrid}
        options={{
          drawerIcon: ({ size, color }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouriteScreen}
        options={{
          drawerIcon: ({ size, color }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#033E3E" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#001616" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={MyDrawer}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Meals-Overview" component={MealsOverview} />
            <Stack.Screen name="Meals-Details" component={MealsDetail} />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesProvider>
    </>
  );
}

// const styles = StyleSheet.create({});
