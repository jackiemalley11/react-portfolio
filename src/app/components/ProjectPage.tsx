"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/raleway';
import Navbar from './navBar';

export default function ProjectPage() {
    return (
        <div className=' bg-bgBlue text-white min-h-screen custom-cursor-area md:text-xl lg:text-2xl font-raleway'>
            <div className="relative">
                <img src="/images/MenuBarFlower.png" className="w-1/4"
                />
            </div>
            
            <Navbar></Navbar>

            <div className="relative flex justify-center items-center">

                <div className="relative text-7xl hover-glow-title">
                    PROJECTS
                </div>
            </div> 
            <div className="flex flex-wrap justify-evenly m-8 gap-y-8 gap-x-8 mt-10">
                <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">

                    <div className='text-5xl text-center mb-2'>REACT NEXT-JS</div>

                    <img className="text-xl" src="/images/photo.album.png" alt="photo album" />

                </div>
                <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">

                    <div className='text-5xl text-center mb-2'>ASP.NET Core</div>

                    <img className="text-xl" src="/images/productReview.png" alt="product review" />

                </div>
                <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">

                    <div className='text-5xl text-center mb-2'>ASP.NET Core</div>

                    <img className="text-xl" src="/images/productReview.png" alt="product review" />

                </div>
                
            </div>
        </div>
    );
}
