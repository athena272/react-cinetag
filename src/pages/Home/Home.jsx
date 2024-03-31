// import styles from 'Home.module.scss'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Title from '../../components/Title/Title'
import videos from '../../db/db.json'
import styles from './Home.module.scss'

export default function Home() {

    return (
        <>
            <Banner image={"home"} />
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>
            {/* <Card title='Gato bonifácio' cover='https://thecatapi.com/api/images/get?format-src&type=png' /> */}
            <section className={styles.container}>
                {
                    videos.map((video, index) => (
                        <Card
                            key={index}
                            id={video.id}
                            cover={video.cover}
                            title={video.title}
                        />
                    ))
                }
            </section>
        </>
    )
}