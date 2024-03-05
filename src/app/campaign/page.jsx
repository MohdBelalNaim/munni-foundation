"use client"; 
import React from "react";
import Navigation from "@/components/NavigationBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import CampaignCard from "@/components/CampaignCard";
import Footer from "@/components/Footer";

function CampaignPage(){
    return(
        <>
        <Navigation></Navigation>

        <div className="flex my-8 lg:px-36">
            <Link href="/"><FontAwesomeIcon icon={faArrowLeft} className="text-black mr-4 mt-1 font-bold lg:text-2xl text-lg ml-4 lg:ml-0" /></Link>
            <h1 className="font-bold lg:text-2xl text-lg">Discover All Campaigns</h1>
        </div>

        <section className="mb-14">
        
        <div className="grid grid-cols-3 gap-4 mt-4 max-sm:grid-cols-1 max-sm:px-2 lg:px-36 md:px-4">
          {"abcdef".split("").map((item, index) => {
            return <CampaignCard key={index} index={index} name={index} />;
          })}
        </div>
        </section>

        <Footer></Footer>
        </>
    )
}
export default CampaignPage;