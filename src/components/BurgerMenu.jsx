import BurgerIcon from "../assets/burgerIcon.svg";

export default function BurgerMenu() {
  return (
    <div className="flex flex-1 items-center xl:hidden">
      <img className="w-8 object-contain" src={BurgerIcon} alt="Burger Icon" />
    </div>
  );
}
