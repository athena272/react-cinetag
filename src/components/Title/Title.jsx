import styles from './Title.module.scss'
import PropTypes from "prop-types"

Title.propTypes = {
    children: PropTypes.node,
}

export default function Title({ children }) {
    return (
        <div className={styles.text}>
            {children}
        </div>
    )
}