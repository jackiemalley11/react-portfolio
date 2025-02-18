"use client";
import React, { useState } from 'react';
import '@fontsource/raleway';
import Navbar from './navBar';
import { Projects } from "@/tools/data.model";
import { useProjects } from "@/context/ProjectsContext";

interface ProjectPageProps {
  projects: Projects[];  
}

const ProjectPage = () => {
  const { projects } = useProjects();
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);

  const handleFirstImageClick = () => setIsFirstModalOpen(true);
  const handleSecondImageClick = () => setIsSecondModalOpen(true);
  const handleThirdImageClick = () => setIsThirdModalOpen(true);

  const closeFirstModal = () => setIsFirstModalOpen(false);
  const closeSecondModal = () => setIsSecondModalOpen(false);
  const closeThirdModal = () => setIsThirdModalOpen(false);

  return (
    <div className="bg-bgBlue text-white min-h-screen custom-cursor-area md:text-xl lg:text-2xl font-raleway">
      <div className="relative">
        <img src="/images/MenuBarFlower.png" className="w-1/4" />
      </div>

      <Navbar />

      <div className="bg-bgBlue text-white min-h-screen custom-cursor-area md:text-xl lg:text-2xl font-raleway">
        <div className="relative">
          <h1 className="text-5xl text-center my-10">Projects</h1>
          <div className="p-10 bg-gray-800 rounded-lg text-left">
            {projects.map((project) => (
              <div key={project._id} className="mb-6 border-b border-gray-600 pb-4">
                <h2 className="text-3xl">{project.name}</h2>
                <p className="text-lg">{project.description}</p>
                <p className="text-sm">
                  <strong>Technologies:</strong> {project.tech.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative flex justify-center items-center">
        <div className="relative text-7xl hover-glow-title">PROJECTS</div>
      </div>

      <div className="flex flex-wrap justify-evenly m-8 gap-y-8 mt-10">
        {/* React Next.js Project */}
        <div className="flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">
          <div className="text-5xl text-center mb-2">REACT NEXT-JS</div>
          <img
            className="text-xl"
            src="/images/photo.album.png"
            alt="photo album"
            onClick={handleFirstImageClick}
          />
        </div>

        {/* ASP.NET Core Project */}
        <div className="flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">
          <div className="text-5xl text-center mb-2">ASP.NET Core</div>
          <img
            className="text-xl"
            src="/images/productReview.png"
            alt="product review"
            onClick={handleSecondImageClick}
          />
        </div>

        {/* Weather App Project */}
        <div className="flex flex-col w-1/4 flex-grow min-w-[250px] bg-white mb-2 text-[#00283b] mt-4 relative mr-2 cursor-pointer">
          <div className="text-5xl text-center mb-2">WEATHER APP</div>
          <img
            className="text-xl"
            src="/images/weatherApp.png"
            alt="weather app"
            onClick={handleThirdImageClick}
          />
        </div>
      </div>

      {/* First Modal for React Next.js */}
      {isFirstModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative w-[80%]">
            <button
              onClick={closeFirstModal}
              className="absolute top-2 right-2 text-red-600 text-xl"
            >
              Close
            </button>
            <div style={{ position: 'relative', paddingBottom: '53.75%', height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/476b8371ee364c7e96a0d0540c1e0fbe?sid=9469532f-0a8e-4ec4-b246-ccd9d33ea6ac"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Second Modal for ASP.NET Core */}
      {isSecondModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative w-[80%]">
            <button
              onClick={closeSecondModal}
              className="absolute top-2 right-2 text-red-600 text-xl"
            >
              Close
            </button>
            <div style={{ position: 'relative', paddingBottom: '53.75%', height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/396df6cc0d974f8683376b6d6d846c17?sid=39b4557b-d392-4e52-8c67-608e24322e05"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Third Modal for Weather App */}
      {isThirdModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative w-[80%]">
            <button
              onClick={closeThirdModal}
              className="absolute top-2 right-2 text-red-600 text-xl"
            >
              Close
            </button>
            <div style={{ position: 'relative', paddingBottom: '53.75%', height: 0 }}>
              <iframe
                src="https://www.loom.com/embed/f57be6dbde8a417ebaa1551666fd32a1?sid=c32e761f-f2e6-4bec-bc55-b003f15f84cc"
                allowFullScreen
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectPage; 