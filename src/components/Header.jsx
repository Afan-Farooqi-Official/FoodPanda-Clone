import '../App.css'
import { useState } from "react"

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header class='flex justify-between items-center h-16 shadow-md sticky top-0 bg-white z-10 px-4 md:px-14'>
            <nav class='flex items-center gap-2 cursor-pointer ml-4 md:ml-16'>
                <img class='w-7 h-7' src="../download.svg" alt="logo-pic" />
                <img class='h-6' src="../download (1).svg" alt="logo-txt" />
            </nav>
            <div class='hidden sm:flex gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                <p>Location karachi</p>
            </div>
            <div class='flex flex-wrap gap-4 md:gap-6 items-center'>
                <button class='hidden sm:block border rounded-sm px-4 py-1 cursor-pointer transition-transform duration-300 ease-out hover:bg-gray-100 hover:scale-105'>
                    Log in
                </button>
                <button class='hidden sm:block bg-pink-500 text-white font-medium px-5 py-1 rounded-md cursor-pointer hover:bg-pink-600 hover:scale-105'>
                    Sign up for free delivery
                </button>
                <label class="hidden sm:flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                  <select name="language" class='bg-transparent outline-none text-xs sm:text-sm md:text-base'>
                    <option value="eng">EN</option>
                    <option value="ur">UR</option>
                  </select>
                </label>
                <div class='flex items-center bg-gray-100 p-2 rounded-full cursor-not-allowed mr-2 md:mr-20'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag text-gray-200"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                </div>
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="sm:hidden p-2 rounded-md hover:bg-gray-100 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
            
            {isOpen && (
              <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 sm:hidden">
                <button className="border px-4 py-2 rounded">Log in</button>
                <button className="bg-pink-500 text-white px-4 py-2 rounded">Sign up</button>
                <select className="border px-2 py-1 rounded">
                  <option>EN</option>
                  <option>UR</option>
                </select>
              </div>
            )}

        </header>
    )
}

export default Header;