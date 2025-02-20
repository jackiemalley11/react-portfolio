import { Experience } from "@/tools/data.model";
import LandingNav from "@/components/landingNav";


export function Landing() {

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

        <LandingNav/>
      </div>
    </div>
  );
}