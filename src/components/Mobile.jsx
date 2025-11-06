import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import mobile4 from "../assets/mobile4.png";
import mobile5 from "../assets/mobile5.png";

export default function Mobile() {
  const images = [mobile1, mobile3, mobile2, mobile4, mobile5];

  // Rotation for slight fanning
  const rotations = [-12, -6, 0, 6, 12];

  // zIndex to ensure front image is on top
  const zIndices = [1, 2, 3, 2, 1];

  // Scale for perspective: back images smaller, front larger
  const scales = [0.7, 0.85, 1, 0.85, 0.7];

  // Horizontal spread
  const spread = 90;

  return (
    <section className="bg-white px-8 py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 md:grid md:grid-cols-2 md:items-center">
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
            <button className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700 hover:shadow-lg">
              Download on iOS
            </button>
            <button className="rounded-lg bg-gray-200 px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-300 hover:shadow-lg">
              Download on Android
            </button>
          </div>
        </div>

        {/* Perspective Fanned Image Layout */}
        <div className="relative flex h-[450px] items-center justify-center md:h-[550px]">
          {images.map((img, i) => (
            <div
              key={i}
              className="absolute overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
              style={{
                zIndex: zIndices[i],
                transform: `translateX(${(i - 2) * spread}px) rotate(${rotations[i]}deg) scale(${scales[i]})`,
              }}
            >
              <img
                src={img}
                alt={`Mobile screenshot ${i + 1}`}
                className="h-auto w-48 object-cover md:w-56"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
