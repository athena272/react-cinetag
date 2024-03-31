import styles from './Banner.module.scss'
import PropTypes from "prop-types"

Banner.propTypes = {
    image: PropTypes.string,
}

export default function Banner({ image }) {
    return (
        <div className={styles.cover}
            style={{ backgroundImage: `url('/images/banner-${image}.png')` }}
        >
        </div>
    )
}