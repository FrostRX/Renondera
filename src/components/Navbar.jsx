"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MainConfig } from "../config/main-config";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, isSetScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        isSetScrolled(true);
      } else {
        isSetScrolled(false);
      }
    });
  }, []);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      <div
        className={`fixed w-full h-20 transition-all duration-200 ${
          isScrolled && "bg-renondera-main"
        }`}
      >
        <div className="flex items-center justify-between md:w-[70%] w-[90%] mx-auto h-full">
          <div>
            <Link
              className={`text-2xl ${
                isScrolled ? "text-white" : "text-gray-700"
              }
          
          } font-bold`}
              href="/"
            >
              Renondera
            </Link>
          </div>
          <div className="md:flex gap-5 hidden">
            {MainConfig.navbar.links.map((nav, index) => (
              <Link
                key={index}
                className={` text-lg font-semibold
              ${
                isScrolled
                  ? "text-white hover:text-gray-200"
                  : "text-gray-700 hover:text-gray-600"
              }
              transition-all duration-200
              `}
                href={nav.href}
              >
                {nav.name}
              </Link>
            ))}
          </div>
          <div className="flex items-center">
            <Link
              className={` py-2 px-4 ${
                isScrolled
                  ? "bg-white text-black"
                  : "bg-renondera-main text-white"
              } rounded-xl hover:opacity-95 transition-all duration-200`}
              href="/dashboard"
            >
              Dashboard
            </Link>
            <div
              onClick={toggleMobile}
              className="p-2 rounded-full cursor-pointer md:hidden"
            >
              <BiMenuAltRight size={"36"} />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm ease-in duration-300
          ${isMobile ? "translate-x-0" : "translate-x-[-101%]"}
        `}
      >
        <div className="absolute right-5 top-5">
          <div
            onClick={toggleMobile}
            className="p-2 rounded-full cursor-pointer text-white"
          >
            <AiOutlineClose size={"36"} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="flex flex-col gap-5">
            {MainConfig.navbar.links.map((nav, index) => (
              <Link
                key={index}
                className={` text-4xl font-semibold text-white ease-in first:delay-100 delay-150 last:delay-200 duration-500 ${
                  isMobile ? "translate-x-0" : "translate-x-[-501%]"
                }
              `}
                href={nav.href}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
