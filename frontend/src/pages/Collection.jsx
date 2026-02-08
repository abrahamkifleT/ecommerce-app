import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from "../context/ShopContext"
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {

  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState("relavent")

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prv => prv.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prv => prv.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProduct(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProduct.slice()

    switch (sortType) {
      case "low-high":
        setFilterProduct(fpCopy.sort((a, b) => a.price - b.price))
        break;
      case "high-low":
        setFilterProduct(fpCopy.sort((a, b) => b.price - a.price))
        break;
      default:
        applyFilter()
        break;
    }

  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct()
  }, [sortType])


  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 '>

      {/* Filter Options */}
      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-lg font-semibold flex items-center cursor-pointer gap-2 text-gray-800 hover:text-gray-600 transition-colors'>
          FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden transition-transform ${showFilter ? 'rotate-90' : ''}`} alt="" />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-200 rounded-lg px-5 py-4 mt-6 bg-white shadow-sm ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-4 text-sm font-semibold text-gray-800 tracking-wide'>CATEGORY</p>
          <div className='flex flex-col gap-3 text-sm text-gray-700'>
            <label className='flex items-center gap-3 cursor-pointer hover:text-gray-900 transition-colors group'>
              <input
                className='w-4 h-4 accent-gray-800 cursor-pointer'
                type="checkbox"
                value={"Men"}
                onChange={toggleCategory}
              />
              <span className='group-hover:translate-x-0.5 transition-transform'>Men</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-gray-900 transition-colors group'>
              <input
                className='w-4 h-4 accent-gray-800 cursor-pointer'
                type="checkbox"
                value={"Women"}
                onChange={toggleCategory}
              />
              <span className='group-hover:translate-x-0.5 transition-transform'>Women</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-gray-900 transition-colors group'>
              <input
                className='w-4 h-4 accent-gray-800 cursor-pointer'
                type="checkbox"
                value={"Kids"}
                onChange={toggleCategory}
              />
              <span className='group-hover:translate-x-0.5 transition-transform'>Kids</span>
            </label>
          </div>
        </div>

        {/* SubCategory Filter */}
        <div className={`border border-gray-200 rounded-lg px-5 py-4 my-5 bg-white shadow-sm ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-4 text-sm font-semibold text-gray-800 tracking-wide'>TYPE</p>
          <div className='flex flex-col gap-3 text-sm text-gray-700'>
            <label className='flex items-center gap-3 cursor-pointer hover:text-gray-900 transition-colors group'>
              <input
                className='w-4 h-4 accent-gray-800 cursor-pointer'
                type="checkbox"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              <span className='group-hover:translate-x-0.5 transition-transform'>Topwear</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-gray-900 transition-colors group'>
              <input
                className='w-4 h-4 accent-gray-800 cursor-pointer'
                type="checkbox"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              <span className='group-hover:translate-x-0.5 transition-transform'>Bottomwear</span>
            </label>
            <label className='flex items-center gap-3 cursor-pointer hover:text-gray-900 transition-colors group'>
              <input
                className='w-4 h-4 accent-gray-800 cursor-pointer'
                type="checkbox"
                value={"Winterwear"}
                onChange={toggleSubCategory}
              />
              <span className='group-hover:translate-x-0.5 transition-transform'>Winterwear</span>
            </label>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between items-center text-base sm:text-2xl mb-4'>
          <Title text1={"ALL"} text2={"COLLECTION"} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 rounded-lg text-sm px-4 py-2 hover:border-gray-400 focus:border-gray-800 focus:outline-none transition-colors cursor-pointer font-medium text-gray-700'
          >
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* Map Products */}

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProduct.map((item, index) => (
              <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.images[0]} />
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Collection