import logoImage from "../assets/logo.png";

export default function Logo() {
  return (
    <div className="flex aspect-square max-w-28 items-center">
      <img
        className="block h-full object-contain"
        src={logoImage}
        alt="PruLife Logo"
      />
    </div>
  );
}
