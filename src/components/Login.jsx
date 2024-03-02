import React from "react";
import Google from "./Google";
function Login(){
    return(
        <>
        <h1 className="text-3xl font-bold py-4">Login</h1>
        <Google></Google>
        <p className="p-3 text-center">or</p>
        <div>
            <input type="email" placeholder="Email Address" className="w-full p-2 mb-4 rounded border-none bg-gray-300 text-black text-base" />
        </div>
        <div>
            <input type="password" placeholder="Password" className="w-full p-2 rounded border-none bg-gray-300 text-black text-base" />
        </div>
        <p className="py-5 font-bold text-base">Forgot Password?</p>
        <button className="w-full bg-black text-white border border-black rounded p-2" onClick={() => setLoggedIn(2)}>Log In</button>
        <p className="py-3 text-center text-base">Don&apos;t have an account? Signup</p>
        </>
    );
}
export default Login;