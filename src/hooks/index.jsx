import { useContext } from "react";
import { FavoritesContext } from "../contexts/Favorites";

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        const isFavoriteRepeated = favorite.some(item => item.id === newFavorite.id);

        let newList = [...favorite];

        if (!isFavoriteRepeated) {
            newList.push(newFavorite);
            return setFavorite(newList);
        }

        newList.splice(newList.indexOf(newFavorite), 1);
        // newList = favorite.filter(fav => fav.id === newFavorite.id)

        return setFavorite(newList);
    }

    return {
        favorite,
        addFavorite
    };
}