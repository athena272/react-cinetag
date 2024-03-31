import styles from './Favorites.module.scss'
import Banner from '../../components/Banner/Banner'
import Title from '../../components/Title/Title'

export default function Favorites() {
    return (
        <>
            <Banner image={"favoritos"} />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
        </>
    )
}