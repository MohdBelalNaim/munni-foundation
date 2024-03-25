import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { PiHandHeart } from "react-icons/pi";
import "animate.css";
import SignIn from "./SignIn";
import { MdCall } from "react-icons/md";
import Link from "next/link";

function PhoneNav() {
  const [isVisible, setIsVisible] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex justify-end md:hidden">
          <div className="w-full">
            <div className="px-8 py-12 bg-white text-black">
              <div>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={() => setIsVisible(false)}
                  className="cursor-pointer text-black font-bold float-end text-3xl"
                />
              </div>
              <div className="my-14 pr-20 pb-16">
                <div className="py-2 font-bold">
                  <Link href="/">Home</Link>
                </div>
                <div className="py-2 font-bold">
                  <Link href="/about">About</Link>
                </div>
                <div className="py-2 font-bold">
                  <Link href="/contact">Contact</Link>
                </div>
                <div className="py-2 font-bold">Get Involved</div>
                <div
                  className="py-2 font-bold"
                  onClick={() => setShowLogin(!showLogin)}
                >
                  Login
                </div>
                <div className="py-2 font-bold">
                  <Link href="/profile">My Profile</Link>
                </div>
                <div className="py-2 font-bold">
                  <Link href="/create-campaign">Create Campaign</Link>
                </div>
                <div className="py-2 font-bold">
                  <Link href="/campaign">
                    <div className="text-secondary px-4 py-2 rounded-md w-[125px]  bg-primary flex items-center gap-2">
                    Donate<PiHandHeart className="text-xl"/>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="flex items-end justify-end">
                <MdCall className="cursor-pointer text-black font-bold float-end text-5xl" />
              </div>
            </div>
          </div>
        </div>
      )}
      {showLogin == true ? <SignIn /> : null}
    </>
  );
}

export default PhoneNav;
