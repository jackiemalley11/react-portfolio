import { getProjects } from "@/tools/DataManager";
import { Projects } from "@/tools/data.model";
import { Landing } from "./Landing";

export default async function Home() {

  const data = await getProjects(); 
  const projects : Projects[] = data.projects;
  

  return (
    <div className="bg-bgBlue min-h-screen">
      <Landing projects={projects}/>
    </div>
  );
  
}