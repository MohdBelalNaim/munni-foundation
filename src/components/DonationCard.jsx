import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from "react";

function DonationCard(){
  const [isVisible, setIsVisible] = useState(true)
  return(
    <>
      {isVisible && (
        <div className="fixed inset-0 glass z-50 flex justify-center items-center">
          <div className="bg-white relative rounded-md w-[90%] md:w-[440px]">
          <FontAwesomeIcon icon={faTimes} onClick={() => setIsVisible(false)} className="absolute cursor-pointer text-black font-bold px-4 pt-4" />
            <div className="md:text-lg text-sm font-medium text-center p-3 pt-4 border-b">
              Choose a donation amount
            </div>
            <div className="p-4 md:p-8 space-y-5">
              <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                <div className="flex flex-wrap justify-center">
                  <input type="radio" name="amount" className="checked:bg-secondary checked:text-white appearance-none before:content-['$199'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full mb-2 md:mb-0 mr-2"/>
                  <input type="radio" name="amount" className="checked:bg-secondary checked:text-white appearance-none before:content-['$299'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full mb-2 md:mb-0"/>
                </div>
                <div className="flex flex-wrap justify-center">
                  <input type="radio" name="amount" className="checked:bg-secondary checked:text-white appearance-none before:content-['$999'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full mb-2 md:mb-0 mr-2"/>
                  <input type="radio" name="amount" className="checked:bg-secondary checked:text-white appearance-none before:content-['Other'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full mb-2 md:mb-0"/>
                </div>
              </div>
              <input
                type="text"
                className="w-full border-b py-3 mb-1 text-sm"
                placeholder="Full Name"
              />
              <label className="flex text-xs gap-3 mb-2">
                <input type="checkbox" name="" id="" />
                <div className="text-gray-500">Make this donation anonymous</div>
              </label>
              <input
                type="email"
                className="w-full border-b py-3 text-sm"
                placeholder="Email Address"
              />
              <input
                type="tel"
                className="w-full border-b py-3 text-sm"
                placeholder="Phone number"
              />
              <input
                type="tel"
                className="w-full border-b py-3 text-sm"
                placeholder="Address"
              />
              <div className="flex justify-center mt-4">
                <button className="text-sm px-4 py-2 bg-secondary text-white rounded-full">Proceed to Pay</button>
              </div>
              <div className="text-xs mt-4">
                By continuing, You agree to terms and conditions of Munni Welfare Foundation
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DonationCard;
