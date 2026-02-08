import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { assets } from '../assets/frontend_assets/assets'
import ChartTotal from '../components/ChartTotal'

const Cart = () => {

  const { products, currency, cartItems, updateQunatity, navigate } = useContext(ShopContext)

  const [cartData, setCartData] = useState([])

  useEffect(() => {
    if (products.length > 0) {
      const tempData = []
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item]
            })
          }
        }
      }
      setCartData(tempData)
    }
  }, [cartItems, products])

  return (
    <div className='pt-14 '>
      <div className='text-2xl mb-3'>
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      <div>
        {cartData.length === 0 ? (
          <div className='flex flex-col items-center justify-center my-20'>
            <img className='w-20 opacity-50 mb-4' src={assets.cart_icon} alt="Empty Cart" />
            <p className='text-xl text-gray-500 font-medium mb-4'>Your cart is empty</p>
            <p className='text-gray-400 mb-8'>Browse our collections and find something you love!</p>
            <button onClick={() => navigate('/collection')} className='bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors'>
              SHOP NOW
            </button>
          </div>
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id)

            return (
              <div key={index} className='py-4 border-t border-b border-gray-200 text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 hover:bg-gray-50 transition-colors'>
                <div className='flex items-start gap-6'>
                  <img className='w-16 sm:w-20 object-cover rounded shadow-sm' src={productData.images[0]} alt={productData.name} />
                  <div>
                    <p className='text-sm sm:text-lg font-medium text-gray-800'>{productData.name}</p>
                    <div className='flex items-center gap-4 mt-2'>
                      <p className='text-gray-600 font-medium'>{currency}{productData.price}</p>
                      <p className='px-3 py-1 border border-gray-200 bg-white text-xs rounded-sm text-gray-500 font-medium'>{item.size}</p>
                    </div>
                  </div>
                </div>
                <input
                  onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQunatity(item._id, item.size, Number(e.target.value))}
                  className='border border-gray-200 bg-gray-50 max-w-[60px] px-2 py-1 text-center text-sm outline-none focus:border-gray-400 rounded'
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img onClick={() => updateQunatity(item._id, item.size, 0)} className='w-5 cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all ml-auto sm:mr-4' src={assets.bin_icon} alt="Remove item" />
              </div>
            )
          })
        )}
      </div>

      {cartData.length > 0 && (
        <div className='flex justify-end my-20'>
          <div className='w-full sm:w-[450px]'>
            <ChartTotal />
            <div className='w-full text-end'>
              <button
                onClick={() => navigate('/place-order')}
                className='bg-black text-white text-sm my-8 px-8 py-3 w-full hover:bg-gray-800 transition-colors shadow-md'
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart