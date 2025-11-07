import React from "react";
import prulifeLogo from "../assets/prulifeLogo.svg";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-800 px-6 py-8 text-gray-100 shadow-inner">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        {/* Logo & Copy */}
        <div className="flex flex-col items-center gap-2 md:items-start">
          <img
            src={prulifeLogo}
            alt="PruLife UK Logo"
            className="mb-1 h-10 w-auto"
          />
          <p className="text-sm">
            &copy; {new Date().getFullYear()} PruLife UK. All rights reserved.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <div className="flex gap-4">
            <a href="#" className="text-sm transition hover:text-red-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm transition hover:text-red-300">
              Terms of Service
            </a>
            <a href="#" className="text-sm transition hover:text-red-300">
              Contact
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-2 flex gap-4 md:mt-0">
            <a href="#" className="transition hover:text-red-300">
              <FaFacebookF />
            </a>
            <a href="#" className="transition hover:text-red-300">
              <FaTwitter />
            </a>
            <a href="#" className="transition hover:text-red-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
