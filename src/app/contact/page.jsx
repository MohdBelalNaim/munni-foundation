"use client";
import React from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import Footer from "@/components/Footer";
import Navigation from "@/components/NavigationBar";

function Contact() {
  return (
    <>
      <Navigation />

      <section>
        <div className="lg:px-36 lg:py-10 py-8 px-4 bg-secondary ">
          <div className="flex justify-between flex-col lg:flex-row">
            <div className="max-w-2xl">
              <h1 className="lg:pt-20 lg:pb-8 pb-4 pt-8 font-bold text-white text-2xl lg:text-4xl">
                Contact Us
              </h1>
              <p className="lg:text-xl text-white mb-4">
                We are here to help you and answer any questions you may have.
                Here is how to reach us!
              </p>
            </div>
            <div className="max-w-xs mx-auto lg:mx-0">
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
        <div className="lg:px-36 p-4">
          <div className="lg:py-8 py-4 lg:text-2xl text-xl text-blue-900 flex items-center">
            <FiMapPin className="text-blue-900 text-3xl lg:ml-20" />
            <p className="lg:mx-20 mx-10">INDIA</p>
          </div>
          <hr className="bg-blue-900 h-[0.15rem] lg:w-96" />
          <p className="my-5 text-sm">
            DHANAWAN, SARWAR BAZAR, Sharmakhas, Barachatti, Gaya-824201, Bihar
          </p>
          <p className="mb-5 text-sm">
            {" "}
            <FiMail className="inline-block mr-2" /> info@munniwelfare.org
          </p>
          <p className="mb-5 text-sm">
            {" "}
            <FiPhone className="inline-block mr-2" /> 7739969027
          </p>
          <div className="lg:my-16 my-8">
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.9679463135576!2d80.93813697514358!3d26.872759461806925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd00079a7793%3A0x86da40b44df7cc21!2sThe%20Hazelnut%20Factory%20-%20Cafe%20in%20Lucknow!5e0!3m2!1sen!2sin!4v1709392835341!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe> */}

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.9294640621906!2d84.97342737997943!3d24.522523002382723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f3346240b30f59%3A0xc9da91c702200d70!2sDhanawan%20Rd%2C%20Barachatti%2C%20Kalaua%20Kalan%2C%20Bihar%20824201!5e0!3m2!1sen!2sin!4v1710578281705!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section>
        <div className="lg:px-36 px-4 py-8 bg-primary lg:py-14">
          <p className="pb-4 lg:text-2xl text-xl">Join the conversation</p>
          <p className="text-sm">
            Join us on Facebook, Twitter, Instagram and YouTube as we share
            uplifting stories of successful fundraisers!{" "}
          </p>
        </div>
      </section>

      <section>
        <div className="lg:px-36 p-4 flex flex-col items-center lg:items-start">
          <p className="lg:py-10 py-4 lg:text-2xl text-lg">
            Let us know what you think
          </p>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-gray-300 py-4 lg:mr-14 md:mr-14 w-64 lg:w-96"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="border-b border-gray-300 py-4 w-64 my-4 lg:w-96"
            />
          </div>
          <textarea
            className="border border-gray-300 rounded-xl p-3 w-full"
            cols="150"
            rows="10"
            placeholder="You can type any suggestions or queries you might have. Let us help you!"
          ></textarea>
          <button className="bg-secondary text-white rounded-3xl my-8 px-28 py-3 lg:self-start">
            Send
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
