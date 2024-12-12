
import { Router } from "express";
import { addToCart, updateFromCart, getCart } from "../controller/cart.controller.js";
import userAuth from '../middleware/auth.js'
const cartRouter = Router();

cartRouter.post('/add',userAuth,addToCart);
cartRouter.put('/update',userAuth,updateFromCart);
cartRouter.get('/list',userAuth,getCart);

export default cartRouter
