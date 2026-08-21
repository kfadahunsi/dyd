import { NavLink } from 'react-router'

const menuDetails = [
  {
    path: "/",
    displayText: "Home",
  },
  {
    path: "/managers",
    displayText: "Managers",
  },
  {
    path: "/table",
    displayText: "Table",
  },
  {
    path: "/history",
    displayText: "History",
  },
  {
    path: "/cup",
    displayText: "Cup",
  },
]

export default function Menu() {
  return (
    <div className="w-full flex justify-center px-4 pt-3 pb-1">
      <nav className="flex items-center gap-1.5 p-1 rounded-full bg-card/80 backdrop-blur-md border border-border shadow-xs overflow-x-auto max-w-full">
        {menuDetails.map((menuItem) => (
          <NavLink
            key={menuItem.path}
            to={menuItem.path}
            className={({ isActive }) =>
              `shrink-0 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/70"
              }`
            }
          >
            {menuItem.displayText}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}