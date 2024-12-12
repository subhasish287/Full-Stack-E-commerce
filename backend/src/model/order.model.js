import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    products: { type: Array, required: true },
    totalAmount: { type: Number, required: true },
    address: { type: Object, required: true },
    paymentMethod: { type: String, required: true },
    payment:{type:Boolean,required:true,default:false},
    status: { type: String, required: true, default: "order palced" },
},{timestamps:true});

const Order = mongoose.model("Order", orderSchema);

export default Order;