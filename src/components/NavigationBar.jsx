"use client";
import React, { useState } from "react";
import { PiHandHeart } from "react-icons/pi";
import { GiHamburgerMenu } from "react-icons/gi";
import SignIn from "./SignIn";
import Link from "next/link";
import PhoneNav from "./PhoneNav";
function Navigation() {
  const [showNav, setshowNav] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <div className="py-4 border-b">
        <div className="flex items-center justify-between container mx-auto">
          <div className="flex items-end gap-3">
            <img src="/logo.svg" alt="Ni load hua" className="w-[8%]" />
            <div className="text-sm">Munni Welfare Foundation</div>
          </div>
          <button type="button" class="md:hidden">
          <GiHamburgerMenu onClick={() => setshowNav(!showNav)}/>
          </button>
          <div className="max-sm:hidden flex lg:gap-8 gap-4 text-sm items-center">
            <div>
              <Link href="/">Home</Link>
            </div>
            <div>
              <Link href="/about">About</Link>
            </div>
            <div>
              <Link href="/contact">Contact</Link>
            </div>
            <div>Get Involved</div>
            <div
              onClick={() => setShowLogin(!showLogin)}
              style={{ cursor: "pointer" }}
            >
              Login
            </div>
            <div>
              <Link href="/profile">My Profile</Link>
            </div>
            <div>
              <Link href="/create-campaign">Create Campaign</Link>
            </div>
            <Link href="/campaign">
              <div className="text-secondary px-4 py-2 rounded-md text-xs  bg-primary flex items-center gap-2">
                Donate <PiHandHeart className="text-xl" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      {showNav == true ? <PhoneNav /> : null}
      {showLogin == true ? <SignIn /> : null}
    </>
  );
}
export default Navigation;
