import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/register"} element={<Register />} />
                <Route path={"/login"} element={<Login />} />
            </Routes>
            <Toaster />
        </Router>
    );
}

export default App;
