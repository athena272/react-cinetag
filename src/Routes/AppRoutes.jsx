import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Container from "../components/Container/Container";
import Home from "../pages/Home/Home"
import Favorites from "../pages/Favorites/Favorites";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/favorites" element={<Favorites />}></Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}