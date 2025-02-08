'use client';
import React, { useState, useRef, useEffect } from 'react';
import Navbar from './navBar';

const FlipCardContent = [
  {
    front: "Industry",
    back: <div className='m-4 text-xl'>I was thrilled to have the opportunity to work with and learn from the talented developers at Innovasea this past 
      summer. I gained experience with the Angular framework and aquired integral industry experience working with Git Hub in a team 
      environment. During my time with Innovasea I participated in weekly standups, supported the introduction of additional lindt 
      checks for quality control, transitioned an old datatime library and started a new page for future integration into the 
      application.</div>
  },
  {
    front: "Independent",
    back: (
      <div className='m-4 text-xl'>
        In the past year I developed two different sites using Google's CMS. 
        The first was on a volunteer basis for the{' '}
        <a 
          className='text-[#40F6FC] hover:text-[#B5EEF0] hover:shadow-[0_0_10px_2px_rgba(64, 246, 252, 0.8)]'
          href="https://sites.google.com/view/ehcurlingassociation/home" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          East Hants Curling Association
        </a>.{' '}
        I updated the existing site creating a public facing side and a members only section. 
        This site is an ongoing project and will be undergoing further development at the end of the curling season.
        
        <br /><br />
        
        I had the pleasure of developing{' '}
        <a 
          className='text-[#40F6FC] hover:text-[#B5EEF0] hover:shadow-[0_0_10px_2px_rgba(64, 246, 252, 0.8)]'
          href="https://www.alaswinew.com" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Alaswinew.com
        </a>{' '}
        to support with the opening of a new Veterinary Locum business. 
        I had a lot of fun building this site and helping Dr. Simonson's vision come to life.
      </div>
    )
  },
  {
    front: "Cross Functional",
    back: (
      <div className='m-4 ml-6 text-xl'>
        Prior to making the switch to Web Development I held a 14 year career in the payroll industry. I worked for ADP- a large global national corporation,
        where I was first exposed to the world of programming.  During my time I also held roles in customer service and leadership. 
        <br></br><br></br>
        I enjoy working with people as well as technology and during my time at ADP developed the ability of translating client requests into 
        code and communicating system functionality back to clients.  
      </div>
    )
  }
];

function SingleFlipCard({ content }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const backContentRef = useRef(null);

  // Reset scroll position when card is flipped
  useEffect(() => {
    if (backContentRef.current && isFlipped) {
      backContentRef.current.scrollTop = 0;
    }
  }, [isFlipped]);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleClick}
      className="w-[30%] h-96 perspective-[1000px] cursor-pointer transition-transform duration-500 group"
    >
      <div
        className={`
          relative w-full h-full transition-transform duration-500 rounded-lg border-4 border-[#40F6FC] 
          group-hover:shadow-[0_0_20px_4px_rgba(64,246,252,0.8)] group-hover:border-[#B5EEF0] 
          ${isFlipped ? 'rotate-y-180' : ''}
        `}
      >
        {/* Front of card */}
        <div
          className={`
            absolute w-full h-full backface-hidden flex items-center justify-center 
            bg-bgBlue text-white text-2xl font-bold rounded-lg
            ${isFlipped ? 'hidden' : ''}
          `}
        >
          <div className="text-4xl text-center mb-2 mt-2">{content.front}</div>
        </div>
        
        {/* Back of card */}
        <div
          ref={backContentRef}
          className={`
            absolute w-full h-full backface-hidden 
            bg-bgBlue text-white text-lg font-bold transform rotate-y-180 rounded-lg
            ${isFlipped ? '' : 'hidden'}
            overflow-y-auto scrollbar-thin scrollbar-thumb-[#40F6FC] scrollbar-track-transparent
          `}
        >
          {content.back}
        </div>
      </div>
    </div>
  );
}

export default function FlipCard() {
  return (
    <div className='bg-bgBlue text-white min-h-screen custom-cursor-area md:text-lg lg:text-xl font-raleway'>
      <div className="relative">
        <img src="/images/MenuBarFlower.png" alt="Menu Bar Flower" className="w-1/3" />
      </div>
      <Navbar />
      <div className="relative flex justify-center items-center">
        <div className="relative text-7xl hover-glow-title">
          Experience
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly mt-10">
        {FlipCardContent.map((content, index) => (
          <SingleFlipCard key={index} content={content} />
        ))}
      </div>
    </div>
  );
}
  


    
//     return (
//         <div className=' bg-bgBlue text-white min-h-screen custom-cursor-area md:text-xl lg:text-2xl font-raleway'>
//             <div className="relative">
//                 <img src="/images/MenuBarFlower.png" className="w-1/4"
//                 />
//             </div>

