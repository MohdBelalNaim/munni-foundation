import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function Google(){
  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((value) =>
    console.log(value)
  );
  };
    
    return(
        <button onClick={signUpWithGoogle} className="w-full bg-white text-black border border-black rounded p-2 font-bold">Continue with
            <span className="text-blue-500"> G</span>
            <span className="text-red-500">o</span>
            <span className="text-orange-500">o</span>
            <span className="text-blue-500">g</span>
            <span className="text-green-500">l</span>
            <span className="text-red-500">e</span>
        </button>
    );
}
export default Google; 