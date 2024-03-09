import React from "react";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BiDonateHeart } from "react-icons/bi";
import { RiHeartAddLine } from "react-icons/ri";
import { IoPeopleOutline } from "react-icons/io5";
import Footer from "@/components/Footer";
import Navigation from "@/components/NavigationBar";

function About() {
  return (
    <>
      <div>
        <Navigation />

        <div className="bg-primary py-8 rounded-b-3xl shadow-2xl shadow-gray-500 flex lg:px-36 lg:gap-14 gap-8 flex-col md:flex-row">
          <div className="flex flex-col md:w-2/5 gap-4 mx-4 xl:my-8">
            <div className="flex h-1/2 gap-4">
              <div className="w-1/2 overflow-hidden rounded-t-2xl rounded-bl-2xl">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682092585257-58d1c813d9b4?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBvb3IlMjBjaGlsZHxlbnwwfHwwfHx8MA%3D%3D"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 overflow-hidden rounded-t-2xl rounded-br-2xl">
                <img
                  src="https://i0.wp.com/ketto.blog/wp-content/uploads/2022/12/5-ways-you-can-use-your-financial-power-to-help-poor-children.png?fit=1920%2C1080&ssl=1"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex h-1/2 gap-4">
              <div className="w-1/2 overflow-hidden rounded-b-2xl rounded-tl-2xl">
                <img
                  src="https://www.humanium.org/en/wp-content/uploads/2024/02/shutterstock_2310995339-1024x680.jpg"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
              <div className="w-1/2 overflow-hidden rounded-b-2xl rounded-tr-2xl">
                <img
                  src="https://assets.gogetfunding.com/wp-content/uploads/2019/04/6075001/img/poverty-in-india-01.jpg"
                  alt=""
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="md:w-3/5 lg:px-0 px-4 flex flex-col justify-center lg:gap-8 lg:gap-4 gap-2">
            <div className="lg:text-3xl text-lg font-bold">
              Empowering ordinary people to do the extraordinary
            </div>
            <div className="lg:text-xl text-sm">
              Thousands who had never imagined it before have saved lives on
              Munni Welfare Foundation
            </div>
          </div>
        </div>

        <div className="lg:mx-36">
          <h1 className="text-center lg:mt-20 mt-14 mb-2 font-bold lg:text-xl text-lg lg:px-0 px-4">
            We found the solution for the need of the Hour
          </h1>
          <div className="flex justify-center">
            <hr className="bg-yellow-300 h-[0.2rem] w-[100px]" />
          </div>

          <div className="lg:pt-8 pt-4 lg:px-0 px-4 lg:text-sm text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            natus, accusantium molestias deleniti, minima itaque dolore mollitia
            dolor nostrum ratione eveniet nisi similique nam possimus iusto sint
            nobis hic labore eos blanditiis nemo excepturi modi. Quaerat
            laboriosam ex delectus repellat maiores tempora soluta pariatur
            obcaecati minus odio enim velit architecto eos harum amet deserunt
            tenetur laudantium, incidunt voluptatum id quasi. Minima pariatur
            voluptates suscipit cum, non corporis blanditiis consequatur, autem
            repellendus nulla minus nesciunt harum itaque animi inventore fugiat
            quae.
          </div>
          <div className="pt-4 lg:px-0 px-4 lg:text-sm text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            natus, accusantium molestias deleniti, minima itaque dolore mollitia
            dolor nostrum ratione eveniet nisi similique nam possimus iusto sint
            nobis hic labore eos blanditiis nemo excepturi modi. Quaerat
            laboriosam ex delectus repellat maiores tempora soluta pariatur
            obcaecati minus odio enim velit architecto eos harum amet deserunt
            tenetur laudantium, incidunt voluptatum id quasi. Minima pariatur
            voluptates suscipit cum, non corporis blanditiis consequatur, autem
            repellendus nulla minus nesciunt harum itaque animi inventore fugiat
            quae.
          </div>
        </div>

        <div className=" lg:mx-36 md:mx-4">
          <h1 className="text-center lg:mt-14 mt-8 mb-2 font-bold text-xl">
            Our Impact
          </h1>
          <div className="flex justify-center">
            <hr className="bg-yellow-300 h-[0.2rem] w-[100px]" />
          </div>
          <div className="flex justify-between lg:mt-14 mt-8 md:flex-row flex-col lg:gap-0 gap-8">
            <div>
              <div className="flex items-center justify-center gap-2">
                <FaIndianRupeeSign size={30} />
                <p className="lg:text-3xl text-2xl font-bold">1587</p>
              </div>
              <div className="text-center lg:text-sm text-xs">Crores raised</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <BiDonateHeart size={35} />
                <p className="lg:text-3xl text-2xl font-bold">3599</p>
              </div>
              <div className="text-center lg:text-sm text-xs">Medical Fundraisers</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <RiHeartAddLine size={30} />
                <p className="lg:text-3xl text-2xl font-bold">13452</p>
              </div>
              <div className="text-center lg:text-sm text-xs">Other Fundraisers</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-2">
                <IoPeopleOutline size={30} />
                <p className="lg:text-3xl text-2xl font-bold">8743</p>
              </div>
              <div className="text-center lg:text-sm text-xs">Individuals</div>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col-reverse lg:w-5/6 bg-secondary lg:rounded-r-3xl mt-20 shadow-2xl shadow-gray-500">
          <div className="lg:w-2/3 p-4 flex justify-center flex-col">
            <h1 className="text-white text-center mb-2 md:text-xl text-base">Lorem Ipsum</h1>
            <div className="flex justify-center">
              <hr className="bg-yellow-300 h-[0.2rem] w-[100px]" />
            </div>
            <p className="text-white mt-4 md:text-sm text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              rerum voluptatibus laboriosam ut praesentium sed, dolor atque
              distinctio id nostrum quaerat exercitationem magnam aspernatur
              odit numquam, voluptas eveniet, quis quo doloremque expedita
              obcaecati repellat itaque possimus! Ad, ratione architecto
              laudantium voluptatum facere, corporis fugiat hic at quia vitae,
              molestiae odit dolores quos blanditiis eaque! Obcaecati, fugit
              aliquam, quisquam voluptas asperiores?
            </p>
          </div>
          <div className="flex lg:w-1/3 items-center lg:justify-end justify-center">
            <div className=" overflow-hidden lg:rounded-r-3xl">
              <img
                src="https://i.pinimg.com/736x/8a/df/8f/8adf8f894d42777f24259da50774d05c.jpg"
                alt=""
                className="hover:scale-125 duration-1000 h-[300px] lg:rounded-r-3xl "
              />
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col lg:w-5/6 bg-secondary lg:rounded-l-3xl mr-0 ml-auto mt-20 shadow-2xl shadow-gray-500 lg:mb-20 mb-14">
          <div className="flex lg:w-1/3 items-center lg:justify-start justify-center">
            <div className=" overflow-hidden lg:rounded-l-3xl">
              <img
                src="https://st5.depositphotos.com/54027770/65026/i/450/depositphotos_650260244-stock-photo-hanging-pillar-saline-solution-fluid.jpg"
                alt=""
                className="hover:scale-125 duration-1000 h-[300px] lg:rounded-l-3xl"
              />
            </div>
          </div>
          <div className="lg:w-2/3 p-4 flex justify-center flex-col">
            <h1 className="text-white text-center mb-2 md:text-xl text-base">Lorem Ipsum</h1>
            <div className="flex justify-center">
              <hr className="bg-yellow-300 h-[0.2rem] w-[100px]" />
            </div>
            <p className="text-white mt-4 text-justify md:text-sm text-xs">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              rerum voluptatibus laboriosam ut praesentium sed, dolor atque
              distinctio id nostrum quaerat exercitationem magnam aspernatur
              odit numquam, voluptas eveniet, quis quo doloremque expedita
              obcaecati repellat itaque possimus! Ad, ratione architecto
              laudantium voluptatum facere, corporis fugiat hic at quia vitae,
              molestiae odit dolores quos blanditiis eaque! Obcaecati, fugit
              aliquam, quisquam voluptas asperiores?
            </p>
          </div>
        </div>

        <div className="lg:mx-36 mx-4">
          <h1 className="text-center lg:mt-20 mt-4 mb-2 font-bold text-xl">Our Journey</h1>
          <div className="flex justify-center">
            <hr className="bg-yellow-300 h-[0.2rem] w-[100px]" />
          </div>
          <div className="lg:mt-14 mt-8 lg:mb-24 mb-14">
            <img src="https://s3.amazonaws.com/i.snag.gy/6o9KMs.jpg" alt="" class="w-full h-full object-cover"/>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
export default About;
