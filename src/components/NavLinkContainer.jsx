import { useState } from "react";
import NavLink from "./NavLink";

const links = ["Home", "About", "Insurance", "Team", "News"];

export default function NavLinkContainer() {
  const [active, setActive] = useState("");

  return (
    <ul className="flex w-full justify-center px-8">
      {links.map((l) => (
        <NavLink link={l} onActive={setActive} active={active} />
      ))}
    </ul>
  );
}
