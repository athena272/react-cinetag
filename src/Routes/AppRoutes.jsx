import ComumPage from "../pages/ComumPage/ComumPage";
import Home from "../pages/Home/Home"
import Favorites from "../pages/Favorites/Favorites";
import Player from "../pages/Player/Player";
import NotFound from "../pages/NotFound/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ComumPage />}>
                    <Route index element={<Home />}></Route>
                    <Route path="favorites" element={<Favorites />}></Route>
                    <Route path=":id" element={<Player />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}