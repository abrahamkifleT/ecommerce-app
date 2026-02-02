import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext()

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const [cartItems, setCartItem] = useState({})
    const [products, setProducts] = useState([]) 
    const [token, setToken] = useState('')
    const navigate = useNavigate()

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error("Please select a size")
            return
        }

        let cartData = structuredClone(cartItems)

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1
            } else {
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItem(cartData)
    }

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]
                    }
                } catch (e) {

                }
            }
        }
        return totalCount
    }

    const updateQunatity = async (itemId, size, quantity) => {
        let cardData = structuredClone(cartItems)
        cardData[itemId][size] = quantity
        setCartItem(cardData)
    }

    const getCartAmount = () => {
        let totalAmount = 0;

        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items)
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]
                    }
                } catch (e) {

                }
            }
        }
        return totalAmount
    }

    const getProductData = async () => {
        try {
            const response = await axios.get(`${backendUrl}/api/product/list`)
            console.log(response.data.products)
            if (response.data.success) {
                setProducts(response.data.products)
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductData()
    }, [])

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQunatity,
        getCartAmount,
        navigate,
        backendUrl,
        setToken,
        token,
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider