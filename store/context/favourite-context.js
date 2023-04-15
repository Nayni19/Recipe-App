import { createContext, useState } from "react";

export const FavouriteContext = createContext({
  ids: [],
  addFavourites: (id) => {},
  removeFavourites: (id) => {},
});

function FavouritesProvider({ children }) {
  const [mealId, setMealId] = useState([]);

  const addFavourites = (id) => {
    setMealId((currIds) => [...currIds, id]);
  };
  const removeFavourites = (id) => {
    setMealId((currFavIds) => currFavIds.filter((currIds) => currIds !== id));
  };

  const values = {
    id: mealId,
    addFavourites: addFavourites,
    removeFavourites: removeFavourites,
  };

  return (
    <FavouriteContext.Provider value={values}>
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouritesProvider;
