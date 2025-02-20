'use client';
import React, { useState } from 'react';
import '@fontsource/raleway';
import { Project } from "@/tools/data.model";

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
    <div className="mt-20 p-4">
      <div className="grid gap-4">
        {projects.map((myProject: Project) => (
          <div
            key={myProject._id}
            className="border p-4 text-white cursor-pointer"
            onClick={() => handleProjectClick(myProject._id)}
          >
            <h2 className="text-xl">{myProject.name}</h2>
            <p>{myProject.description}</p>
            <div>
              Technologies: {myProject.tech.join(', ')}
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