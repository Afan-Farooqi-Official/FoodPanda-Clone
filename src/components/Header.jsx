import '../App.css'

const Header = () => {
    return (
        <header class='flex justify-between items-center h-16 shadow-md top-0 position: sticky bg-white z-1'>
            <nav class='flex items-center ml-18 gap-2 hover:cursor-pointer'>
                <img class='w-7 h-7' src="../public/download.svg" alt="logo-pic" />
                <img class='h-6' src="../public/download (1).svg" alt="logo-txt" />
            </nav>
            <div class='flex gap-2 hover:bg-gray-100 p-2 rounded-md cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                <p>Location karachi</p>
            </div>
            <div class='flex gap-6'>
                <button class='border rounded-sm px-4 cursor-pointer transition-transform duration-300 ease-out hover:bg-gray-100 hover:scale-105'>
                    Log in
                </button>
                <button class='bg-pink-500 text-white font-medium px-5 py-1 rounded-md cursor-pointer hover:bg-pink-600 hover:scale-105'>
                    Sign up for free delivery
                </button>
                <label class="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
                    <path d="M2 12h20"/>
                  </svg>
                  <select name="language">
                    <option value="eng">EN</option>
                    <option value="ur">UR</option>
                  </select>
                </label>
                <div class='mr-20 flex items-center bg-gray-100 p-2 rounded-full hover:cursor-not-allowed'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag text-gray-200"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                </div>
            </div>
        </header>
    )
}

export default Header;