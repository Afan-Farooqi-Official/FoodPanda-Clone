import restaurants from '../restaurantsData'
import {useState} from 'react'

const Pagination = () => {

    const [visibleCount, setVisibleCount] = useState(9)

    const showMore = () => {
        setVisibleCount((prev) => prev + 9)
    }

    return (
        <div class='w-full px-14 pb-7'>
            <h1 class='text-3xl font-semibold'>All restaurants</h1>
            <div class='grid grid-cols-3 py-7 gap-6 relative z-0'>
            {
                restaurants.slice(0, visibleCount).map((item, index) => (
                    
                    <div key={index} class='border border-gray-300 rounded-2xl overflow-hidden cursor-pointer '>
                        <div class='overflow-hidden'>
                            <img class='h-[230px] w-full object-cover transition duration-500 ease-in-out hover:scale-105' src={item.img} alt={item.dish} />
                        </div>
                        <div class='p-3'>
                            <div class='flex justify-between'>
                                <h2 class='font-bold'>{item.dish}</h2>
                                <p class='flex items-center gap-2 text-sm'>
                                    {
                                        item.rating && (
                                            <>      
                                                <span class='text-yellow-500 font-semibold'>⭐ {item.rating}</span>
                                                <span class='ml-1 inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full'>{item.reviews}</span>
                                            </>
                                        )
                                    }
                                </p>
                            </div>
                            <p class='text-gray-500 text-sm'>{item.category}</p>
                        </div>
                    </div>
                
                ))
            }
            </div>
            {
                visibleCount < restaurants.length && (
                    <div className="text-center mt-4">
                        <button onClick={showMore} className="px-4 py-2 cursor-pointer bg-pink-600 text-white rounded hover:bg-pink-700 transition">
                            Show More
                        </button>
                    </div>
                )
            }
        </div>
    )
}

export default Pagination;