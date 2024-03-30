import styles from 'Header.module.scss'
import { Link } from 'react-router-dom'
import NavBar from 'components/NavBar/NavBar'
import logo from '/images/logo.png'


export default function Header() {
    return (
        <header className={styles.cabecalho}>
            <Link to="./">
                <img src={logo} alt="Logo do cinetag"></img>
            </Link>
            <nav>
                <NavBar url="./">
                    Home
                </NavBar>
                <NavBar url="./Favoritos">
                    Favoritos
                </NavBar>
            </nav>
        </header>
    )
}