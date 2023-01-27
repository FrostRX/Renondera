"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MainConfig } from "../config/main-config";
export default function Navbar() {
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

  return (
    <div
      className={`fixed w-full h-20 transition-all duration-200 ${
        isScrolled && "bg-renondera-main"
      }`}
    >
      <div className="flex items-center justify-between w-[70%] mx-auto h-full">
        <div>
          <Link
            className={`text-2xl ${isScrolled ? "text-white" : "text-gray-700"}
          
          } font-bold`}
            href="/"
          >
            Renondera
          </Link>
        </div>
        <div className="flex gap-5">
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
        <div>
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
        </div>
      </div>
    </div>
  );
}
