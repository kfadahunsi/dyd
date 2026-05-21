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
    <div className='w-full flex justify-center '>
      <nav className='w-full lg:w-2/4 flex gap-10 border-2 h-9  overflow-x-auto no-scrollbar whitespace-nowrap snap-x snap-mandatory px-4 pl-4 mt-2 lg:justify-center lg:border lg:border-black lg:items-center lg:rounded'>
          {menuDetails.map((menuItem, menuIndex)=>{
              return <NavLink 
                          className={({isActive})=>`shrink-0 snap-start px-2 rounded flex ${isActive ? "font-semibold bg-red-200" : ""}`}
                          key={menuIndex} 
                          to={menuItem.path}
                          >{menuItem.displayText}
                      </NavLink>
          })}
      </nav>
    </div>
  )
}

//bg-[#C9EAFF]