import Link from 'next/link';

export function Landing() {
    return(
        <div className="bg-bgBlue text-white m-0 p-0">
            <div className="relative min-h-screen flex items-center">
                <img src="/images/FlowerNamePartial.png"  className="absolute bottom-0 left-0 w-2/3 sm:w-2/3 md:w-2/3 lg:w-1/2 object-cover"
                />

                <div className="absolute bottom-50 left-1/3 space-y-20 text-shadow-glow">
                    <div>
                        <Link href="/projects" className="text-3xl text-shadow-glow">  
                            PROJECTS        
                        </Link>
                    </div>
                    <div className="ml-20">
                        <Link href="/experience" className="text-3xl text-shadow-glow">  
                            EXPERIENCE        
                        </Link>
                    </div>
                    <div className="ml-32">
                        <Link href="/aboutMe" className="text-3xl text-shadow-glow">  
                            ABOUT ME        
                        </Link>
                    </div>
                    <div className="ml-40">
                        <Link href="/contactMe" className="text-3xl text-shadow-glow">  
                            CONTACT       
                        </Link>
                    </div>
                </div>
        </div>

        </div>

    );
}