"use client";
import React from "react";
import { useState } from "react";
import { FaDonate } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaCalendar } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaEnvelope, FaLink } from "react-icons/fa";
import Navigation from "@/components/NavigationBar";
import EditProfile from "@/components/EditProfile";

function Profile() {
  const [editProfile, seteditProfile] = useState(false);
  return (
    <>
      <Navigation></Navigation>
      <div>
        <div className="lg:mx-36 relative rounded-xl overflow-hidden border border-gray-200 bg-white my-8 lg:pl-14 px-4 py-4 mx-4">
          <div className="flex justify-end lg:mr-8 absolute right-0">
            <button className="bg-secondary text-white px-8 py-2 mx-4  rounded-full max-sm:hidden" onClick={()=>seteditProfile(!editProfile)}>
              EDIT
            </button>
          </div>

          <div className="flex lg:gap-20 gap-5 mb-4">
            <img
              src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt=""
              width="100px"
              height="100px"
              className="rounded-full"
            />
            <div className="pt-8">
              <p className="lg:text-lg text-gray-500">Name</p>
              <p className="lg:text-xl">Sajad Ahmed</p>
            </div>
          </div>

          <div className="flex lg:flex-row flex-col lg:gap-14 justify-between pr-14">
            <div>
              <div className="mb-4">
                <p className="lg:text-lg text-gray-500">Email</p>
                <p className="lg:text-xl">sajadkhaki09@gmail.com</p>
              </div>
              <div className="mb-4">
                <p className="lg:text-lg text-gray-500">Phone Number</p>
                <p className="lg:text-xl">+91-8379912482</p>
              </div>
              <div className="mb-4">
                <p className="lg:text-lg text-gray-500">PAN Number</p>
                <p className="lg:text-xl">BTLPA4771TA</p>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <p className="lg:text-lg text-gray-500">Date of Birth</p>
                <p className="lg:text-xl">15-05-1997</p>
              </div>
              <div className="mb-4">
                <p className="lg:text-lg text-gray-500">City of Residence</p>
                <p className="lg:text-xl">Poonch, Jammu And Kashmir</p>
              </div>
              <div className="mb-4">
                <p className="lg:text-lg text-gray-500">Aadhar Number</p>
                <p className="lg:text-xl">**********2554</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:hidden md:hidden">
            <button className="bg-secondary text-white px-8 py-2 rounded-full">
              EDIT
            </button>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between rounded-xl overflow-hidden border border-gray-200 bg-white lg:mx-36 mx-4 mb-8 lg:px-14 px-4 py-8">
          <div className="flex pb-8 lg:pb-0 gap-4 items-center">
            <div>
              <FaDonate size={40} />
            </div>
            <div>
              <p>-</p>
              <p>Donations Made</p>
            </div>
          </div>
          <div className="flex pb-8 lg:pb-0 gap-4 items-center">
            <div>
              <FaRupeeSign size={40} />
            </div>
            <div>
              <p>-</p>
              <p>Last Donation Amount</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div>
              <FaCalendar size={40} />
            </div>
            <div>
              <p>-</p>
              <p>Last Donation Date</p>
            </div>
          </div>
        </div>

        <div className="lg:mx-36 rounded-xl overflow-hidden border border-gray-200 bg-white my-8 lg:px-14 px-4 py-8 mx-4">
          <div className="flex justify-center xl:flex-row flex-col xl:gap-24">
            <div className=" xl:w-3/5 ">
              <div className="flex xl:flex-row flex-col">
                <div class="flex justify-center">
                  <img
                    src="https://i.postimg.cc/BnM06wc8/695849-farmer-died-970.webp"
                    alt=""
                    class="w-full sm:w-full md:w-full lg:w-full xl:w-60 xl:h-30"
                  />
                </div>
                <div className="xl:px-4 py-4">
                  <p className="text-lg lg:text-xl">
                    Help a farmer to feed and educate his 7 little girls
                  </p>
                  <p className="py-2 text-xs md:text-sm lg:text-sm">
                    <a href="">Post An Update</a>
                  </p>
                  <button className="bg-red-700 text-white px-8 py-1 rounded-lg">
                    Expired
                  </button>
                </div>
              </div>

              <div className="flex lg:gap-14 lg:flex-row flex-col justify-between">
                <div className="flex gap-4 xl:px-4 my-4">
                  <div>
                    <BiSolidDonateHeart size={50} />
                  </div>
                  <div>
                    <p className="font-bold text-xl">0</p>
                    <p className="text-sm">Fund Raised</p>
                  </div>
                </div>
                <div className="flex gap-4 xl:px-4 my-4 items-center">
                  <div>
                    <FaCalendar size={40} />
                  </div>
                  <div>
                    <p className="font-bold text-xl">0</p>
                    <p className="text-sm">Days To Go</p>
                  </div>
                </div>
                <div className="flex gap-4 xl:px-4 my-4 items-center">
                  <div>
                    <FaEye size={45} />
                  </div>
                  <div>
                    <p className="font-bold text-xl">3</p>
                    <p className="text-sm">Views</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="xl:w-2/5">
              <div class="flex lg:flex-row md:flex-row flex-col justify-center gap-5 pt-4">
                <button class="bg-secondary text-white lg:text-md xl:text-lg py-2 text-sm rounded-full flex-grow">
                  PERFORMANCE
                </button>
                <button class="bg-secondary text-white lg:text-md xl:text-lg py-2 text-sm rounded-full flex-grow">
                  EDIT
                </button>
              </div>
              <div class="flex justify-center mt-2 mb-6">
                <button class="bg-secondary text-white lg:text-md xl:text-lg py-2 text-sm rounded-full my-2 flex-grow">
                  UPLOAD DOCUMENTS
                </button>
              </div>

              <hr />
              <p className="my-2">
                Keep sharing to increase your fundraiser search
              </p>
              <div className="flex justify-between mb-8">
                <FaFacebook size={30} />
                <FaInstagram size={30} />
                <FaEnvelope size={30} />
                <FaLink size={30} />
              </div>
            </div>

          </div>

          <hr />

          <div className="flex justify-center mt-8">
            <button className="bg-secondary lg:text-md xl:text-lg text-sm text-white px-14 py-2 rounded-full my-2">
              WITHDRAW FUNDS
            </button>
          </div>

        </div>
      </div>

      {editProfile == true ? <EditProfile/> : null}
    </>
  );
}
export default Profile;
