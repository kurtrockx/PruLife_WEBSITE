import Logo from "./Logo";
import NavButton from "./NavButton";
import NavLinkContainer from "./NavLinkContainer";

export default function Navbar() {
  return (
    <div className="flex max-h-[10dvh] justify-between bg-[#e0ebf4] px-12 py-4 shadow-lg shadow-neutral-200">
      <Logo />
      <NavLinkContainer />
      <NavButton />
    </div>
  );
}
