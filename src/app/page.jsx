import { VscQuote } from "react-icons/vsc";
import { PiHandHeart } from "react-icons/pi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { FaChild } from "react-icons/fa";
import { BsArrowRight} from "react-icons/bs";
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
      <section>
        <div className="footer ">
              <div className="footer-top">
                <div className="footer-top-left">
                  <div className="footer-top-left-header">Newsletter</div>
                  <div className="footer-top-left-text">Fill in your email to subscribe our newsletter.</div>
                  <div className="footer-top-left-textbox">
                    <input className="footer-top-left-textbox-input" type="text" placeholder="Email"/>
                    <button className="footer-top-left-textbox-button">Subscribe</button>
                  </div>
                </div>
                <div className="footer-top-right">
                  <div className="footer-top-right-contact">
                    <div className="footer-top-right-contact-text">About Us</div>
                    <div className="footer-top-right-contact-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                      <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                      </svg></div>
                  </div>
                  <div className="footer-top-right-contact">
                    <div className="footer-top-right-contact-text">Campaigns</div>
                    <div className="footer-top-right-contact-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                      </svg></div>
                  </div>
                  <div className="footer-top-right-contact">
                    <div className="footer-top-right-contact-text">Contact Us</div>
                    <div className="footer-top-right-contact-icon"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                      </svg></div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="footer-bottom-left"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17716 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM7.5 10C7.5 10.5247 7.6651 11.0361 7.9719 11.4618C8.2787 11.8874 8.71165 12.2058 9.20943 12.3717C9.70721 12.5376 10.2446 12.5427 10.7454 12.3863C11.2463 12.2298 11.6852 11.9198 12 11.5C12.0996 11.3674 12.2477 11.2798 12.4119 11.2564C12.5761 11.233 12.7428 11.2758 12.8754 11.3754C13.008 11.4749 13.0956 11.6231 13.119 11.7873C13.1424 11.9514 13.0996 12.1182 13 12.2508C12.5277 12.8802 11.8692 13.3451 11.118 13.5796C10.3668 13.8141 9.56083 13.8064 8.81427 13.5574C8.06771 13.3084 7.4184 12.8309 6.95829 12.1925C6.49818 11.554 6.25059 10.787 6.25059 10C6.25059 9.21302 6.49818 8.44599 6.95829 7.80753C7.4184 7.16908 8.06771 6.69155 8.81427 6.44259C9.56083 6.19363 10.3668 6.18585 11.118 6.42036C11.8692 6.65486 12.5277 7.11976 13 7.74922C13.0493 7.81488 13.0852 7.88961 13.1056 7.96914C13.126 8.04866 13.1306 8.13143 13.119 8.21272C13.1074 8.29401 13.08 8.37222 13.0382 8.44289C12.9964 8.51357 12.9411 8.57531 12.8754 8.62461C12.8097 8.67391 12.735 8.70979 12.6555 8.7302C12.5759 8.75062 12.4932 8.75518 12.4119 8.7436C12.3306 8.73203 12.2524 8.70456 12.1817 8.66277C12.111 8.62097 12.0493 8.56566 12 8.5C11.6852 8.08024 11.2463 7.77017 10.7454 7.61372C10.2446 7.45727 9.70721 7.46237 9.20943 7.62829C8.71165 7.79422 8.2787 8.11256 7.9719 8.53822C7.6651 8.96389 7.5 9.47529 7.5 10Z" fill="#303030"/>
                  </svg> Copyright</div>
                <div className="footer-bottom-right">
                  <div>Privacy Policy</div>
                  <div>Terms & Conditions</div>
                </div>
              </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
