import React from "react"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Cart from "./pages/Cart";

class Main extends React.Component {
    render() {
        return (
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
        )
    }
}

export default Main;