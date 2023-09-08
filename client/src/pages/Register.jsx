import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        const values = {
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword,
        };
        try {
            const res = await axios.post(
                "http://localhost:8080/api/v1/users/register",
                values,
                {
                    withCredentials: true,
                }
            );
            const succ = res.data.success;
            if (succ) {
                toast.success(`Registered ${res.data.user.firstName}`);
                navigate("/");
            } else {
                toast.error("Some error");
            }
        } catch (error) {
            console.log(error);
            console.log("error in register");
        }
    };
    return (
        <section className="body-font font-poppins">
            <div className="w-full h-screen py-12 px-36  bg-[#E1DFE9]">
                <div className=" w-screenborder-solid flex  shadow-2xl shadow-grey-700  ">
                    {/* left side */}
                    <div className="w-5/12 bg-white relative">
                        <img
                            className="h-[35rem] pl-4 pb-4"
                            src="/src/assets/aeroplane.jpg"
                            alt=""
                        />
                        <div className="absolute top-5 left-7"></div>

                        <div className="absolute bottom-0 right-11 bg-black opacity-70 px-8 py-12">
                            <div className="flex justify-center">
                                <h1 className="text-5xl font-600 text-white m-auto ">
                                    Altitude Air
                                </h1>
                            </div>
                            <div className="border-solid border-2 border-white w-20 m-auto mt-4 mb-4"></div>
                            <p className="text-white text-[10px] text-center">
                                We promise to ensure that your well-being is
                                taken care of while travelling wiht us.Boosting
                                top in class fleet inventory and a 5 star
                                approval for our in-flight experience, you know
                                you're getting the best from Altitude with no
                                attitude.{" "}
                            </p>
                        </div>
                    </div>

                    {/* right side  */}
                    <div className="py-8 px-12 flex flex-col w-7/12 bg-white">
                        <div className="flex justify-end mb-12">
                            <Link
                                className="border-solid border-2 border-purple-700 text-[#582DD8] text-sm font-semibold w-36 p-1 uppercase rounded text-center"
                                to={"/login"}
                            >
                                sign in
                            </Link>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-4xl font-semibold text-purple-700">
                                Explore & Experience
                            </h1>
                            <p className="text-sm text-purple-700  font-semibold mb-4 mt-1">
                                Get onto your most comfortable journey yet. All
                                the way up.
                            </p>
                        </div>
                        <form
                            className="flex flex-col gap-4 mt-4"
                            onSubmit={submitHandler}
                        >
                            <div className="flex justify-between gap-5">
                                <input
                                    className="border-solid border-2 border-black-800 text-sm p-2 rounded w-6/12 outline-none "
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                />
                                <input
                                    className="border-solid border-2 border-black-800 text-sm p-2 rounded w-6/12 outline-none "
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                />
                            </div>
                            <input
                                className="border-solid border-2 border-black-800 text-sm p-2 rounded outline-none "
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                className="border-solid border-2 border-black-800 text-sm p-2 rounded outline-none "
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="border-solid border-2 border-black-800 text-sm p-2 rounded outline-none "
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                className="border-solid border-2 border-black-800 text-sm p-2 rounded outline-none "
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                            />
                            <button
                                type="submit"
                                className="py-1.5 bg-purple-800 text-white "
                            >
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
