"use client"; // This component is marked as client-side

import { useProjects } from "@/context/ProjectsContext";
import Link from "next/link";
import { Projects } from "@/tools/data.model";

export function Landing({ projects }: { projects: Projects[] }) {
  const { setProjects } = useProjects(); // Access the setProjects function from context

  // Set the projects in the context
  setProjects(projects);

  return (
    <div className="bg-bgBlue text-white m-0 p-0 custom-cursor-area">
      <div className="relative min-h-screen flex flex-col sm:flex-row items-center">
        <img
          src="/images/FlowerNamePartial.png"
          className="hidden sm:block sm:absolute sm:bottom-0 sm:left-0 w-full sm:w-2/3 object-cover"
        />
        <img
          src="/images/FlowerName.png"
          className="block sm:hidden w-full object-contain"
          alt="Flower Name"
        />

        <div className="space-y-8 sm:absolute sm:bottom-50 sm:left-1/3 md:left-1/2 sm:space-y-20 text-[clamp(1rem,2.5vw,3rem)] leading-tight w-full sm:w-auto">
          <div className="flex flex-col items-center sm:items-start sm:ml-20">
            <Link
              href={{
                pathname: "/projects",
                query: { projects: JSON.stringify(projects) },  // Convert projects to a query string
              }}
              className="text-3xl hover-glow hover:text-hoverBlue hover:hover-custom-cursor"
            >
              PROJECTS
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:ml-32">
            <Link
              href="/experience"
              className="text-3xl hover-glow hover:text-hoverPurple"
            >
              EXPERIENCE
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:ml-40">
            <Link
              href="/aboutMe"
              className="text-3xl hover-glow hover:text-hoverPink"
            >
              ABOUT ME
            </Link>
          </div>
          <div className="flex flex-col items-center sm:items-start sm:ml-48">
            <Link
              href="/contactMe"
              className="text-3xl hover-glow hover:text-hoverYellow"
            >
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}