import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-yellow-50 py-12 px-12">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2 pr-8">
          <h4 className="text-xl font-bold mb-4 ">Newsletter</h4>
          <p className="text-sm mb-4 mt-[-0.5rem]">
            Fill in your email to subscribe to our newsletter
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email"
              className="bg-[#EEEBE1]	 text-black px-4 py-2 rounded-l focus:outline-none w-2/4"
            />
            <button className="bg-yellow-300 text-black px-4 py-2  rounded-r text-sm">
              Subscribe
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end">
          <div className="mr-8">
            <h6 className="mb-4">About Us</h6>
            <h4 className="mb-4">Campaigns</h4>
            <h4 className="mb-4">Contact Us</h4>
          </div>
          <div className="flex flex-col items-end">
            <FaTwitterSquare size={24} className="mb-4" />
            <FaFacebookSquare size={24} className="mb-4" />
            <FaLinkedin size={24} className="mb-4" />
          </div>
        </div>
      </div>
      <hr className="my-8 bg-yellow-300 h-[0.15rem]  " />
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-1/2">
          <p className="text-xs flex items-center">
            <span className="text-xl mr-1">&copy;</span> Copyright
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <p className="mr-4 text-sm">Privacy Policy</p>
          <p className="text-sm">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
