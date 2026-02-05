import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"

// Placeing orders using COD Method

const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body

        const order = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        }

        const newOrder = new orderModel(order)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, { cartData: {} })
        res.json({ success: true, message: "Order Placed Successfully" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Placeing orders using Stripe Method

const placeOrderStripe = async (req, res) => {
    try {

    } catch (error) {

    }
}

// Placeing orders using RazorPay method

const placeOrderRazorPay = async (req, res) => {
    try {

    } catch (error) {

    }
}

// All Orders data for Admin Panel

const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// User Order Data for frontend

const userOrders = async (req, res) => {
    try {
        const { userId } = req.body

        const orders = await orderModel.find({ userId })
        res.json({
            success: true,
            orders
        })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// Update Order Status from Admin panel

const updateStatus = async (req, res) => {
    try {

    } catch (error) {

    }
}


export { placeOrder, placeOrderStripe, placeOrderRazorPay, allOrders, userOrders, updateStatus }
