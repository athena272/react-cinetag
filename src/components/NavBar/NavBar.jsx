import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import styles from './NavBar.module.scss'

NavBar.propTypes = {
    url: PropTypes.string,
    children: PropTypes.node,
}

export default function NavBar({ url, children }) {
    return (
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}