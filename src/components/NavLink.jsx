export default function NavLink({ NavTo = "#", link, onActive, active }) {
  return (
    <li
      className="group relative flex cursor-pointer items-center px-8 text-lg"
      onClick={() => onActive(link)}
    >
      <a
        className="font-times text-xl duration-100 group-hover:-translate-y-0.5"
        href={NavTo}
      >
        {link}
      </a>
      {active != link && (
        <div className="absolute bottom-0 left-0 h-1 w-full -translate-y-4 bg-black opacity-0 duration-200 group-hover:translate-0 group-hover:opacity-80"></div>
      )}
      {active && (
        <div
          style={{
            opacity: active === link ? "80%" : "",
            transform: active === link ? "translateY(1rem)" : "0",
          }}
          className="absolute bottom-0 left-0 h-1 w-full -translate-y-4 bg-black opacity-0 duration-200"
        ></div>
      )}
    </li>
  );
}
