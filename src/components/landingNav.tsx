"use client"
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function LandingNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
<div className="space-y-8 sm:absolute sm:bottom-50 sm:left-1/3 md:left-1/2 sm:space-y-20 text-[clamp(1rem,2.5vw,3rem)] leading-tight w-full sm:w-auto">
          <div className="flex flex-col items-center sm:items-start sm:ml-20">
            <Link
              href={{
                pathname: "/projects",
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
  );
}