import { getExperience, getProjects } from "@/tools/DataManager";
import { Project, Experience } from "@/tools/data.model";
import { Landing } from "./Landing";
import ProjectPage from "./projects/page";
import ProjectsDisplay from "@/components/projectsDisplay";

export default async function Home() {

let { projects } = await getProjects();

const xpdata = await getExperience();
const experience : Experience[] = xpdata.experience;
  

  return (
    <div className="bg-bgBlue min-h-screen">
      <Landing/>

    </div>
  );
  
}