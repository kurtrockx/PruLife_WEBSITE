import { useState } from "react";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import mobile4 from "../assets/mobile4.png";
import mobile5 from "../assets/mobile5.png";
import qr from "../assets/qr.png";

export default function Mobile() {
  const images = [mobile1, mobile3, mobile2, mobile4, mobile5];
  const rotations = [-12, -6, 0, 6, 12];
  const zIndices = [1, 2, 3, 2, 1];
  const scales = [0.7, 0.85, 1, 0.85, 0.7];
  const spread = 90;

  const [showQr, setShowQr] = useState(false);
  const apkLink = "https://expo.dev/artifacts/eas/bMGvd9HmYvC3CYpgCAZGsM.apk";

  const handleDownloadClick = (e) => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // On mobile, go directly to link
      window.location.href = apkLink;
    } else {
      // On desktop, show QR modal
      e.preventDefault();
      setShowQr(true);
    }
  };

  const handleQrClick = () => {
    // Trigger download for desktop users
    const a = document.createElement("a");
    a.href = apkLink;
    a.download = "app.apk";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setShowQr(false);
  };

  return (
    <section id="mobile" className="bg-white px-8 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:grid lg:grid-cols-2 lg:items-center">
        {/* Text Content */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold text-gray-900">
            Experience Our Mobile App
          </h2>
          <p className="text-lg text-gray-600">
            Stay connected and manage everything on the go. Our app brings
            seamless functionality right to your fingertips.
          </p>
          <ul className="space-y-3 text-gray-600">
            <li>✅ Easy-to-use interface</li>
            <li>✅ Real-time notifications</li>
            <li>✅ Secure and reliable</li>
          </ul>
          <div className="mt-6 flex gap-4">
            <button
              onClick={handleDownloadClick}
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 hover:shadow-lg"
            >
              Download Now
            </button>
          </div>
        </div>

        {/* Perspective Fanned Image Layout */}
        <div className="relative flex h-[300px] items-center justify-center sm:h-[400px] md:h-[450px] lg:h-[550px]">
          {images.map((img, i) => {
            let currentSpread = spread;
            if (window.innerWidth < 640) currentSpread = spread * 0.5;
            else if (window.innerWidth < 768) currentSpread = spread * 1;

            return (
              <div
                key={i}
                className="absolute overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                style={{
                  zIndex: zIndices[i],
                  transform: `translateX(${(i - 2) * currentSpread}px) rotate(${rotations[i]}deg) scale(${scales[i]})`,
                }}
              >
                <img
                  src={img}
                  alt={`Mobile screenshot ${i + 1}`}
                  className="h-auto w-28 object-cover sm:w-36 md:w-48 lg:w-56"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* QR Modal */}
      {showQr && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={() => setShowQr(false)} // close on background click
        >
          <div
            className="relative rounded-lg bg-white p-12 shadow-lg "
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking modal itself
          >
            <h2 className="mb-4 text-center text-lg font-bold">
              Scan or Click to Download
            </h2>
            <img
              src={qr}
              alt="QR Code"
              className="h-60 w-60 cursor-pointer object-contain"
              onClick={handleQrClick}
            />
            <button
              onClick={() => setShowQr(false)}
              className="absolute top-2 right-2 rounded-full bg-red-600 px-3 py-1 text-white hover:bg-red-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
