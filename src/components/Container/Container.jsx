import PropTypes from "prop-types"
import styles from './Container.module.scss'

Container.propTypes = {
    children: PropTypes.node,
}

export default function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}