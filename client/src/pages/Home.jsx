import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            Click to see project
            <Link
                to={"/register"}
                className="border-solid border-2 border-indigo-600 p-2 ml-2 bg-indigo-600 text-white font-bold"
            >
                See project
            </Link>
        </div>
    );
};

export default Home;
