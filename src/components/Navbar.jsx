import prulifeLogo from "../assets/prulifeLogo.svg";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-1000 flex items-center justify-between bg-white px-4 py-2 shadow-md">
      <div>
        <img className="max-h-20" src={prulifeLogo} alt="" />
      </div>
      <ul className="flex gap-4">
        <li>Home</li>
        <li>About</li>
        <li>Insurance</li>
        <li>Team</li>
        <li>News</li>
      </ul>
    </nav>
  );
}
