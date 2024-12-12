import User from "../model/user.model.js";

//add to cart
const addToCart = async(req, res) => {
    try {
        const {userId, itemId,size} = req.body;
        
        const userData = await User.findById(userId);
        let cartData = userData.cartData;
        if(cartData[itemId]) {
            if(cartData[itemId][size]) {                
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        await User.findByIdAndUpdate(userId, {cartData});
        res.status(200).json({success: true, message: "added to cart "});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
 };

//remove from cart
const updateFromCart = async(req, res) => {
    try {
        const {userId, itemId,size, quantity} = req.body;

        const userData = await User.findById(userId);
        let cartData = userData.cartData;
         cartData[itemId][size] = quantity;

        await User.findByIdAndUpdate(userId, {cartData});
        
        res.status(200).json({success: true, message: "cart updated"});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
 };

//get cart
const getCart = async(req, res) => {
    try {
        const {userId} = req.body;
        const userData = await User.findById(userId);
        const cartData = userData.cartData;
        res.status(200).json({success: true, cartData});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
 };


export {addToCart, updateFromCart, getCart};