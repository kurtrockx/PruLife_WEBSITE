import React from "react";
import { X } from "lucide-react";

export default function AnnouncementModal({ announcement, onClose }) {
  if (!announcement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="animate-fadeIn relative flex h-[100dvh] w-full max-w-[100dvw] flex-col overflow-hidden p-4 bg-white shadow-2xl ring-1 ring-gray-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full bg-white/90 p-1.5 shadow hover:bg-white"
        >
          <X className="h-5 w-5 text-[#b30f1c]" />
        </button>

        {/* Image */}
        {announcement.images?.[0] && (
          <img
            src={announcement.images[0]}
            alt={announcement.title}
            className="xs:h-36 max-h-[50%] w-full flex-shrink-0 object-contain sm:h-52"
          />
        )}

        {/* Scrollable Content */}
        <div className=" flex-1 overflow-auto p-4">
          <h2 className="text-[0.65rem] mb-2 font-serif text-lg font-bold text-[#b30f1c] sm:text-sm">
            {announcement.title}
          </h2>
          {announcement.subtitle && (
            <p className="text-[0.6rem] mb-3 font-medium text-gray-700 sm:text-[0.7rem]">
              {announcement.subtitle}
            </p>
          )}
          <p className="text-[0.6rem] text-justify leading-relaxed text-gray-600 sm:text-[0.7rem]">
            {announcement.content}
          </p>
          <p className="text-[0.55rem] mt-3 text-gray-500 italic sm:text-[0.65rem]">
            — {announcement.author || "Admin"}
          </p>
        </div>
      </div>
    </div>
  );
}
