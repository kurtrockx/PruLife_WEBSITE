export default function BannerButton() {
  return (
    <div className="absolute bottom-0 left-0 pb-[8%] pl-[8%]">
      <button className="font-times block cursor-pointer rounded-xl border border-black/80 bg-[#b30f1c] px-4 py-2 text-white shadow-[2px_2px_4px] shadow-black/50 duration-150 hover:-translate-y-0.5 hover:shadow-md hover:brightness-95 active:scale-95 active:shadow-[none]">
        <p className="text-xl">Let's Get Started</p>
      </button>
    </div>
  );
}
