'use client';
import React, { useState } from 'react';
import '@fontsource/raleway';
import { Project } from "@/tools/data.model";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'; 



export default function ProjectsDisplay({ projects }: { projects: Project[]}) {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

 
  
  console.log("ProjectsDisplay received projects:", projects);

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  if (!Array.isArray(projects) || projects.length === 0) {
    return <div className='ms-4'>No projects available</div>;
  }

    return (
      <div className="mt-10 p-4">
      {/* Flex container changes from row to column on smaller screens */}
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {projects.map((myProject: Project) => (
          <div
            key={myProject._id}
            className="border p-4 text-white cursor-pointer gradient-border w-auto md:w-1/3 flex flex-col justify-between"
          >
            <h2 className="text-3xl font-semibold mb-4 mt-3 ml-2">{myProject.name}</h2>
            <p className="m-2">{myProject.description}</p>
            <div className="m-2 mt-4 font-semibold text-xl">
              Technologies: <span className="font-normal text-xl">{myProject.tech.join(', ')}</span>
            </div>
          
          {/* Play button */}
            <div className='flex justify-center hover:border-6'>
              <button
                className="mt-4 text-5xl text-white bg-gradient-custom px-4 py-2 border-4 border-white rounded-full hover:border-blue"
                onClick={() => handleProjectClick(myProject._id)} 
              >
                <FontAwesomeIcon icon={faCirclePlay} />
              </button>
            </div>
          </div>
        ))}
      </div>
  

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-4 rounded-lg relative w-[80%]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-red-600 text-xl"
            >
              Close
            </button>
            <div className="aspect-video relative">
              <iframe
                src={projects.find(p => p._id === selectedProject)?.loomVideoUrl}
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}