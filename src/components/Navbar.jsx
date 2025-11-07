import { useState } from "react";
import prulifeLogo from "../assets/prulifeLogo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    "Home",
    "Announcements",
    "Services",
    "Benefits",
    "Mobile",
    "About",
  ];

  return (
    <nav className="sticky top-0 left-0 z-50 border-b border-gray-100 bg-white/90 px-2 shadow-sm backdrop-blur-md md:px-8 lg:px-18">
      <div className="mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img
            src={prulifeLogo}
            alt="PruLife Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-lg font-semibold tracking-wide text-gray-800 ">
            PruLife UK
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex">
          {navItems.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              className="cursor-pointer transition-colors duration-200 hover:text-red-600"
            >
              {item}
            </a>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-lg p-2 transition-colors hover:bg-gray-100 md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"} h-dvh`}
        role="dialog"
        aria-modal="true"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setIsOpen(false)}
        />
        {/* Drawer Panel */}
        <div
          className={`relative h-full w-64 max-w-full overflow-y-auto bg-white shadow-xl max-sm:w-dvw ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <img
              src={prulifeLogo}
              alt="PruLife Logo"
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-2 transition-colors hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="mt-6 flex flex-col items-start gap-4 px-6 text-sm font-medium text-gray-700">
            {navItems.map((item) => (
              <a
                key={item}
                className="w-full rounded py-2 text-left transition-colors hover:bg-gray-50 hover:text-red-600"
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                {item}
              </a>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
