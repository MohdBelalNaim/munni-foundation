"use client";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function EditProfile(){
    const [isVisible, setIsVisible] = useState(true)
    return(
      <>
        {isVisible && (
          <div className="fixed inset-0 glass z-50 grid place-items-center">
          <div className="bg-white relative rounded-md w-[min(440px,96%)]">
          <FontAwesomeIcon icon={faTimes} onClick={() => setIsVisible(false)} className="absolute cursor-pointer text-black font-bold px-4 pt-4" />
            <div className="text-lg font-medium text-center p-3 border-b">
              Edit Your Profile
            </div>
            <div className="p-8 space-y-5">
              <input
                type="text"
                className="w-full border-b p-3 mb-1 text-sm"
                placeholder="Name"
              />
              <input
                type="tel"
                className="w-full border-b p-3 text-sm"
                placeholder="Phone number"
              />
              <input
                type="date"
                className="w-full border-b p-3 text-sm"
                placeholder="Date of Birth"
              />
              <input
                type="tel"
                className="w-full border-b p-3 text-sm"
                placeholder="PAN Number"
              />
              <input
                type="tel"
                className="w-full border-b p-3 text-sm"
                placeholder="Aadhar Number"
              />
              <input
                type="tel"
                className="w-full border-b p-3 text-sm"
                placeholder="Address"
              />
              <div className="flex justify-center mt-4">
                <button className="text-sm px-4 py-2 bg-secondary text-white rounded-full">Update Profile</button>
              </div>
              
            </div>
          </div>
        </div>
        )}
      </>
    );
}
export default EditProfile