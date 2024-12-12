import Product from "../model/Product.model.js";
import {v2 as cloudinary} from 'cloudinary';
//functions for add product
const addProduct = async(req, res) => {
      
  try {
    const {name,price,category,subCategory,sizes,description,bestseller} = req.body;
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 =req.files.image2 && req.files.image2[0];
    const image3 =req.files.image3 && req.files.image3[0];
    const image4 =req.files.image4 && req.files.image4[0];

    const images = [image1,image2,image3,image4].filter(image => image!==undefined);

    let imagesurl = await Promise.all(images.map(async(item)=>{
        const result = await cloudinary.uploader.upload(item.path,{resource_type: "image"});
        return result.secure_url;
    }));

    const productData={
      name,
      category,
      subCategory,
      description,
      price:Number(price),
      image:imagesurl,
      sizes:JSON.parse(sizes),
      bestseller: bestseller === "true"? true : false,
    };
    const product = new Product(productData);
    await product.save();
    res.status(200).json({success: true, message: "Product added successfully"});
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false, message: error.message});
    
  }
};

//functions for list product
const listProduct = async(req, res) => {
  
    try {
        const items = await Product.find();
        
        res.status(200).json({success: true, items});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
  };

  //function for remove product

  const removeProduct = async(req, res) => { 
    try {
      await Product.findByIdAndDelete(req.body.id);
      res.status(200).json({success: true, message: "Product removed successfully"});
    } catch (error) {
      res.status(500).json({success: false, message: error.message});
    }
   };

  //function for update product
  // const updateProduct = async(req, res) => {  };


//function for single product info
const singleProduct = async(req, res) => {

  try {
    const product = await Product.findById(req.body.id);
    res.status(200).json({success: true, product});
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
};


export {addProduct,listProduct,removeProduct,singleProduct};