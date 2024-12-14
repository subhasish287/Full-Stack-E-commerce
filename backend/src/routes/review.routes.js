import { Router } from "express";
import { addReview, updateReview, deleteReview, getReviews } from "../controller/review.controller.js";
import userAuth from '../middleware/auth.js'
const reviewRouter = Router();

reviewRouter.post('/add',userAuth,addReview);
reviewRouter.put('/update',userAuth,updateReview);
reviewRouter.delete('/delete',userAuth,deleteReview);
reviewRouter.post('/list',userAuth,getReviews);

export default reviewRouter