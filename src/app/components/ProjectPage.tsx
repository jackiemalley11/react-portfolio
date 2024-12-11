"use client";

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function ProjectPage() {
    return (
        <div className=' bg-bgBlue text-white min-h-screen'>
            <div className="relative">
                <img src="/images/MenuBarFlower.png" className="w-1/4"
                />
            </div>
            <div className="flex justify-end absolute right-0 top-0 pr-14 mt-14 text-shadow-glow">
                <div className="ml-10">
                    <Link href="/projects" className="text-2xl text-shadow-glow hover:text-hoverBlue">  
                        PROJECTS        
                    </Link>
                </div>
                <div className='ml-10'>
                    <Link href="/experience" className="text-2xl text-shadow-glow hover:text-hoverBlue">  
                        EXPERIENCE        
                    </Link>
                </div>
                <div className='ml-10'>
                    <Link href="/aboutMe" className="text-2xl text-shadow-glow hover:text-hoverBlue">  
                        ABOUT ME        
                    </Link>
                </div>
                <div className='ml-10'>
                    <Link href="/contactMe" className="text-2xl text-shadow-glow hover:text-hoverBlue">  
                        CONTACT       
                    </Link>
                </div>
                <div className='ml-10'>
                    <Link href="/" className="text-2xl text-shadow-glow hover:text-hoverBlue">  
                        <FontAwesomeIcon icon={faHouse} className="text-2xl hover:text-hoverBlue" />      
                    </Link>
                </div>
            </div>
        </div>
    );
}
