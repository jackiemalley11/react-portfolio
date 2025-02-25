"use client"
 import Image from 'next/image';


import Navbar from "../components/navBar";

export default function About() {


    return (
        <div className=' bg-bgBlue text-white min-h-screen custom-cursor-area md:text-xl lg:text-2xl font-raleway'>


            <Navbar></Navbar>

            <div className="flex flex-col">
                <div className="relative justify-center pt-48">
                    <div className="relative text-3xl md:text-5xl lg:text-6xl hover-glow-title pl-20 pr-20 mt-3 flex flex-wrap justify-center">
                        <span >Hi! I&apos;m &nbsp;</span>
                        <span className="gradient-text">Jackie </span>
                        <span>,  &nbsp;</span>
                        <span className="animate-slideIn opacity-0 [animation-fill-mode:forwards] mr-2"> Thank you for dropping by!</span>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row ml-24'>
                    <div className="flex-2 flex justify-start mt-10 lg:mt-20 ">
                        I am currently a student in IT - Web Programming at NSCC&apos;s Truro campus and looking forward to graduating spring of 2025.
                        I previously had a 14 year career  in the payroll industry where I held positions in customer serivce, programming and management.
                        I am a passionate lifelong learner who values diversity, creativity, and wellness in the workplace. I am delighted to be
                        embarking into the exciting world of software-development.
                        <br></br><br></br>
                        This portfolio is a small sampling of completed projects as well as work currently underway.
                        <br></br><br></br>
                        I&apos;d love to hear from you and learn what brought you to my page.
                    </div>
                    <div className="mt-20 me-5">
                        <Image
                            src="/images/FlowerHeadShot.png"
                            width={5000}
                            height={5000}
                            className="w-1/2 lg:w-full"
                            alt="Flower Head Shot"
                            style={{ height: 'auto' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
