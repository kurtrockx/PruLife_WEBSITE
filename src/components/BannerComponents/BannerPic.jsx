import bannerPic from "../../assets/banner.png";

export default function BannerPic() {
  return (
    <img
      src={bannerPic}
      alt="banner"
      className="h-full w-full object-cover brightness-[0.85] select-none"
    />
  );
}
