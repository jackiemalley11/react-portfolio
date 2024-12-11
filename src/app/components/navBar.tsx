import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-bgBlue z-50">

      <button
        className="block sm:hidden absolute right-4 top-4 text-3xl z-50 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>


      {isMenuOpen && (
        <div className="sm:hidden bg-bgBlue text-white py-4">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/projects" className="hover:text-hoverBlue">
              PROJECTS
            </Link>
            <Link href="/experience" className="hover:text-hoverPurple">
              EXPERIENCE
            </Link>
            <Link href="/aboutMe" className="hover:text-hoverPink">
              ABOUT ME
            </Link>
            <Link href="/contactMe" className="hover:text-hoverYellow">
              CONTACT
            </Link>
            <Link href="/" className="hover:text-hoverBlue">
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </div>
        </div>
      )}


      <div className="hidden sm:flex w-3/4 absolute right-0 top-1 flex-wrap justify-end pr-14 lg:gap-x-8 md:gap-x-6 sm:gap-4 mt-6 bg-transparent">
        <Link href="/projects" className="hover:text-hoverBlue">
          PROJECTS
        </Link>
        <Link href="/experience" className="hover:text-hoverPurple">
          EXPERIENCE
        </Link>
        <Link href="/aboutMe" className="hover:text-hoverPink">
          ABOUT ME
        </Link>
        <Link href="/contactMe" className="hover:text-hoverYellow">
          CONTACT
        </Link>
        <Link href="/" className="hover:text-hoverBlue">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>
    </div>
  );
}