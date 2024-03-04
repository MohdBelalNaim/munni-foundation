import React,{useState} from "react";
import { PiChartLineUp, PiHandHeart } from "react-icons/pi";
import SignIn from "./SignIn";
import Link from 'next/link'
function Navigation(){
    const [showLogin, setShowLogin] = useState(false);
    return(
        <>
        <div className="sm:px-15 container mx-auto text-light text-black py-5 px-6 border-b border-gray-300 flex justify-between items-center max-sm:px-4 lg:px-36 max-sm:py-6">
            <div className="flex items-end gap-3">
                <img src="/logo.svg" alt="Ni load hua" className="w-[8%]" />
                <div className="text-sm">Munni Welfare Foundation</div>
            </div>
            <div className="max-sm:hidden flex gap-8 text-sm items-center">
            <div><Link href="/">Home</Link></div>
                <div>About</div>
                <div><Link href="/contact">Contact</Link></div>
                <div>Get Involved</div>
                <div onClick={() => setShowLogin(!showLogin)} style={{cursor:'pointer'}}>Login</div>
                <div className="text-secondary px-4 py-2 rounded-md text-xs  bg-primary flex items-center gap-2">
                Donate <PiHandHeart className="text-xl" />
                </div>
            </div>
        </div>
        {showLogin==true?<SignIn/>:null}
        </>
    )
}
export default Navigation;