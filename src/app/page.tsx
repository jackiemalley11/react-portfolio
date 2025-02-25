import { getExperience, getProjects } from "@/tools/DataManager";
import { Experience } from "@/tools/data.model";
import About from "./About"
import Footer from "@/components/footer";

export default async function Home() {

let { projects } = await getProjects();

const xpdata = await getExperience();
const experience : Experience[] = xpdata.experience;
  

  return (
    <div className="bg-bgBlue min-h-screen">
      <About/>
      <Footer/>

    </div>
  );
  
}