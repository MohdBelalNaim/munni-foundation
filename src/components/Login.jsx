import React,{useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {app} from "../firebase";
import Google from "./Google";
import ForgotPass from "./ForgotPass";

const auth = getAuth(app);

function Login(){
    const [email,setemail] = useState("");
    const [password,setpassword] = useState("");
    const [forgotpass,setforgotpass] = useState(false);

    const logIn = () => {
        signInWithEmailAndPassword(auth, email,password).then((value) => alert("Log In Success")).catch((err)=> console.log(err));
      };

    return(
        <>
        <h1 className="text-3xl font-bold py-4">Login</h1>
        <Google></Google>
        <p className="p-3 text-center">or</p>
        <div>
            <input type="email" placeholder="Email Address" className="bg-gray-100 border-gray-300 w-full py-3 px-4 shadow-inner rounded-lg" onChange={(e) => setemail(e.target.value)} value={email}/>
        </div>
        <div>
            <input type="password" placeholder="Password" className="bg-gray-100 border-gray-300 w-full py-3 px-4 mt-3 shadow-inner rounded-lg"  onChange={(e) => setpassword(e.target.value)} value={password}/>
        </div>
        <p className="py-5 font-bold text-base cursor-pointer" onClick={() => setforgotpass(!forgotpass)}>Forgot Password?</p>
        <button className="w-full bg-black text-white border border-black rounded-lg p-2" onClick={logIn}>Log In</button>
        
        {forgotpass == true ? <ForgotPass /> : null}
        </>
    );
}
export default Login;