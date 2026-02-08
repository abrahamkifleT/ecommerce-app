import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import axios from 'axios'

const Orders = () => {

  const { backendUrl, token, currency } = useContext(ShopContext)

  const [orderData, setOrderData] = useState([])

  const loadOrderData = async () => {

    try {
      if (!token) {
        return null
      }
      const response = await axios.post(backendUrl + "/api/order/userorders", {}, {
        headers: { token }
      })

      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setOrderData(allOrdersItem.reverse())
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadOrderData()
  }, [token])

  return (
    <div className='border-t pt-16'>
      <div className='text-2xl'>
        <Title text1={"My"} text2={"Orders"} />
      </div>

      <div className='flex flex-col gap-4 mt-8'>
        {
          orderData.map((item, index) => (
            <div key={index} className='p-4 border-t border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:bg-gray-50 transition-colors'>
              <div className='flex items-start gap-6 text-sm'>
                <img className='w-16 sm:w-24 object-cover rounded shadow-sm' src={item.images[0]} alt={item.name} />

                <div className='flex flex-col gap-1'>
                  <p className='sm:text-base font-semibold text-gray-800'>{item.name}</p>
                  <div className='flex items-center gap-3 text-base text-gray-600 mt-1'>
                    <p className='font-medium'>{currency}{item.price}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className='mt-2 text-gray-500'>Date: <span className='text-gray-400 font-medium'>{new Date(item.date).toDateString()}</span></p>
                  <p className='text-gray-500'>Payment: <span className='text-gray-400 font-medium'>{item.paymentMethod}</span></p>
                </div>
              </div>

              <div className='md:w-1/2 flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <span className={`w-2.5 h-2.5 rounded-full ${item.status === 'Delivered' ? 'bg-green-500' : 'bg-green-500'}`}></span>
                  <p className='text-sm md:text-base font-medium text-gray-700'>{item.status}</p>
                </div>
                <button onClick={loadOrderData} className='border border-gray-300 px-6 py-2 text-sm font-medium rounded hover:bg-black hover:text-white transition-all duration-300 shadow-sm'>
                  Track Order
                </button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders