// import styles from 'Home.module.scss'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import Title from '../../components/Title/Title'

export default function Home() {

    return (
        <>
            <Header />
            <Banner image={"home"} />
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>
        </>
    )
}