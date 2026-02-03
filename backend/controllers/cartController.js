import userModel from "../models/userModel"


// add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body
    
    const userData = await userModel.findById(userId)  
    let cartData = await userData.cartData;

    if(cartData[itemId]){
      if(cartData[itemId][size]){
         cartData[itemId][size] += 1 
      }else{
         cartData[itemId][size] = 1
      }
    }else{
      cartData[itemId] = {}
      cartData[itemId][size] = 1
    }

    await userModel.findByIdAndUpdate(userId, {cartData})
  } catch (error) {
    
  }
}

// update products to user cart
const updateCard = async (req, res) => {
    
}

// get user cart data
const getUserCart = async (req, res) => {
    
}

export {addToCart, updateCard, getUserCart}