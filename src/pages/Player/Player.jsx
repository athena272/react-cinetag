import Banner from '../../components/Banner/Banner'
import Title from '../../components/Title/Title'
import styles from './Player.module.scss'
import videos from '../../db/db.json'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

export default function Player() {
    const parameters = useParams()
    const video = videos.find(video => video.id === Number(parameters.id))
    // console.log("🚀 ~ Player ~ video:", video)

    if (!video) {
        return <NotFound />
    }

    return (
        <>
            <Banner image={"player"} />
            <Title>
                <h1>Player</h1>
            </Title>
            <section className={styles.container}>
                <iframe
                    width="800"
                    height="315"
                    src={video.link}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                >
                </iframe>
            </section>
        </>
    )
}