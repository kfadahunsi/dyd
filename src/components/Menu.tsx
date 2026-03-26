import { NavLink } from 'react-router'

const menuDetails = [
    {
    path: "/",
    displayText: "Home",
    },
    {
    path: "managers",
    displayText: "Managers",
    },
    {
    path: "table",
    displayText: "Table",
    },
    {
    path: "history",
    displayText: "History",
    },
    {
    path: "cup",
    displayText: "Cup",
    },
]
export default function Menu() {
  return (
    <nav className='flex gap-17 shrink-0 border-y-2 overflow-x-auto no-scrollbar whitespace-nowrap snap-x snap-mandatory px-4 scroll-pl-4 mt-2 lg:justify-center lg:border-b'>
        {menuDetails.map((menuItem, menuIndex)=>{
            return <NavLink 
                        className="shrink-0 snap-start active:font-semibold" 
                        key={menuIndex} 
                        to={menuItem.path}>{menuItem.displayText}
                    </NavLink>
        })}
    </nav>
  )
}
