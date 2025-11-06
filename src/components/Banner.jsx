import BannerPic from "./BannerComponents/BannerPic";
import BannerBigText from "./BannerComponents/BannerBigText";
import BannerButton from "./BannerComponents/BannerButton";

export default function Banner() {
  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-black text-white">
      {/* Image layer */}
      <BannerPic />

      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/80" />

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col justify-center space-y-10 px-[6%] md:px-[10%]">
        <BannerBigText />
        <BannerButton />
      </div>
    </section>
  );
}
