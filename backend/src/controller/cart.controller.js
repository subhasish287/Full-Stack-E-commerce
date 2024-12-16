import User from "../model/user.model.js";

//add to cart
// const addToCart = async (req, res) => {
//     try {
//       const { userId, itemId, size, quantity } = req.body;
  
//       const userData = await User.findById(userId);
//       let cartData = userData.cartData;
  
//       const product = await Products.findById(itemId);
  
//       // Find the size in the product's sizes array
//       const sizeData = product.sizes.find((s) => s.size === size);
  
//       if (!sizeData) {
//         return res.status(400).json({
//           success: false,
//           message: "Invalid size requested.",
//         });
//       }
  
//       if (sizeData.quantity < quantity) {
//         return res.status(400).json({
//           success: false,
//           message: `Not enough stock for size ${size}. Available: ${sizeData.quantity}`,
//         });
//       }
  
//       // Update user's cart data
//       if (cartData[itemId]) {
//         if (cartData[itemId][size]) {
//           cartData[itemId][size] += quantity;
//         } else {
//           cartData[itemId][size] = quantity;
//         }
//       } else {
//         cartData[itemId] = {};
//         cartData[itemId][size] = quantity;
//       }
  
//       // Update stock in the database
//       sizeData.quantity -= quantity;
  
//       // Save changes to the database
//       await User.findByIdAndUpdate(userId, { cartData });
//       await product.save();
  
//       res.status(200).json({
//         success: true,
//         message: "Added to cart and updated stock successfully.",
//       });
//     } catch (error) {
//       res.status(500).json({
//         success: false,
//         message: error.message,
//       });
//     }
//   };

const addToCart = async(req, res) => {
  try {
      const {userId, itemId,size, quantity} = req.body;
      
      const userData = await User.findById(userId);
      let cartData = userData.cartData;
      if(cartData[itemId]) {
          if(cartData[itemId][size]) {                
              cartData[itemId][size] += quantity;
          } else {
              cartData[itemId][size] = quantity;
          }
      } else {
          cartData[itemId] = {};
          cartData[itemId][size] = quantity;
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
