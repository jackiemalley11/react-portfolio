"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function ProjectPage() {
    return (
        <div className=' bg-bgBlue text-white min-h-screen custom-cursor-area'>
            <div className="relative">
                <img src="/images/MenuBarFlower.png" className="w-1/4"
                />
            </div>
            <div className="flex flex-wrap justify-end absolute right-0 top-0 pr-14 mt-14">
                <div className="ml-10">
                    <Link href="/projects" className="text-2xl hover:text-hoverBlue">
                        PROJECTS
                    </Link>
                </div>
                <div className='ml-10'>
                    <Link href="/experience" className="text-2xl hover:text-hoverPurple">
                        EXPERIENCE
                    </Link>
                </div>
                <div className='ml-10'>
                    <Link href="/aboutMe" className="text-2xl hover:text-hoverPink">
                        ABOUT ME
                    </Link>
                </div>
                <div className='ml-10'>
                    <Link href="/contactMe" className="text-2xl hover:text-hoverYellow">
                        CONTACT
                    </Link>
                </div>
                <div className='ml-10'>
                    <Link href="/" className="text-2xl hover:text-hoverBlue">
                        <FontAwesomeIcon icon={faHouse} className="text-2xl hover:text-hoverBlue" />
                    </Link>
                </div>
            </div>
            <div className="relative flex justify-center items-center">

                <div className="relative text-7xl hover-glow-title">
                    PROJECTS
                </div>
            </div>
            <div className="flex flex-wrap justify-evenly m-6 gap-y-6 gap-x-6 mt-10">
                <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">

                    <div className='text-5xl text-center mb-2'>REACT NEXT-JS</div>

                    <img className="text-xl" src="/images/photo.album.png" alt="photo album"/>

                </div>
                <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">

                    <div className='text-5xl text-center mb-2'>ASP.NET Core</div>

                    <img className="text-xl" src="/images/productReview.png" alt="product review"/>

                </div>
                <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">

                    <div className='text-5xl text-center mb-2'>JAVA</div>

                    <img className="text-xl" src="/images/javaFermi.png" alt="fermi game"/>

                </div>
                <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">

                    <div className='text-5xl text-center mb-2'>CMS-GOOGLE SITES</div>

                    <img className="text-xl" src="/images/alaswinew.png" alt="Alaswinew website"/>

                </div>
                <div className="flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">

                    <div className='text-5xl text-center mb-2'>ASP.NET CORE</div>

                    <img className="text-xl" src="/images/quoteGenerator.png" alt="quote generator"/>

                </div>
                <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">

                    <div className='text-5xl text-center mb-2'>CMS-Wordpress</div>

                    <img className="text-xl" src="/images/Wordpress.png" alt="Wordpress portfolio"/>

                </div>
            
            </div>
        </div>
    );
}
