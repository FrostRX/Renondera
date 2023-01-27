import Link from "next/link";
import { MainConfig } from "@/config/main-config";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Footer() {
  // Get th year actual
  const year = new Date().getFullYear();
  return (
    <div className="mt-10">
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <div className="flex md:flex-row flex-col gap-10 justify-between items-center">
            <div>
              <h1 className="text-gray-700 font-bold text-3xl md:text-left text-center">
                Renondera
              </h1>
              <p className="max-w-lg md:text-left text-center mt-4">
                Renondera Renondera es un sistema que provee herramientas para
                emprendedores, escritores de blogs, influencers y demás.
              </p>
              {/* All Socials */}
              <div className="flex gap-4 mt-4">
                {/* Titter */}
                <Link
                  href="https://twitter.com/"
                  target={"_blank"}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <FaTwitter />
                </Link>
                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/"
                  target={"_blank"}
                  className="text-gray-500 hover:text-gray-900"
                >
                  <FaInstagram />
                </Link>
                {/* GitHub */}
              </div>
            </div>
            <div className="flex gap-16 md:gap-10">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
                  Company
                </h3>
                <ul className="mt-4 space-y-4">
                  {MainConfig.footer.company.map((cmp, index) => (
                    <li key={index}>
                      <Link
                        href={cmp.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {cmp.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wide uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  {MainConfig.footer.support.map((spp, index) => (
                    <li key={index}>
                      <Link
                        href={spp.href}
                        className="text-base text-gray-500 hover:text-gray-900"
                      >
                        {spp.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; {year} Renondera, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
