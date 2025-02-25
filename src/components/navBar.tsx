"use client"

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faHouse } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-bgBlue z-50">
      {/* Container for the entire navbar with edge-to-edge layout */}
      <div className="flex justify-between items-center py-4 px-2">
        {/* Logo/Brand section - pushed to far left */}
        <div className="flex items-center ml-4">
          <Image src="/images/menuFlower.png" alt="Menu Bar Flower" className="w-12"/>
          <span className="gradient-text font-bold ml-4">JACKIE MALLEY</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="block sm:hidden text-3xl text-white mr-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
        </button>

        {/* Desktop Menu Links - pushed to far right */}
        <div className="hidden sm:flex items-center ml-4 mr-2">
          <Link href="/projects" className="hover:text-hoverBlue ml-6 px-4">
            PROJECTS
          </Link>
          <Link href="/experience" className="hover:text-hoverPink px-4">
            EXPERIENCE
          </Link>
          <Link href="/contactMe" className="hover:text-hoverYellow px-4">
            CONTACT
          </Link>
          <Link href="/" className="hover:text-hoverBlue px-4">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu - Full-width dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-bgBlue text-white py-4 w-full">
          <div className="flex flex-col items-center space-y-4">
            <Link href="/projects" className="hover:text-hoverBlue">
              PROJECTS
            </Link>
            <Link href="/experience" className="hover:text-hoverPink">
              EXPERIENCE
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
    </div>
  );
}