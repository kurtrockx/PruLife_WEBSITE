import React from "react";
import { X } from "lucide-react";

export default function AnnouncementModal({ announcement, onClose }) {
  if (!announcement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-white shadow-2xl ring-1 ring-gray-200 md:h-auto md:max-h-[90vh] md:max-w-3xl md:rounded-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 rounded-full bg-white/90 p-1.5 shadow transition hover:bg-white"
        >
          <X className="h-5 w-5 text-[#b30f1c]" />
        </button>

        {/* Image */}
        {announcement.images?.[0] && (
          <img
            src={announcement.images[0]}
            alt={announcement.title}
            className="max-h-[50%] w-full flex-shrink-0 object-contain sm:h-80 lg:object-cover py-4"
          />
        )}

        {/* Scrollable Content */}
        <div className="flex-1 overflow-auto p-4 md:p-6">
          <h2 className="mb-2 font-serif text-[0.75rem] font-bold text-[#b30f1c] sm:text-sm md:text-lg">
            {announcement.title}
          </h2>
          {announcement.subtitle && (
            <p className="mb-3 text-[0.65rem] font-medium text-gray-700 sm:text-[0.75rem] md:text-base">
              {announcement.subtitle}
            </p>
          )}
          <p className="text-justify text-[0.6rem] leading-relaxed text-gray-600 sm:text-[0.7rem] md:text-sm">
            {announcement.content}
          </p>
          <p className="mt-3 text-[0.55rem] text-gray-500 italic sm:text-[0.65rem] md:text-sm">
            — {announcement.author || "Admin"}
          </p>
        </div>
      </div>
    </div>
  );
}
