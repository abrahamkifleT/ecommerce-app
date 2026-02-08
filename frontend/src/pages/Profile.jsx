
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'

const Profile = () => {

    const { userData, navigate, setToken, setCartItem } = useContext(ShopContext)

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItem({})
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-[60vh] py-10'>

            <div className='bg-white shadow-xl rounded-2xl p-8 md:p-12 w-full max-w-md border border-gray-100 relative overflow-hidden'>

                {/* Decorative background element */}
                <div className='absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10'></div>

                <div className='flex flex-col items-center relative z-10'>

                    <div className='relative'>
                        <img src={assets.profile_icon} className='w-24 h-24 rounded-full border-4 border-white shadow-lg mb-4 bg-gray-100 object-cover' alt="Profile" />
                        <div className='absolute bottom-4 right-0 w-5 h-5 bg-green-500 border-2 border-white rounded-full'></div>
                    </div>

                    <h2 className='text-2xl font-bold text-gray-800 mb-1'>{userData ? userData.name : 'User'}</h2>
                    <p className='text-gray-500 text-sm mb-6'>{userData ? userData.email : 'email@example.com'}</p>

                    <div className='w-full flex flex-col gap-3'>
                        <button
                            onClick={() => navigate('/orders')}
                            className='w-full py-2.5 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 border border-gray-200'
                        >
                            <img src={assets.cart_icon} className='w-4 opacity-60' alt="" />
                            My Orders
                        </button>

                        <button
                            onClick={logout}
                            className='w-full py-2.5 px-4 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 border border-red-100'
                        >
                            Logout
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Profile
