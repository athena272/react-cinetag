// import styles from 'Home.module.scss'
import { useState } from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import Title from '../../components/Title/Title'
import styles from './Home.module.scss'
import { useEffect } from 'react'

export default function Home() {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/athena272/react-cinetag/videos')
            .then(response => response.json())
            .then(data => setVideos(data))
    }, [])

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