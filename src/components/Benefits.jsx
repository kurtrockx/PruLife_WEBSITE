import { ShieldCheck, HeartPulse, TrendingUp, Gem } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Endowment Insurance",
      desc: "Endowment insurance provides both protection and savings. It pays a lump sum either after a specific period or in case of the insured's passing, making it ideal for future goals like education, home purchase, or retirement.",
      icon: Gem,
      color: "#f87171", // ruby red
      glow: "rgba(248, 113, 113, 0.4)",
    },
    {
      title: "Term Life Insurance",
      desc: "Term life insurance offers affordable, time-based protection that ensures your family's financial stability if you pass away during the coverage period. It's ideal for those who want high coverage at a lower cost—perfect for income replacement, debt protection, or family security.",
      icon: ShieldCheck,
      color: "#facc15", // warm gold
      glow: "rgba(250, 204, 21, 0.4)",
    },
    {
      title: "Insurance Investment",
      desc: "This type of insurance combines protection and wealth growth. Part of your premium goes to life coverage, while the rest is invested, allowing your money to grow over time and helping you build savings for future goals.",
      icon: TrendingUp,
      color: "#38bdf8", // sky blue
      glow: "rgba(56, 189, 248, 0.4)",
    },
    {
      title: "Traditional Insurance",
      desc: "Traditional insurance offers lifelong protection with guaranteed benefits. It provides financial support to your beneficiaries in case of your passing, helping them cover expenses like debts, education, or daily needs while giving long-term peace of mind.",
      icon: HeartPulse,
      color: "#4ade80", // emerald green
      glow: "rgba(74, 222, 128, 0.4)",
    },
  ];

  return (
    <section id="benefits"
      className="relative w-full overflow-hidden px-3 py-16 sm:px-6 md:px-12 lg:px-24"
      style={{
        background:
          "linear-gradient(180deg, #f9fafb 0%, #ffffff 40%, #f3f4f6 100%)",
      }}
    >
      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      ></div>

      {/* Header */}
      <div className="relative mb-12 text-center text-gray-800">
        <h1 className="relative mb-4 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Our Benefits
          <span className="absolute bottom-[-10px] left-1/2 h-[3px] w-16 -translate-x-1/2 rounded-full bg-[#f87171]" />
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 sm:text-xl">
          Protect what matters most — enjoy life confidently with benefits that
          truly have you covered.
        </p>
      </div>

      {/* Grid layout */}
      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-4">
        {benefits.map(({ title, desc, icon: Icon, color, glow }, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-2xl px-4 py-6 text-xs shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-5 md:p-6 ${
              index >= 2
                ? "sm:col-span-2 lg:col-span-1"
                : "sm:col-span-1 lg:col-span-1"
            }`}
            style={{
              background:
                "linear-gradient(180deg, #2c0e11 0%, #3b1216 40%, #1a0608 100%)",
              border: `1px solid ${color}33`,
            }}
          >
            {/* Decorative top bar */}
            <div
              className="absolute top-0 left-0 h-1 w-full"
              style={{
                background: `linear-gradient(to right, ${color}, ${color}66)`,
              }}
            />

            {/* Icon */}
            <div className="mb-5 flex items-center justify-center">
              <div
                className="flex h-14 w-14 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: `${color}22`,
                  color,
                  boxShadow: `0 0 15px ${glow}`,
                }}
              >
                <Icon className="h-7 w-7" strokeWidth={2} />
              </div>
            </div>

            {/* Title & Description */}
            <h3
              className="mb-3 text-center font-serif text-2xl font-semibold"
              style={{ color }}
            >
              {title}
            </h3>
            <p className="text-justify leading-relaxed text-gray-300">{desc}</p>

            {/* Hover underline animation */}
            <span
              className="absolute bottom-4 left-1/2 h-[3px] w-0 rounded-full bg-[length:200%_100%] opacity-0 transition-all duration-500 group-hover:left-0 group-hover:w-full group-hover:opacity-100"
              style={{
                background: `linear-gradient(to right, ${color}, #ff4d4d, ${color})`,
                boxShadow: `0 0 10px ${glow}`,
              }}
            ></span>
          </div>
        ))}
      </div>
    </section>
  );
}
