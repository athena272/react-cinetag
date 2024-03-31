import PropTypes from "prop-types"
import styles from './Card.module.scss'
import favIcon from '/images/favorite.png'

Card.propTypes = {
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default function Card({ title, cover }) {
    return (
        <div className={styles.container}>
            <img src={cover} alt={title} className={styles.cover} />
            <h2>{title}</h2>
            <img src={favIcon}
                alt="Favoritar filme"
                className={styles.favorite} />
        </div>
    )
}