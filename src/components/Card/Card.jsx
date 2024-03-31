import PropTypes from "prop-types"
import styles from './Card.module.scss'
import favIcon from '/images/favorite.png'
import notFavIcon from '/images/favorite_outline.png'
import { useFavoriteContext } from "../../hooks"
import { Link } from "react-router-dom"

Card.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default function Card({ id, title, cover }) {
    const { favorite, addFavorite } = useFavoriteContext()
    const isFavorite = favorite.some((fav) => fav.id === id);
    const iconToUse = isFavorite ? favIcon : notFavIcon;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={cover} alt={title} className={styles.cover} />
                <h2>{title}</h2>
            </Link>
            <img src={iconToUse}
                alt="Favoritar filme"
                className={styles.favorite}
                onClick={() => addFavorite({ id, title, cover })}
            />
        </div>
    )
}