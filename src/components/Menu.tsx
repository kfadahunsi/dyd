import { NavLink } from 'react-router'

const menuDetails = [
    {
    path: "/",
    displayText: "Home",
    },
    {
    path: "teams",
    displayText: "Teams",
    },
    {
    path: "table",
    displayText: "Table",
    },
    {
    path: "history",
    displayText: "History",
    },
]
export default function Menu() {
  return (
    <nav className='flex gap-17 overflow-x-auto no-scrollbar whitespace-nowrap scrollbar-hide snap-x snap-mandatory px-4 mt-2 lg: justify-center'>
        {menuDetails.map((menuItem, menuIndex)=>{
            return <NavLink 
                        className="shrink-0 active:font-semibold" 
                        key={menuIndex} 
                        to={menuItem.path}>{menuItem.displayText}
                    </NavLink>
        })}
    </nav>
  )
}
