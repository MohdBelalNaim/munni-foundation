import React from "react";
import Google from "./Google";
function Signup(){
    return(
    <>
    <h1 className="text-3xl font-bold py-5">Signup</h1>
    <Google></Google>
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
        <label htmlFor="termsCheckbox"><span> </span>I&apos;d like to receive awesome emails and updates from GiveUmma</label>
    </div>
    <button className="w-full bg-black text-white border border-black rounded p-3 mt-5" onClick={() => setLoggedIn(1)}>Sign Up</button>
    <p className="py-3 text-center text-base">Already have an account? Login</p>
    <p className="text-center text-sm">By continuing, you agree with GiveUmma&apos;s Terms of Use and Privacy Policy</p>
    </>
    );
}
export default Signup;