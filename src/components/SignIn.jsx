import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import Login from "./Login";
import Signup from "./Signup";

function SignIn() {
    const [loggedIn, setLoggedIn] = useState(1)
    const [isVisible, setIsVisible] = useState(true)
    return (
        <>{isVisible && (
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
                <div className="animate__animated animate__bounceIn w-[500px]">
                    <div className="mx-auto border border-gray-300 pt-3 pb-5 px-8 rounded-xl bg-white text-black">
                        <FontAwesomeIcon icon={faTimes} onClick={() => setIsVisible(false)} className="cursor-pointer text-black font-bold pb-3A" />
                        <h3 className="pb-3 border-b border-gray-300 flex justify-between">
                            <span onClick={() => setLoggedIn(1)} className="cursor-pointer text-black font-bold pl-10">Login</span>
                            <span onClick={() => setLoggedIn(2)} className="cursor-pointer text-black font-bold pr-10">Signup</span>
                        </h3>
                        {loggedIn === 1 ?<Login/>:
                        loggedIn === 2 ?<Signup/>:null
                        }
                    </div>
                </div>   
            </div>
            )}
        </>
    );
}
export default SignIn;
