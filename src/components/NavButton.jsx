export default function NavButton() {
  return (
    <div className="flex flex-1 items-center justify-end">
      <button className="block h-fit cursor-pointer rounded-2xl rounded-br-none border bg-white/80 px-2 py-1.5 whitespace-nowrap duration-150 hover:-translate-y-0.5 hover:bg-white hover:shadow-md active:scale-95 active:shadow-[none] xl:px-4 xl:py-2 xl:text-lg">
        Get a Quote
      </button>
    </div>
  );
}
