import { VscQuote } from "react-icons/vsc";
import { PiHandHeart } from "react-icons/pi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { FaChild } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import CampaignCard from "@/components/CampaignCard";

const Home = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage:
            "url('https://www.cry.org/wp-content/uploads/Poverty-In-India.png')",
        }}
        className="bg-cover "
      >
        <div className="inset-0 backdrop-brightness-50">
          <div className="container mx-auto">
            <div className="text-light text-white py-12 flex justify-between items-center">
              <div className="flex items-end gap-3">
                <img src="/logo.svg" alt="Ni load hua" className="w-[8%]" />
                <div className="text-sm">Munni Foundation</div>
              </div>
              <div className="flex gap-8 text-sm items-center">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
                <div>Get Involved</div>
                <div className="text-secondary px-4 py-2 rounded-md text-xs  bg-primary flex items-center gap-2">
                  Donate <PiHandHeart className="text-xl" />
                </div>
              </div>
            </div>
            <div className="h-[500px] grid content-center justify-items-start">
              <div className="font-medium text-white text-5xl w-[26%]">
                Children
                &apos;s joy is play
              </div>
              <div className="text-primary mt-4 text-lg w-[26%]">
                OUR MISSION
              </div>
              <div className="text-white mt-4 text-sm w-[26%]">
                to warm a child
                &apos;s heart through coordinated play
              </div>
              <button className="bg-primary px-6 rounded-md mt-8 py-4 font-medium">
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          backgroundImage: "linear-gradient(90deg,white 55%,#ecd06f 0)",
        }}
      >
        <div className="grid grid-cols-2 container mx-auto">
          <div className="grid place-items-center">
            <div>
              <div className="text-2xl font-medium text-secondary">
                Smile challenge
              </div>
              <div className="text-sm mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestias hic quis ab tenetur natus iure sapiente eveniet
                ducimus dolores minus impedit doloribus, obcaecati saepe laborum
                laudantium architecto placeat enim. Reiciendis. Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Molestias hic quis
                ab tenetur natus iure sapiente eveniet ducimus dolores minus
                impedit doloribus, obcaecati saepe laborum laudantium architecto
                placeat enim. Reiciendis.
              </div>
            </div>
          </div>
          <div className="text-black grid place-items-center py-16">
            <div className="text-3xl italic w-[52%]">
              <VscQuote className="text-3xl" />
              There is so much joy you can share in this world
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="bg-secondary px-12 py-16 text-white">
          <section className="grid grid-cols-3 xl:mx-auto xl:container">
            <div className="flex items-center justify-center gap-3">
              <PiHandHeart className="text-6xl" />
              <div>
                <div className="text-3xl font-medium">2324+</div>
                <div className="">Donations Recieved</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <TbLayoutGridAdd className="text-6xl" />
              <div>
                <div className="text-3xl font-medium">393</div>
                <div className="">Coordination Plays</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <FaChild className="text-6xl" />
              <div>
                <div className="text-3xl font-medium">2323+</div>
                <div className="">Childrens Helped</div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="container mx-auto py-6">
        <div className="text-2xl font-medium text-secondary flex items-center justify-between">
          Active Fundraisers
          <button className="bg-secondary text-white font-light text-sm py-2 px-4 rounded-full flex items-center gap-2">
            All Campaigns <BsArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {"abc".split("").map((item, index) => {
            return <CampaignCard key={index} index={index} />;
          })}
        </div>
      </section>

      <section className="bg-orange-100 py-8">
        <div className="container mx-auto grid grid-cols-2">
          <div className="grid gap-y-6">
            <div className="font-medium text-4xl w-[20%] leading-tight text-orange-500">
              Support the children
            </div>
            <div className="w-[50%] h-1.5 bg-orange-500"></div>
            <div className="text-sm w-[80%] mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
              sint reprehenderit enim quam in totam. Iste blanditiis voluptate
              consequuntur earum quibusdam ipsa corrupti et eveniet repudiandae
              totam consectetur, maxime ex.
            </div>
            <button className="bg-secondary text-white font-medium py-3 px-6 rounded-md w-max">
              Donate Now
            </button>
          </div>
          <div className="grid place-items-center">
            <img
              src="https://www.thestatesman.com/wp-content/uploads/2017/12/Malnutrition-among-childBW.jpg0_.jpg"
              alt=""
              className="rounded-md"
            />
          </div>
        </div>
      </section>
      <section
        className="w-full bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.thestatesman.com/wp-content/uploads/2017/12/Malnutrition-among-childBW.jpg0_.jpg')",
        }}
      >
        <div className="backdrop-brightness-[20%]">
          <div className="container mx-auto py-24 grid place-items-center gap-y-8">
            <div className=" text-white text-3xl">
              Support us to make a difference in society
            </div>
            <div className="flex gap-4">
              <div className="border hover:bg-white cursor-pointer hover:text-black text-white px-4 py-2 rounded-full">
                ₹1,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full">
                ₹2,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full">
                ₹3,000
              </div>
              <div className="border text-white px-4 py-2 rounded-full flex items-center gap-3">
                ₹{" "}
                <input
                  type="text"
                  className="bg-transparent w-max outline-none control"
                  placeholder="Custom amount"
                />
              </div>
            </div>
            <button className="bg-primary text-black text-sm px-8 py-3 rounded-full flex items-center gap-3">
              Donate Tip <PiHandHeart className="text-lg" />
            </button>
          </div>
        </div>
      </section>

      <footer className="flex flex-col items-center">
        <div className="flex justify-between w-full mb-10 mt-14">
          <div className="ml-20">
            <div className="mb-5">
              <h2 className="text-lg font-bold mb-4">Newsletter</h2>
              <p className="text-md">Fill in your email to subscribe to our newsletter.</p>
            </div>
            <form className="newsletter-form flex mb-4" action="#">
              <input type="email" placeholder="Email" className="bg-gray-200 px-4 py-2 focus:outline-none rounded-tl-md rounded-bl-md" />
              <button type="submit" className="bg-yellow-300 text-black px-4 py-2 rounded-tr-md rounded-br-md">Subscribe</button>
            </form>
          </div>
          <div className="mr-20 flex items-start">
            <div className="flex flex-col justify-start">
              <p className="mr-20 text-md font-semibold mb-5">About us</p>
              <p className="mr-20 text-md font-semibold mb-5">Campaigns</p>
              <p className="mr-20 text-md font-semibold mb-5">Contact Us</p>
            </div>
            <div className="flex flex-col justify-start">
              <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=740&t=st=1708187653~exp=1708188253~hmac=bf14d986afee0e0a7a0df2ef236347df1c37fe4434fef99fedf474eed6e96dd2" alt="Twitter Icon" className="w-7 h-7 mb-3" />
              <img src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-902qq7tz.png" alt="Facebook Icon" className="w-7 h-7 mb-3" />
              <img src="https://image.similarpng.com/very-thumbnail/2021/01/Black-linkedin-logo-design-on-transparent-background-PNG.png" alt="LinkedIn Icon" className="w-7 h-7" />
            </div>
          </div>
        </div>
        <hr className="h-1 bg-yellow-300" style={{ width: '1350px' }} />
        <div className="mt-10 mb-14 flex justify-between w-full">
          <div>
            <p className="ml-20 text-md">&copy; Copyright</p>
          </div>
          <div className="flex">
            <p className="text-md mr-9">Privacy Policy</p>
            <p className="text-md mr-20">Terms & Conditions</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
