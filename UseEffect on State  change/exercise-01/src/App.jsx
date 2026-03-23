import React from 'react'
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Counter from "./components/Counter.jsx";

const App = () => {
    return (
        <>
            <nav className=" p-4 flex gap-4 text-black items-center justify-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/counter">Counter</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/counter" element={<Counter />} />
            </Routes>
        </>
    )
}

export default App;