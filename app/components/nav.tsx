import Link from "next/link";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/project": {
    name: "project",
  },
  "/work": {
    name: "work",
  },
};

export function Navbar() {
  return (
    <aside className="z-10 sticky top-0 rounded-md backdrop-blur-lg backdrop-saturate-100 -ml-[14px] mb-20 tracking-tight">
      <nav
        className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
        id="nav"
      >
        <div className="flex flex-row space-x-0 pr-10">
          {Object.entries(navItems).map(([path, { name }]) => {
            return (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
