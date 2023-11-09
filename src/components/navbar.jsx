import { useState } from "react"
import { logo } from "../assests"
import { navigationLinks } from "./navlinks"

const Navbar = () => {
  return (
    
    <div className="w-full flex justify-center items-center">
        <ul className="list-none sm:flex hidden
         justify-center items-center flex-1 gap-[20px]">{navigationLinks.map((nav,idx) => (
            <li key={nav.id} className="font-montserat font-normal cursor-pointer text-[16px] text-white hover:text-purple transition-all duration-500">{nav.title}</li>
        ))}

        </ul>
    </div>
  )
}

export default Navbar