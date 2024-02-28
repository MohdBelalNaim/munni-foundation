import Footer from "@/components/Footer";
import React from "react";
import { BsFlag, BsPerson, BsPhone,  BsShieldCheck, BsStar, BsTags } from "react-icons/bs";
import { PiChartLineUp, PiHandHeart } from "react-icons/pi";
const Details = () => {
  return (
    <>
      {/* <div className="fixed inset-0 glass z-50 grid place-items-center">
        <div className="bg-white rounded-md w-[min(440px,96%)]">
          <div className="text-lg font-medium text-center p-3 border-b">
            Choose a donation amount
          </div>
          <div className="p-8 space-y-5">
            <div className="mb-5 flex items-center justify-center gap-4 ">
              <input type="radio" name="amount" className="checked:bg-secondary checked:text-white appearance-none before:content-['$199'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full"/>
              <input type="radio" name="amount" className="checked:bg-secondary checked:text-white appearance-none before:content-['$299'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full"/>
              <input type="radio" name="amount" className="checked:bg-secondary checked:text-white appearance-none before:content-['$999'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full"/>
              <input type="radio" name="amount" className="checked:bg-secondary checked:text-white appearance-none before:content-['Other'] hover:bg-[#202e52] hover:text-white cursor-pointer border text-sm px-6 py-2 rounded-full"/>
              
              
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
              By continung, You agree to terms and conditions of Munni Welfare Foundation
            </div>
          </div>
        </div>
      </div> */}

      <div className="sm:px-15 container mx-auto text-light text-black py-5  px-6 border-b border-gray-300 flex justify-between items-center max-sm:px-4 max-sm:py-6">
        <div className="flex items-end gap-3">
          <img src="/logo.svg" alt="Ni load hua" className="w-[8%]" />
          <div className="text-sm">Munni Foundation</div>
        </div>
        <div className="max-sm:hidden flex gap-8 text-sm items-center">
          <div>Home</div>
          <div>About</div>
          <div>Contact</div>
          <div>Get Involved</div>
          <div className="text-secondary px-4 py-2 rounded-md text-xs  bg-primary flex items-center gap-2">
            Donate <PiHandHeart className="text-xl" />
          </div>
        </div>
      </div>

      <div className="py-5 px-5 container max-sm:px-4 max-sm:py-6">
        <div className="text-3xl font-medium mt-4 mb-4 max-sm:mb-0 max-sm:mt-0">
          Adamas against Neuroblastoma
        </div>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-[1.3fr,0.7fr]">
          
          <div>
            <img
              src="https://muslimhands.ca/_ui/images/fc575db486cb.jpg"
              className="w-full h-[400px] mt-4 object-cover rounded-xl"
              alt=""
            />
            <div className="flex items-center gap-4 border-b border-gray-300 py-4">
              <div className="bg-gray-100 w-max p-2 rounded-full">
                <BsPerson size={22} />
              </div>
              <div className="text-sm">
                Urooj khan has started this fundraiser
              </div>
            </div>
            <div className="flex items-center gap-4 border-b border-gray-300 py-4 text-sm">
              Created 5 days ago
              <span>•</span>
              <div className="flex items-center gap-2">
                <BsTags size={18} /> Medical
              </div>
            </div>
            <div className="text-sm mt-5 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              dolorem atque incidunt porro ea, necessitatibus molestiae harum
              quas distinctio officia saepe eveniet reprehenderit laborum
              recusandae eligendi quae quibusdam dolor? Beatae. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sed dolorem atque
              incidunt porro ea, necessitatibus molestiae harum quas distinctio
              officia saepe eveniet reprehenderit laborum recusandae eligendi
              quae quibusdam dolor? Beatae. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Sed dolorem atque incidunt porro ea,
              necessitatibus molestiae harum quas distinctio officia saepe
              eveniet reprehenderit laborum recusandae eligendi quae quibusdam
              dolor? Beatae. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Sed dolorem atque incidunt porro ea, necessitatibus
              molestiae harum quas distinctio officia saepe eveniet
              reprehenderit laborum recusandae eligendi quae quibusdam dolor?
              Beatae.
            </div>
            <div className="flex gap-5 py-5 border-b border-gray-300">
              <button className="font-medium w-full border border-gray-300 py-2 rounded-lg shadow">
                Donate
              </button>
              <button className="font-medium w-full border border-gray-300 py-2 rounded-lg shadow">
                Share
              </button>
            </div>
            <div className="py-7 border-b border-gray-300">
              <div className="font-medium text-2xl">Organiser</div>
              <div className="flex items-start gap-4 mt-5">
                <div className="bg-gray-100 w-max p-2 rounded-full">
                  <BsPerson size={22} />
                </div>
                <div className="grid gap-y-1">
                  <div className="font-medium">Urooj Khan</div>
                  <div className="text-sm">Organiser</div>
                  <div className="text-sm">India</div>
                  <button className="font-medium text-xs mt-4 border border-gray-300 py-2 rounded-lg shadow">
                    Contact
                  </button>
                </div>
              </div>
            </div>
            <div className="py-7 border-b border-gray-300">
              <div className="font-medium text-2xl">Words of support (21)</div>
              <div className="text-gray-500 text-sm mt-3">
                Please donate to share the words of support
              </div>
              <div className="grid gap-y-4 mt-3">
                {"abc".split("").map((item, index) => {
                  return (
                    <div key={index} className="flex items-start gap-4 mt-5">
                      <div className="bg-gray-100 w-max p-2 rounded-full">
                        <PiHandHeart size={22} />
                      </div>
                      <div className="grid gap-y-1">
                        <div className="font-medium">Mohd Belal Naim</div>
                        <div className="text-[14px] text-gray-500">
                          $10 • <span>6 hours ago</span>
                        </div>
                        <div className="text-sm text-gray-500 max-w-[80%] text-justify">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Nostrum, recusandae reiciendis laboriosam
                          sapiente ad dolores consequuntur
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex items-center gap-4 py-5">
              <BsFlag size={24} />
              Report this fundraiser
            </div>
          </div>

          <div>
            <div className="border shadow-md sticky top-5 rounded-lg mt-4 p-4 grid gap-y-3">
              <div className="text-xl">
                $5,200{" "}
                <span className="text-sm text-gray-500">
                  raised of $10,000 target
                </span>{" "}
              </div>
              <div className="w-full rounded-full bg-gray-400 h-1">
                <div className="w-1/2 rounded-full bg-secondary h-1"></div>
              </div>
              <div className="text-sm text-gray-500">2.9k donations</div>
              <button className="w-full text-sm bg-secondary text-white py-3 rounded-md mt-4">
                Donate
              </button>
              <div className="mt-3 flex text-sm font-medium gap-4 items-center text-secondary">
                <div className="bg-[#202e5223] p-2 rounded-full">
                  {" "}
                  <PiChartLineUp size={22} />
                </div>
                1.2k people have recently donated to this fundraiser
              </div>
              <div>
                {"abc".split("").map((item, index) => {
                  return (
                    <div key={index} className="flex items-start gap-4 mt-2">
                      <div className="bg-gray-100 w-max p-2 rounded-full">
                        <PiHandHeart size={22} />
                      </div>
                      <div className="grid gap-y-3">
                        <div className="text-sm">Mohd Belal Naim</div>
                        <div className="text-xs text-gray-500">
                          $10 • <span>6 hours ago</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-4 mt-5">
                <button className="w-full py-2 border rounded-lg text-sm">
                  See all
                </button>
                <button className="flex items-center gap-2 justify-center w-full py-2 border rounded-lg text-sm">
                  <BsStar />
                  See top
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Details;
