import bannerPic from "../../assets/banner.png";

export default function BannerPic() {
  return (
    <img
      src={bannerPic}
      alt="banner"
      className="block h-[100%] w-[100%] object-cover select-none"
    />
  );
}
