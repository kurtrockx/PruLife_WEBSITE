import logoImage from "../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex aspect-square flex-1 items-center justify-center xl:justify-start">
      <img
        className="block h-full max-w-28 object-contain"
        src={logoImage}
        alt="PruLife Logo"
      />
    </div>
  );
}
