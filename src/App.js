import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import PageNotFound from "./pages/PageNotFound";
import Acceuil from "./pages/Acceuil";
import Department from "./pages/Department";
import Carousel from "./components/Carousel"
function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/acceuil" element={<Acceuil />} />
                    <Route path="/department" element={<Department />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route path="/carousel" element={<Carousel />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;