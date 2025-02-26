import { getExperience, getProjects } from "@/tools/DataManager";
import Navbar from '../../components/navBar';
import { Project } from "@/tools/data.model";
import ProjectsDisplay from '../../components/projectsDisplay';


export default async function ProjectPage() {


  let { projects } = await getProjects();

  return (
    <div className="bg-bgBlue text-white min-h-screen custom-cursor-area md:text-xl lg:text-2xl font-raleway">
      <div className="flex flex-col">
        <Navbar />

        <div className="relative flex justify-center items-center mb-6 pt-32">
          <div className="relative text-4xl md:text-7xl hover-glow-title">PROJECTS</div>
        </div>

        <ProjectsDisplay projects={projects}/>
      </div>

      
    </div>
  );
};
