import React from "react";
import { X } from "lucide-react";

export default function AnnouncementModal({ announcement, onClose }) {
  if (!announcement) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-6 backdrop-blur-sm">
      <div className="animate-fadeIn relative w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-gray-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 rounded-full bg-white/90 p-1.5 shadow hover:bg-white"
        >
          <X className="h-5 w-5 text-[#b30f1c]" />
        </button>

        {/* Image */}
        {announcement.images?.[0] && (
          <img
            src={announcement.images[0]}
            alt={announcement.title}
            className="h-64 w-full object-cover"
          />
        )}

        {/* Content */}
        <div className="p-5 sm:p-7">
          <h2 className="mb-2 font-serif text-xl font-bold text-[#b30f1c] sm:text-2xl">
            {announcement.title}
          </h2>
          {announcement.subtitle && (
            <p className="mb-3 text-sm font-medium text-gray-700 sm:text-base">
              {announcement.subtitle}
            </p>
          )}
          <p className="text-justify text-sm leading-relaxed text-gray-600 sm:text-base">
            {announcement.content}
          </p>
          <p className="mt-3 text-xs text-gray-500 italic sm:text-sm">
            — {announcement.author || "Admin"}
          </p>
        </div>
      </div>
    </div>
  );
}
