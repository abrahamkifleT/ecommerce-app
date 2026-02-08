import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from "react-router-dom"

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext)

    return (
        <Link className='group block' to={`/product/${id}`}>
            <div className='bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:-translate-y-2'>
                <div className='relative overflow-hidden bg-gray-50 aspect-square'>
                    <img
                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out'
                        src={image}
                        alt={name}
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                </div>
                <div className='p-3 sm:p-4 space-y-1.5 sm:space-y-2'>
                    <p className='text-gray-800 font-medium text-xs sm:text-sm line-clamp-2 group-hover:text-gray-900 transition-colors min-h-[2rem] sm:min-h-[2.5rem]'>
                        {name}
                    </p>
                    <div className='flex items-center justify-between'>
                        <p className='text-base sm:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors'>
                            {currency}{price}
                        </p>
                        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <svg className='w-4 h-4 sm:w-5 sm:h-5 text-blue-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductItem