import banner from "../assets/banner.png";

export default function Banner() {
  return (
    <div className="relative max-w-dvw overflow-hidden">
      <img
        className="relative z-1 object-cover brightness-75"
        src={banner}
        alt=""
      />
      <div className="absolute top-0 left-0 z-2 flex flex-col gap-8 p-20">
        <h1 className="text-6xl font-medium text-white">
          Insurance for the better <span className="text-red-600">life.</span>
        </h1>
        <p className="max-w-120 text-justify text-lg">
          Insurance for a better family life gives protection and peace of mind
          during emergencies, keeping your loved ones secure and supported.
        </p>
        <button className="w-fit rounded-xl bg-red-600 px-4 py-2 text-white shadow-md">
          Let's Get Started
        </button>
      </div>
    </div>
  );
}
