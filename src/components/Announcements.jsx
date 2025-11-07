import React, { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { listenToAnnouncements } from "../backend/firebase_firestore";
import AnnouncementModal from "./AnnouncementModal";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [fade, setFade] = useState(false);
  const thumbnailRefs = useRef([]);

  useEffect(() => {
    const unsubscribe = listenToAnnouncements((data) => {
      const sorted = data.sort(
        (a, b) => b.createdAt?.seconds - a.createdAt?.seconds,
      );
      setAnnouncements(sorted);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (thumbnailRefs.current[currentIndex]) {
      thumbnailRefs.current[currentIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentIndex]);

  if (announcements.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center text-gray-500">
        Loading announcements...
      </div>
    );
  }

  const current = announcements[currentIndex];

  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
      setFade(false);
    }, 200);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prev) => (prev - 1 + announcements.length) % announcements.length,
      );
      setFade(false);
    }, 200);
  };

  return (
    <section id="announcements" className="w-full bg-gradient-to-b from-gray-50 via-white to-gray-300 px-3 py-10 sm:px-6 md:px-8 lg:px-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="relative mb-4 font-serif text-3xl font-semibold tracking-tight text-[#b30f1c] sm:text-4xl lg:text-5xl">
          Announcements
          <span className="absolute bottom-[-8px] left-1/2 h-[2.5px] w-12 -translate-x-1/2 rounded-full bg-[#b30f1c]" />
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-600 sm:text-lg lg:text-xl">
          Protect what matters most — enjoy life confidently with benefits that
          truly have you covered.
        </p>
      </div>

      {/* Featured Announcement */}
      <div
        onClick={() => setSelectedAnnouncement(current)}
        className={`relative mx-auto mb-8 flex h-auto max-w-7xl cursor-pointer flex-col overflow-hidden rounded-2xl shadow-lg ring-1 ring-gray-200 transition-all duration-500 md:flex-row md:items-center ${
          fade ? "scale-[0.98] opacity-0" : "scale-100 opacity-100"
        }`}
        style={{
          background:
            "linear-gradient(180deg, #2c0e11 0%, #3b1216 40%, #1a0608 100%)",
          border: "1px solid rgba(248,113,113,0.2)",
          backdropFilter: "blur(8px)",
        }}
      >
        {/* Decorative top bar */}
        <div
          className="absolute top-0 left-0 h-1 w-full"
          style={{
            background: "linear-gradient(to right, #f87171, #ff9999)",
          }}
        />

        {/* Image */}
        <div className="flex justify-center md:max-w-[45%] md:justify-start">
          <img
            src={current.images?.[0]}
            alt={current.title}
            className="h-[300px] w-full rounded-lg object-cover transition-transform duration-500 hover:scale-105 sm:h-[350px] md:h-[420px]"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-1 flex-col justify-center p-4 sm:p-5 md:p-7">
          <h2 className="mb-2 font-serif text-lg font-bold text-[#f87171] sm:text-xl md:text-2xl">
            {current.title}
          </h2>
          {current.subtitle && (
            <p className="mb-2 text-[12px] font-medium text-gray-300 sm:text-sm md:text-base">
              {current.subtitle}
            </p>
          )}
          <p className="mb-3 line-clamp-5 text-justify text-[11px] leading-relaxed text-gray-300 sm:text-[12px] md:text-sm">
            {current.content}
          </p>
          <p className="text-[10px] text-gray-400 italic sm:text-[11px]">
            — {current.author || "Admin"}
          </p>
        </div>

        {/* Bottom glow underline */}
        <span
          className="absolute bottom-0 left-0 h-[3px] w-0 rounded-full opacity-0 transition-all duration-500 group-hover:w-full group-hover:opacity-100"
          style={{
            background: "linear-gradient(to right, #f87171, #ff4d4d, #f87171)",
            boxShadow: "0 0 10px rgba(248, 113, 113, 0.4)",
          }}
        ></span>
      </div>

      {/* Carousel Section */}
      <div className="relative flex items-center justify-center">
        <button
          onClick={handlePrev}
          className="absolute left-0 z-10 rounded-full bg-white/80 p-1.5 shadow-md ring-1 ring-gray-200 transition hover:scale-105 hover:bg-white"
        >
          <ChevronLeft className="h-4 w-4 text-[#b30f1c]" />
        </button>

        <div className="scrollbar-red flex w-full max-w-4xl gap-2 overflow-x-auto scroll-smooth px-2 py-2 sm:gap-3 sm:px-4">
          {announcements.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => (thumbnailRefs.current[idx] = el)}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-20 w-32 flex-shrink-0 cursor-pointer overflow-hidden rounded-xl border-2 shadow-sm transition-all duration-300 sm:h-24 sm:w-40 md:h-28 md:w-44 ${
                idx === currentIndex
                  ? "scale-105 border-[#b30f1c] shadow-md"
                  : "border-transparent hover:scale-105 hover:shadow-md"
              }`}
            >
              <img
                src={item.images?.[0]}
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all hover:from-black/50"></div>
              <div className="absolute right-1 bottom-1 left-1 text-[9px] font-semibold text-white drop-shadow sm:text-[10px]">
                {item.title}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="absolute right-0 z-10 rounded-full bg-white/80 p-1.5 shadow-md ring-1 ring-gray-200 transition hover:scale-105 hover:bg-white"
        >
          <ChevronRight className="h-4 w-4 text-[#b30f1c]" />
        </button>
      </div>

      {/* Modal */}
      {selectedAnnouncement && (
        <AnnouncementModal
          announcement={selectedAnnouncement}
          onClose={() => setSelectedAnnouncement(null)}
        />
      )}
    </section>
  );
}
