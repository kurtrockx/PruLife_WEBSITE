import { CheckCircle2, Shield, Heart, Briefcase } from "lucide-react";

export default function Services() {
  const plans = [
    {
      title: "Best Plan",
      desc: "Full protection and strong investment growth.",
      icon: Shield,
      color: "#b30f1c",
      glow: "rgba(179, 15, 28, 0.3)",
      features: [
        "₱3M Life Coverage",
        "₱1.5M Disability & Accident",
        "₱2,000 Daily Hospital Income",
        "Surgical & Critical Illness Waiver",
        "Projected Fund Value: ₱1.85M in 20yrs",
      ],
    },
    {
      title: "Better Plan",
      desc: "Balanced protection at a smart price.",
      icon: Briefcase,
      color: "#a52835",
      glow: "rgba(165, 40, 53, 0.3)",
      features: [
        "₱2.4M Life Coverage",
        "₱1M Disability & Accident",
        "₱1,500 Daily Hospital Income",
        "Disability Waiver",
        "Projected Fund Value: ₱1.1M in 20yrs",
      ],
    },
    {
      title: "Good Plan",
      desc: "Affordable and reliable insurance.",
      icon: Heart,
      color: "#c04a55",
      glow: "rgba(192, 74, 85, 0.3)",
      features: [
        "₱1.5M Life Coverage",
        "₱1M Disability & Hospital",
        "₱1,500 Daily Hospital Income",
        "Disability Waiver",
        "Projected Fund Value: ₱894K in 20yrs",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-gradient-to-b from-gray-50 to-white px-3 py-10 sm:px-6 md:px-12 lg:px-20 xl:px-24"
    >
      {/* Header */}
      <div className="mb-8 text-center sm:mb-10">
        <h1 className="relative mb-3 font-serif text-3xl font-semibold tracking-tight text-[#b30f1c] sm:text-4xl md:text-5xl">
          Our Services
          <span className="absolute bottom-[-8px] left-1/2 h-[3px] w-14 -translate-x-1/2 rounded-full bg-[#b30f1c]" />
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600 sm:text-lg md:text-xl">
          We’re covering all the life insurance fields — offering protection,
          savings, and peace of mind for every stage of life.
        </p>
      </div>

      {/* Grid layout */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 2xl:grid-cols-3 2xl:gap-8">
        {plans.map(
          ({ title, desc, icon: Icon, color, glow, features }, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-white px-3 py-4 text-xs shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-5 md:p-6 ${
                index === 2 ? "sm:col-span-2 2xl:col-span-1" : ""
              }`}
            >
              {/* Icon */}
              <div className="mb-4 flex items-center justify-center">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-full shadow-inner transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${color}15`,
                    color,
                    boxShadow: `0 0 12px ${glow}`,
                  }}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
              </div>

              {/* Title & Description */}
              <h3
                className="mb-1 text-center font-serif text-xl font-semibold sm:text-2xl"
                style={{ color }}
              >
                {title}
              </h3>
              <p className="mb-5 text-center text-sm text-gray-600 sm:text-base">
                {desc}
              </p>

              {/* Features List */}
              <ul className="space-y-2 text-gray-700 sm:space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-500 sm:h-5 sm:w-5" />
                    <span
                      className={
                        i === features.length - 1
                          ? "text-xs font-medium sm:text-sm"
                          : "text-xs sm:text-sm"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
