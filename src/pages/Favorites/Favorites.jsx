import styles from './Favorites.module.scss'
import Banner from '../../components/Banner/Banner'
import Title from '../../components/Title/Title'
import { useFavoriteContext } from '../../hooks'
import Card from '../../components/Card/Card'

export default function Favorites() {
    const { favorite } = useFavoriteContext()
    console.log("🚀 ~ Favorites ~ favorite:", favorite)
    return (
        <>
            <Banner image={"favoritos"} />
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                {
                    favorite.length > 0 ?
                        favorite.map((fav, index) => {
                            return (
                                <Card
                                    key={index}
                                    id={fav.id}
                                    cover={fav.cover}
                                    title={fav.title}
                                />
                            )
                        })
                        :
                        <h2>Parece que ainda não há nenhum favorito ainda :(</h2>
                }
            </section>
        </>
    )
}