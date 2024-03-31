import Banner from '../../components/Banner/Banner'
import Title from '../../components/Title/Title'
import styles from './Player.module.scss'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NotFound from '../NotFound/NotFound'

export default function Player() {
    const [video, setVideo] = useState(null)
    const parameters = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/athena272/react-cinetag/videos?id=${parameters.id}`)
            .then(response => response.json())
            .then(data => {
                console.log("🚀 ~ useEffect ~ data:", data)
                console.log("🚀 ~ useEffect ~ ...data:", ...data)
                setVideo(...data)
            })
    }, [])

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