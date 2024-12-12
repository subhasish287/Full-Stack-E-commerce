import {Router} from 'express'
import userAuth from '../middleware/auth.js'
import {placeOrders, placeOrderStripe,verifyStripe, placeOrderRozerPay, allOrders, userOrder, updateStatus} from '../controller/order.controller.js'
import { adminAuth } from '../middleware/adminAuth.js';
const orderRouter = Router();

//payment features
orderRouter.post('/place',userAuth,placeOrders);
orderRouter.post('/stripe',userAuth,placeOrderStripe);
orderRouter.post('/rozerpay',userAuth,placeOrderRozerPay);

//user features
orderRouter.get('/user',userAuth,userOrder);

//admin panel
orderRouter.put('/status',adminAuth,updateStatus);
orderRouter.post('/list',adminAuth,allOrders);

//verify stripe
orderRouter.post('/verify-stripe',userAuth,verifyStripe);

export default orderRouter