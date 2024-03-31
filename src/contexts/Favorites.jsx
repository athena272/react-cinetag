import { createContext, useState } from "react";
import PropTypes from "prop-types"

FavoritesProvider.propTypes = {
    children: PropTypes.node,
}

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}