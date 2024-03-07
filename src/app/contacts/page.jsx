import React from "react";
import { PiHandHeart } from "react-icons/pi";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

function Contact() {
  return (
    <>
      <div className="sm:px-15 container mx-auto text-light text-black py-5 px-6 border-b border-gray-300 flex justify-between items-center max-sm:px-4 lg:px-36 max-sm:py-6">
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

      <section>
        <div className="lg:px-36 lg:py-10 bg-secondary h-[400px]">
          <div className="flex justify-between">
            <div className="max-w-2xl">
              <h1 className="pt-20 pb-8 font-bold text-white text-4xl">
                Contact Us
              </h1>
              <p className="text-xl text-white">
                We are here to help you and answer any questions you may have.
              </p>
              <p className="text-xl text-white">Here is how to reach us!</p>
            </div>
            <div className="max-w-xs">
              <img
                src="https://s3.amazonaws.com/i.snag.gy/m4ouI5.jpg"
                alt="Image Description"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:px-36">
          <div className="py-8 text-2xl text-blue-900 flex items-center">
            <FiMapPin className="text-blue-900 text-3xl ml-20" />
            <p className="mx-20">INDIA</p>
          </div>
          <hr className="bg-blue-900 h-[0.15rem] w-96" />
          <p className="my-5">
            Milaap Social Ventures India Pvt. Ltd. Nextcoworks JP Nagar -
            Coworking Space JP Nagar Alankar Plaza, Bk circle, Nayak Layout, 8th
            Phase, J. P. Nagar, Bangalore, Karnataka, India 560078
          </p>
          <p className="mb-5">
            {" "}
            <FiMail className="inline-block mr-2" /> feedback@milaap.org
          </p>
          <p className="mb-5">
            {" "}
            <FiPhone className="inline-block mr-2" /> 9916174848
          </p>
          <div className="my-16">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9679463135576!2d80.93813697514358!3d26.872759461806925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd00079a7793%3A0x86da40b44df7cc21!2sThe%20Hazelnut%20Factory%20-%20Cafe%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1709392835341!5m2!1sen!2sin"
              width="1200"
              height="500"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:px-36 bg-primary py-10">
          <p className="pb-8 text-2xl">Join the conversation</p>
          <p>
            Join us on Facebook, Twitter, Instagram and YouTube as we share
            uplifting stories of successful fundraisers!{" "}
          </p>
        </div>
      </section>

      <section>
        <div className="lg:px-36">
          <p className="lg:py-14 text-2xl">Let us know what you think</p>
          <div className="mb-12">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-300 py-4 mr-14 w-96"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border-b border-gray-300 py-4 w-96"
            />
          </div>
          <textarea
            className="border border-gray-300 rounded-xl p-3"
            cols="150"
            rows="10"
            placeholder="You can type any suggestions or queries you might have. Let us help you!"
          ></textarea>{" "}
          <br />
          <button className="bg-secondary text-white rounded-3xl my-8 px-28 py-3">
            Send
          </button>
        </div>
      </section>

      <section>
        <hr className="bg-yellow-300 h-[0.15rem] shadow-2xl" />
        <div className="flex py-8">
          <div className="ml-10 mr-14 w-64">
            <ul>
              <li className="border-b border-black font-bold mb-5">
                Munni Foundation
              </li>
              <li>About us</li>
              <li>Press and media</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Thank you</li>
            </ul>
          </div>

          <div className="flex flex-col w-64 mr-14">
            <div>
              <p className="border-b border-black font-bold mb-5">
                Indian office address
              </p>
              <p>
                Milaap Social Ventures India Pvt. Ltd. Nextcoworks JP Nagar -
                Coworking Space JP Nagar Alankar Plaza, Bk circle, Nayak Layout,
                8th Phase, J. P. Nagar,
              </p>
              <p>Bangalore, Karnataka, India 560078</p>
            </div>
            <div>
              <p className="border-b border-black font-bold my-5">
                Supported by
              </p>
              <div className="flex ">
                <img
                  src="https://i0.wp.com/staging-assets.milaap.org/assets/footer/visa-2f0810494a6cf6b3c56bb2c4f3f8f8eb56aa9a7fef7ce3e09221da38b99ae22e.png?w=900"
                  data-loaded="true"
                  width="49"
                  height="22"
                  className="mr-2"
                ></img>
                <img
                  src="https://i0.wp.com/staging-assets.milaap.org/assets/footer/master_card-5dd6fa0fc948f5eb5d4a826caecf0871781948403df78bb4f95c5ff6020b6130.png?w=900"
                  data-loaded="true"
                  width="42"
                  height="22"
                ></img>
                <img
                  class="paytm"
                  src="https://i0.wp.com/staging-assets.milaap.org/assets/footer/paytm-e4064c63e5406550c7b8c13346a5bfef0b826ca5b1289e2407d4dcb4622d67e3.png?w=900"
                  data-loaded="true"
                  width="64"
                  height="32"
                ></img>
                <img
                  src="https://i0.wp.com/pages.milaap.org/wp-content/uploads/2021/10/visa.png?w=900&amp;ssl=1"
                  width="47"
                  height="32"
                ></img>
              </div>
            </div>
          </div>

          <div className="mr-14 w-96">
            <button className="bg-secondary text-white rounded-3xl mb-8 mx-7 px-8 py-3">
              Start a fundraiser
            </button>
            <div className="flex justify-between my-8">
              <p>Pricing</p>
              <p>Reviews</p>
              <p>FAQs and tips</p>
            </div>
            <div>
              <p className="text-xs mt-8">Find us on</p>
              <div className="flex">
                <a href="https://www.youtube.com">
                  <img
                    src="https://icon-library.com/images/youtube-icon-png-black/youtube-icon-png-black-17.jpg"
                    alt=""
                    width="25"
                    height="25"
                    className="mt-1 mr-2"
                  />
                </a>
                <a href="https://twitter.com">
                  <img
                    src="https://www.shareicon.net/data/128x128/2016/07/09/118334_twitter_512x512.png"
                    alt=""
                    width="25"
                    height="25"
                    className="mt-1 mr-2"
                  />
                </a>
                <a href="https://www.linkedin.com">
                  <img
                    src="https://www.acpo.com/wp-content/uploads/2022/08/linkedin-black-icon-1024x1024.png"
                    alt=""
                    width="25"
                    height="25"
                    className="mt-1 mr-1.5"
                  />
                </a>
                <a href="https://www.instagram.com">
                  <img
                    src="https://img.freepik.com/premium-vector/black-circle-with-instagram-logo_197792-7412.jpg?w=740"
                    alt=""
                    width="29"
                    height="29"
                    className="mt-0.5"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="flex mr-10 w-84 p-5 bg-gray-100">
            <img
              loading="lazy"
              src="https://snipboard.io/orjKsm.jpg"
              width="270"
              height="75"
            ></img>
            <div className="pl-10">
              <p className="text-center my-5">
                Set up, manage and promote your fundraiser with Milaap app
              </p>
              <p className="mb-5 font-bold text-secondary text-center">
                Download Now!
              </p>
              <div className="mx-10">
                <a
                  class="download-btn-link"
                  href="https://play.google.com/store/apps/details?id=org.milaap.app.android&amp;utm_source=footer&amp;utm_medium=desktop"
                >
                  <img
                    width="200"
                    src="//staging-assets.milaap.org/assets/play-store-btn-3cb8952867b0552ef1377bf63004d9d6613fd11da71e8446e7e6be1fd61f3182.png"
                    alt="play-store"
                    className="mb-5"
                    data-loaded="true"
                  ></img>
                </a>
                <a
                  class="download-btn-link"
                  href="https://apps.apple.com/in/app/milaap/id1571562098?utm_source=footer&amp;utm_medium=desktop"
                >
                  <img
                    width="200"
                    src="//staging-assets.milaap.org/assets/app-store-btn-0ae1713b1521ee08942a97e257b38ac5050a6cf70df4084b3f4ab234e60ea51f.png"
                    alt="app-store"
                    className="mb-5"
                    data-loaded="true"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-white bg-black py-5">
        <div className="flex justify-center text-xs">
          <p className="mx-5">Security & Privacy</p>
          <p className="mx-5">Conditions of use</p>
          <p className="mx-5">
            &copy; 2010 - 2021 munni-foundation.org. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Contact;
