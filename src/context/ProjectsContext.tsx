
"use client"; 

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Projects } from "@/tools/data.model";

interface ProjectsContextType {
  projects: Projects[];
  setProjects: React.Dispatch<React.SetStateAction<Projects[]>>;
}

const ProjectsContext = createContext<ProjectsContextType | undefined>(undefined);

export const ProjectsProvider = ({ children }: { children: ReactNode }) => {
  const [projects, setProjects] = useState<Projects[]>([]);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export const useProjects = (): ProjectsContextType => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
};