"use client";
import Navigation from "@/components/NavigationBar";
import React, { useState } from "react";
import { BsEye, BsPerson, BsTags } from "react-icons/bs";
const CreateCampaign = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [story, setStory] = useState("");
  return (
    <>
      <Navigation />
      <div className="container mx-auto mt-4">
        <div className="grid grid-cols-[0.8fr,1.2fr] gap-4 items-start">
          <div className="shadow rounded">
            <div className="text-xl font-medium p-4 border-b">
              Create a campaign
            </div>
            <div className="p-4">
              <div className="mt-3">
                <label htmlFor="" className="text-sm">
                  Campaign Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  value={title}
                  type="text"
                  className="border-b py-1 px-2 w-full text-sm"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-sm">
                  Campaign Image
                </label>

                <div class="flex items-center justify-center w-full mt-2">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 "
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 16"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                        />
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" class="hidden" />
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="" className="text-sm">
                  Category
                </label>
                <input
                  type="text"
                  className="border-b py-1 px-2 w-full text-sm"
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                />
              </div>
              <div className="mt-3">
                <label
                  htmlFor=""
                  className="text-sm"
                >
                  Story
                </label>
                <textarea
                  className="border-b py-1 px-2 w-full text-sm"
                  cols="30"
                  rows="10" onChange={(e) => setStory(e.target.value)}
                  value={story}
                ></textarea>
              </div>
            </div>
            <div className="px-4 pb-4">
              <button className="bg-black text-white w-full rounded py-2 mt-2">
                Continue
              </button>
            </div>
          </div>

          <div className="shadow rounded p-4">
            <div className="text-xs text-gray-600 mb-3 px-2 py-1 rounded-full bg-gray-200 flex items-center gap-3 w-max">
              <BsEye /> This is a preview for your campaign
            </div>
            <div className="text-3xl font-medium mb-4 max-sm:mb-0 max-sm:mt-0">
              {title == "" ? <div className="text-gray-500">Title</div> : title}
            </div>
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
                Created right now
                <span>•</span>
                <div className="flex items-center gap-2">
                  <BsTags size={18} />
                  <div>{category == "" ? <div>Category</div> : category}</div>
                </div>
              </div>
              <div className="text-sm mt-5 leading-relaxed">
                {story == "" ? (
                  <div>Description</div>
                ) : (
                  story
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCampaign;
