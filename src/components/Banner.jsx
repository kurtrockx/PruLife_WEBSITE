import BannerBigText from "./BannerComponents/BannerBigText";
import BannerButton from "./BannerComponents/BannerButton";
import BannerPic from "./BannerComponents/BannerPic";

export default function Banner() {
  return (
    <div className="relative h-[90dvh] w-full">
      <BannerPic />
      <BannerBigText />
      <BannerButton />
    </div>
  );
}
