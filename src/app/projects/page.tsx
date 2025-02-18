
"use client";
import { useProjects } from "@/context/ProjectsContext";  
import ProjectPage from '../components/ProjectPage';  
import type { Projects } from "@/tools/data.model";

export default function Projects() {
  const { projects } = useProjects();  


  if (!projects || projects.length === 0) {
    return <div>No projects available.</div>;  
  }

  return (
    <div className="font-bold text-sm p-4 custom-cursor-area">
      <ProjectPage /> 
    </div>
  );
}