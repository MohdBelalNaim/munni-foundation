import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { faTimes } from '@fontawesome/free-solid-svg-icons';
import 'animate.css';

function Login() {
    const [loggedIn, setLoggedIn] = useState(1)
    const [isVisible, setIsVisible] = useState(true)
    return (
        <>{isVisible && (
            <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-70">
                <div className="animate__animated animate__bounceIn w-[min(98%,400px)]">
                    <div className="mx-auto border border-gray-300 pt-3 pb-5 px-8 rounded-xl bg-white text-black">
                        {/* <FontAwesomeIcon icon={faTimes} onClick={() => setIsVisible(false)} className="cursor-pointer text-black font-bold pb-3A" /> */}
                        <h3 className="pb-3 border-b border-gray-300 flex justify-between">
                            <span onClick={() => setLoggedIn(1)} className="cursor-pointer text-black font-bold pl-10">Login</span>
                            <span onClick={() => setLoggedIn(2)} className="cursor-pointer text-black font-bold pr-10">Signup</span>
                        </h3>
                        {loggedIn === 1 ?
                            <>
                                <h1 className="text-2xl font-medium py-4">Login</h1>
                                <button className="w-full bg-white text-black border border-black rounded p-2 font-medium">Continue with
                                    <span className="text-blue-500"> G</span>
                                    <span className="text-red-500">o</span>
                                    <span className="text-orange-500">o</span>
                                    <span className="text-blue-500">g</span>
                                    <span className="text-green-500">l</span>
                                    <span className="text-red-500">e</span>
                                </button>
                                <p className="p-3 text-center">or</p>
                                <div>
                                    <input type="email" placeholder="Email Address" className="w-full p-3 mb-4 rounded border-none bg-gray-100 text-black text-base" />
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" className="w-full p-3 rounded border-none bg-gray-100 text-black text-base" />
                                </div>
                                <p className="py-5 font-medium text-sm">Forgot Password?</p>
                                <button className="w-full bg-black text-white border border-black rounded p-2" onClick={() => setLoggedIn(2)}>Log In</button>
                                <p className="py-3 text-center text-base">Don't have an account? Signup</p>
                            </> :
                            loggedIn === 2 ?
                                <>
                                    <h1 className="text-3xl font-bold py-5">Signup</h1>
                                    <button className="w-full bg-white text-black border border-black rounded p-2 font-medium">Continue with
                                        <span className="text-blue-500"> G</span>
                                        <span className="text-red-500">o</span>
                                        <span className="text-orange-500">o</span>
                                        <span className="text-blue-500">g</span>
                                        <span className="text-green-500">l</span>
                                        <span className="text-red-500">e</span>
                                    </button>
                                    <p className="p-3 text-center">or</p>
                                    <div>
                                        <input type="text" placeholder="First Name" className="w-full p-2 mb-4 rounded border-none bg-gray-300 text-black text-base" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Last Name" className="w-full p-2 mb-4 rounded border-none bg-gray-300 text-black text-base" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email Address" className="w-full p-2 mb-4 rounded border-none bg-gray-300 text-black text-base" />
                                    </div>
                                    <div>
                                        <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded border-none bg-gray-300 text-black text-base" />
                                    </div>
                                    <div className="text-xs">
                                        <input type="checkbox" id="termsCheckbox" />
                                        <label htmlFor="termsCheckbox"><span> </span>I'd like to receive awesome emails and updates from GiveUmma</label>
                                    </div>
                                    <button className="w-full bg-black text-white border border-black rounded p-3 mt-5" onClick={() => setLoggedIn(1)}>Sign Up</button>
                                    <p className="py-3 text-center text-base">Already have an account? Login</p>
                                    <p className="text-center text-sm">By continuing, you agree with GiveUmma's Terms of Use and Privacy Policy</p>
                                </>:
                            null
                        }
                    </div>
                </div>   
            </div>
            )}
        </>
    );
}
export default Login;
