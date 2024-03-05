"use client"; 
import React from "react";
import Navigation from "@/components/NavigationBar";
function Profile(){
    return(
        <>
        <Navigation></Navigation>
        <div>
            <div className="lg:mx-36 rounded-xl overflow-hidden border border-gray-200 bg-white my-8 lg:pl-14 px-4 py-4 mx-4">

                <div className="flex justify-end lg:mr-8">
                    <button className="bg-secondary text-white px-8 py-2 rounded-full max-sm:hidden">EDIT</button>
                </div>

                <div className="flex lg:gap-20 gap-5 mb-4">
                    <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="" width="100px" height="100px" className="rounded-full"/>
                    <div className="pt-8">
                        <p className="lg:text-xl text-gray-500">Name</p>
                        <p className="lg:text-2xl">Sajad Ahmed</p>
                    </div>
                </div>

                <div className="flex lg:flex-row flex-col lg:gap-14 justify-between pr-14">

                    <div>
                        <div className="mb-4">
                            <p className="lg:text-xl text-gray-500">Email</p>
                            <p className="lg:text-2xl">sajadkhaki09@gmail.com</p>
                        </div>
                        <div className="mb-4">
                            <p className="lg:text-xl text-gray-500">Phone Number</p>
                            <p className="lg:text-2xl">+91-8379912482</p>
                        </div>
                        <div className="mb-4">
                            <p className="lg:text-xl text-gray-500">PAN Number</p>
                            <p className="lg:text-2xl">BTLPA4771TA</p>
                        </div>
                    </div>

                    <div>
                        <div className="mb-4">
                            <p className="lg:text-xl text-gray-500">Date of Birth</p>
                            <p className="lg:text-2xl">15-05-1997</p>
                        </div>
                        <div className="mb-4">
                            <p className="lg:text-xl text-gray-500">City of Residence</p>
                            <p className="lg:text-2xl">Poonch, Jammu And Kashmir</p>
                        </div>
                        <div className="mb-4">
                            <p className="lg:text-xl text-gray-500">Aadhar Number</p>
                            <p className="lg:text-2xl">**********2554</p>
                        </div>
                    </div>

                </div>

                <div className="flex justify-center lg:hidden md:hidden">
                    <button className="bg-secondary text-white px-14 py-2 rounded-full">EDIT</button>
                </div>

            </div>
            
            <div className="flex lg:flex-row flex-col justify-between rounded-xl overflow-hidden border border-gray-200 bg-white lg:mx-36 mx-4 mb-8 lg:px-14 px-4 py-8">
                <div className="flex pb-8 lg:pb-0 gap-4">
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/9547/9547727.png" alt="" width="50px" height="50px"/>
                    </div>
                    <div>
                        <p>-</p>
                        <p>Donations Made</p>
                    </div>
                </div>
                <div className="flex pb-8 lg:pb-0 gap-4">
                    <div>
                        <img src="https://cdn.pixabay.com/photo/2018/01/15/17/27/image-3084377_1280.png" alt="" width="40px" height="40px" className="mt-2"/>
                    </div>
                    <div>
                        <p>-</p>
                        <p>Last Donation Amount</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div>
                        <img src="https://artofalignmentacademy.com/wp-content/uploads/2021/07/534-5341596_aov-hero-availability-circle-calendar-icon-png-clipart-removebg-preview-287x300.png" alt="" width="50px" height="50px"/>
                    </div>
                    <div>
                        <p>-</p>
                        <p>Last Donation Date</p>
                    </div>
                </div>
            </div>

            <div className="lg:mx-36 rounded-xl overflow-hidden border border-gray-200 bg-white my-8 lg:px-14 px-4 py-8">
                <div className="flex">

                    <div className=" lg:w-3/5">
                        <div className="flex">
                            <div>
                                <img src="https://i.pinimg.com/originals/81/91/ff/8191ff690dcb2c1539e938325b4ffd5d.jpg" alt="" width="200px" height="100px"/>
                            </div>
                            <div className="px-4">
                                <p>Help a farmer to feed and educate his 7 little girls</p>
                                <p className="py-2"><a href="">Post An Update</a></p>
                                <button className="bg-red-800 text-white px-14 py-2 rounded-lg">Expired</button>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="flex gap-2 my-4">
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2018/01/15/17/27/image-3084377_1280.png" alt="" width="40px" height="40px" className="mt-2"/>
                                </div>
                                <div>
                                    <p>0</p>
                                    <p>Fund Raised</p>
                                </div>
                            </div>
                            <div className="flex gap-2 my-4">
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2018/01/15/17/27/image-3084377_1280.png" alt="" width="40px" height="40px" className="mt-2"/>
                                </div>
                                <div>
                                    <p>0</p>
                                    <p>Days To Go</p>
                                </div>
                            </div>
                            <div className="flex gap-2 my-4">
                                <div>
                                    <img src="https://cdn.pixabay.com/photo/2018/01/15/17/27/image-3084377_1280.png" alt="" width="40px" height="40px" className="mt-2"/>
                                </div>
                                <div>
                                    <p>3</p>
                                    <p>Views</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/5">
                        <div className="flex gap-5">
                            <button className="bg-secondary text-white px-14 py-2 rounded-full">PERFORMANCE</button>
                            <button className="bg-secondary text-white px-14 py-2 rounded-full">EDIT</button>
                        </div>
                        <button className="bg-secondary text-white px-28 py-2 rounded-full my-2">UPLOAD DOCUMENTS</button>
                        <hr />
                        <p className="my-2">Keep sharing to increase your fundraiser search</p>
                        <div className="flex justify-between mb-8">
                            <img src="https://tinyurl.com/imageforfb" alt="" width="60.13dp"/>
                            <img src="https://tinyurl.com/imageforinsta" alt=""  width="60.13dp" className="rounded-full"/>
                            <img src="https://cdn-icons-png.freepik.com/512/8748/8748009.png" alt=""  width="60.13dp"/>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW3LGeaQktAu7s6ULg-0ldlOJDmdUKOUrJ6Q" alt=""  width="60.13dp"/>
                        </div>
                    </div>

                </div>
                <hr />
                <div className="flex justify-center mt-8">
                    <button className="bg-secondary text-white px-14 py-2 rounded-full">WITHDRAW FUNDS</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Profile