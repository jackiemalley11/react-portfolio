import React from 'react';
import Navbar from '../../components/navBar';
import FlipCard, { CardContent } from '../../components/flipCard';
import { getExperience } from "@/tools/DataManager";
import { Experience } from "@/tools/data.model";

export default async function ExperiencePage() {
  const xpdata = await getExperience();
  const experiences: Experience[] = xpdata.experience;

  // Transform database content into FlipCard content
  const flipCardContent: CardContent[] = experiences.map(exp => {
    let backContent;
    
    // Special handling for Independent section with links
    if (exp.front === "Independent") {
      backContent = (
        <div className='m-4 text-xl'>
          In the past year I developed two different sites using Google's CMS. 
          The first was on a volunteer basis for the{' '}
          <a 
            className='text-[#40F6FC] hover:text-[#B5EEF0] hover:shadow-[0_0_10px_2px_rgba(64, 246, 252, 0.8)] '
            href="https://sites.google.com/view/ehcurlingassociation/home" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            East Hants Curling Association
          </a>.{' '}
          {exp.back.split('East Hants Curling Association')[1].split('Alaswinew.com')[0]}
          <a 
            className='text-[#40F6FC] hover:text-[#B5EEF0] hover:shadow-[0_0_10px_2px_rgba(64, 246, 252, 0.8)]'
            href="https://www.alaswinew.com" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Alaswinew.com
          </a>
          {exp.back.split('Alaswinew.com')[1]}
        </div>
      );
    } else {
      
      backContent = <div className='m-4 text-xl'>{exp.back}</div>;
    }

    return {
      front: exp.front,
      back: backContent
    };
  });

  return (
    <div className="bg-bgBlue text-white min-h-screen custom-cursor-area md:text-xl lg:text-2xl font-raleway">
      <div className="flex flex-col">
        <Navbar />
        <div className="relative flex justify-center items-center mb-10 pt-48">
          <div className="relative text-7xl hover-glow-title">EXPERIENCE</div>
        </div>
        <div className="grid grid-cols-1 gap-4 px-6 w-full md:flex md:flex-row md:justify-evenly mt-10">
          {experiences && experiences.length > 0 ? (
            flipCardContent.map((content, index) => (
              <FlipCard key={index} content={content} />
            ))
          ) : (
            <p>No experience found</p>
          )}
        </div>
      </div>
    </div>
  );
}