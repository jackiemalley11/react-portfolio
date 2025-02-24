"use client"
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHouse } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative bg-bgBlue">
      {/* Flower Image */}
      <div className="fixed top-0 left-0 z-10">
        <img src="/images/MenuBarFlower.png" alt="Menu Bar Flower" className="w-1/3" />
      </div>
  
      {/* Menu Bar */}
      <div className="fixed top-0 right-0 z-20 rounded-lg flex justify-end items-center sm:w-auto sm:left-1/4 px-4 py-2">
        {/* Mobile Menu Toggle */}
        <button
          className="block sm:hidden absolute right-4 top-4 text-3xl z-50 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>
  
        {/* Mobile Menu Links */}
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
  
        {/* Desktop Menu Links */}
        <div className="hidden sm:flex w-auto justify-end gap-4 mt-3 bg-transparent">
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
    </div>
  );
}