//             <Navbar></Navbar>

//             <div className="flex flex-wrap justify-evenly m-8 gap-y-8 gap-x-8 mt-10">
//                 <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] mb-2 text-white mt-4 relative mr-2 cursor-pointer 
//                 border-[#9491DB] rounded-lg hover:border-[#9491DB] shadow-xl shadow-[0px_4px_6px_0px_rgba(148,145,219,0.4),1px_2px_10px_1px_rgba(148,145,219,0.4)] hover:shadow-[0px_4px_6px_0px_rgba(148,145,219,0.6),0px_1px_10px_0px_rgba(148,145,219,1)] transition-all duration-300">

//                     <div className='text-4xl text-center mb-2 mt-2'>Industry</div>
//                     <div className='m-4 ml-6'>
//                         I was thrilled to have the opportunity to work with and learn from the talented developers at Innovasea this past summer.  
//                         I gained experience with the Angular framework and aquired integral industry experience working with Git Hub in a team environment.  During my time with
//                         Innovasea I participated in weekly standups, supported the introduction of additional lindt checks for quality control, transitioned
//                         an old datatime library and started a new page for future integration into the application.
//                     </div>    

//                 </div>
//                 <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] mb-2 text-white mt-4 relative mr-2 cursor-pointer  
//                 border-[#9491DB] rounded-lg hover:border-[#9491DB] shadow-xl shadow-[0px_4px_6px_0px_rgba(148,145,219,0.4),1px_2px_10px_1px_rgba(148,145,219,0.4)] hover:shadow-[0px_4px_6px_0px_rgba(148,145,219,0.6),0px_1px_10px_0px_rgba(148,145,219,1)] transition-all duration-300">

//                     <div className='text-4xl text-center mb-2'>Independent</div>
//                     <div className='m-4 ml-6'>
//                         In the past year I  developed two different sites using Google's CMS.  The first was on a volunteer basis for the <a className='text-[#40F6FC] hover:text-[#B5EEF0] hover:shadow-[0_0_10px_2px_rgba(64, 246, 252, 0.8)]'href="https://sites.google.com/view/ehcurlingassociation/home" target="_blank" rel="noopener noreferrer">East Hants Curling Association </a>.  I updated the existing site
//                         creating a public facing side and a members only section.  This site is an ongoing project and will be undergoing further development at the end of the curling season. 
//                         <br></br>
//                         <br></br>
//                         I had the pleasure of developing <a className='text-[#40F6FC] hover:text-[#B5EEF0] hover:shadow-[0_0_10px_2px_rgba(64, 246, 252, 0.8)]'href="https://www.alaswinew.com" target="_blank" rel="noopener noreferrer">Alaswinew.com</a> to support
//                         with the opening of a new Veterinary Locum business.  I had alot of fun building this site and helping Dr. Simonson's vision come to life.
//                     </div>   

//                 </div>
//                 <div className=" flex flex-col w-1/4 flex-grow min-w-[250px] mb-2 text-white mt-4 relative mr-2 cursor-pointer  
//                 border-[#9491DB] rounded-lg hover:border-[#9491DB] shadow-xl shadow-[0px_4px_6px_0px_rgba(148,145,219,0.4),1px_2px_10px_1px_rgba(148,145,219,0.4)] hover:shadow-[0px_4px_6px_0px_rgba(148,145,219,0.6),0px_1px_10px_0px_rgba(148,145,219,1)] transition-all duration-300">

//                     <div className='text-4xl text-center mb-2'>Cross Functional</div>
//                     <div className='m-4 ml-6'>
//                        Prior to making the switch to Web Development I held a 14 year career in the payroll industry. I worked for ADP- a large global national corporation,
//                        where I was first exposed to the world of programming.  During my time I also held roles in customer service and leadership. 
//                        <br></br><br></br>
//                        I enjoy working with people as well as technology and during my time at ADP developed the ability of translating client requests into 
//                        code and communicating system functionality back to clients.  
//                     </div>   

//                 </div>
               

//             </div>
            
//         </div>
//     );
// }
