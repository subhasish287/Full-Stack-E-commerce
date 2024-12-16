import mongoose,{Schema, model} from "mongoose";

const productSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: [
        {
            size: { type: String, required: true },
            quantity: { type: Number, required: true },
        }
    ],
    description: { type: String, required: true },
    image:  { type: Array, required: true },
    bestseller: { type: Boolean, default: false },
},{
    timestamps: true});

const Product = model("Product", productSchema);

export default Product;