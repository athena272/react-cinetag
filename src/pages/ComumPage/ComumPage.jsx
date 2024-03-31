import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import FavoritesProvider from "../../contexts/Favorites"
import Container from "../../components/Container/Container"
import { Outlet } from "react-router-dom"

export default function ComumPage() {
    return (
        <main>
            <Header />
            <FavoritesProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoritesProvider>
            <Footer />
        </main>
    )
}