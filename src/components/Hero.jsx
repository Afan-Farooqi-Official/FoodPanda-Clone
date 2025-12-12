
const Hero = () => {
    return (
        <div class='w-full min-h-[43vh] bg-gray-100 flex flex-col md:flex-row justify-between items-center overflow-hidden px-4 md:px-12'>
            <div class='flex justify-center items-center mx-auto'>
                <p class='text-2xl sm:text-3xl md:text-4xl font-black leading-snug text-center md:text-left'>Food and groceries delivery from <br/> Karachi’s best restaurants and <br /> shops</p>
            </div>
            <div>
                <img class='h-48 sm:h-64 md:h-96 mt-6 md:mt-0' src="../public/banner.png" alt="banner" />
            </div>
        </div>
    )
}

export default Hero;