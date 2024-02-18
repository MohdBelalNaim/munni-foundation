import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F9F5E8] w-full h-[271px] relative">

    <div className="flex justify-between items-center gap-10">

      <div className="justify-between items-center inline-flex">
        <p
          className="absolute top-[48px] left-[49px] font-bold text-base leading-[19.36px] text-[#000000] w-[87px] h-[19px]">
          Newsletter
        </p>
        <p className="absolute w[252px] h-[15px] top-[74px] left-[49px] font-normal text-xs leading-[14.52px]">
          Fill in your email to subscribe our newsletter.
        </p>

        <div className="flex absolute top-[104px] left-[49px] border-none w-[357px] h-[39px]">
          <input
            type="email" placeholder="Email"
            className="w-[257px] h-[39px] py-3 px-5 bg-[#EEEBE1] gap-[1px] text-[#525252] rounded-l-[5px]
          placeholder:h-[15px] placeholder:font-normal placeholder:text-xs placeholder:leading-[14.52px]"
          />
          <button className="bg-[#FFDA31] w-[100px] h-[39px] py-[2px] px-[20px] gap-[10px] rounded-r-[5px]">
            <span className="w-[57px] h-[15px] font-normal text-xs leading-[14.52px] text-[#303030]">Subscribe</span>
          </button>
        </div>
      </div>

      <div className="flex-col text-[#000000] text-nowrap ">
        <div className="flex justify-center items-center absolute top-[51px] right-[7%] gap-8">
          <Link href="#" className="w-[54px] h-[15px] font-medium text-xs leading-[14.52px]">About Us</Link>
          <Image width={20} height={20} src="/twitter-x-line.svg" alt="About us logo"/>
        </div>

        <div className="flex justify-center items-center absolute top-[84px] right-[7%] gap-8">
          <Link href="#" className="w-[54px] h-[15px]  font-medium text-xs leading-[14.52px]">Campaigns</Link>
          <Image width={20} height={20} src="/facebook-box-fill.svg" alt="About us logo"/>
        </div>

        <div className="flex justify-center items-center absolute top-[117px] right-[7%] gap-8">
          <Link href="#" className="w-[54px] h-[15px]  font-medium text-xs leading-[14.52px]">Contact Us</Link>
          <Image width={20} height={20} src="/linkedin-box-fill.svg" alt="About us logo"/>
        </div>
      </div>

    </div>

    <hr className="border-[#FFDA31] w-[90%] top-[178px] left-[49px] border-1 absolute"/>


    <div className="flex justify-between items-center w-[1300px] h-[20px] absolute top-[203px] left-[49px] gap-[437px]">

      <div className="w-[85px] h-[20px] gap-[8px] flex items-center">

        <Image width={20} height={20} src="/copyright-line.svg" alt="copy-right logo"/>

        <span className="w-[57px] h-[15px] font-medium text-xs leading-[14.52px] text-[#303030]">Copyright</span>

      </div>

      <div className="w-[208px] h-[15px] gap-[16px] flex items-center text-nowrap">

        <span className="w-[80px] h-[15px] font-medium text-xs leading-[14.52px] text-[#303030]">Privacy Policy</span>

        <span className="w-[80px] h-[15px] font-medium text-xs leading-[14.52px] text-[#303030]">Terms & Conditions</span>

      </div>

    </div>

  </footer>
  );
};

export default Footer;
