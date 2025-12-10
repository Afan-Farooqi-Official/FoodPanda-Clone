
const Banner = () => {
    return (
        <div class='w-full px-14 py-4'>
            <div class='flex gap-2 items-center'>
                <a class='' href="#">Homepage</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
                <h3>Karachi</h3>
            </div>
            <div class='bg-pink-100 flex justify-around my-8 h-52 items-center rounded-2xl'>
                <img class='h-36 w-36 rounded-lg' src="../public/bar.png" alt="bar-code" />
                <div>
                    <h1 class='text-4xl'>Unlock exclusive deals and more in our <span class='text-pink-700 font-black'>mobile <br /> app</span></h1>
                    <p class='mb-3'>Meal for one, fast checkout, food & grocery deals: get it all on foodpanda</p>
                    <div class='flex gap-4'>
                        <button class='border flex gap-2 px-2 py-1 rounded-md bg-white cursor-pointer transition-transform duration-300 ease-out hover:bg-gray-100 hover:scale-105'>
                            <img src="../public/apple.svg" alt="appleStore" />
                            App Store
                        </button>
                        <button class='border flex gap-2 px-2 py-1 rounded-md bg-white cursor-pointer transition-transform duration-300 ease-out hover:bg-gray-100 hover:scale-105'>
                            <img src="../public/play.svg" alt="playStore" />
                            Play Store
                        </button>
                    </div>
                </div>
                <img class='self-end' src="../public/discount.webp" alt="panda" />
            </div>
        </div>
    )
}

export default Banner;