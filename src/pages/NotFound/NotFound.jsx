import { Link } from 'react-router-dom'
import styles from './NotFound.module.scss'

export default function NotFound() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>O conteúdo que você procura não foi encontrado!</p>
            <Link to={'/'}>            
                <img src={'/images/404 Error-cuate.svg'} alt="" />
            </Link>
        </section>
    )
}