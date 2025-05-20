import Product from "../model/Product.model.js";
import {v2 as cloudinary} from 'cloudinary';
//functions for add product
const addProduct = async (req, res) => {
  // console.log(req.body);
  
  try {
    const { name, price, category, subCategory, sizes, description, bestseller } = req.body;

    // Handle images
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    const images = [image1, image2, image3, image4].filter(image => image !== undefined);

    // Upload images to Cloudinary
    let imagesurl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
        return result.secure_url;
      })
    );

    // Parse sizes to match the schema
    const parsedSizes = JSON.parse(sizes); // Ensure the sizes are sent as a JSON string in the request
    if (!Array.isArray(parsedSizes)) {
      throw new Error("Invalid sizes format. It should be an array of objects.");
    }

    const productData = {
      name,
      category,
      subCategory,
      description,
      price: Number(price),
      image: imagesurl,
      sizes: parsedSizes.map(size => ({
        size: size.size,
        quantity: Number(size.quantity), // Ensure quantity is stored as a number
      })),
      bestseller: bestseller === "true" ? true : false,
    };

    const product = new Product(productData);
    await product.save();
    res.status(200).json({ success: true, message: "Product added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


//functions for list product
const listProduct = async(req, res) => {
  
  
    try {
        const items = await Product.find({});
        // name:"shirt"
        res.status(200).json({success: true, items});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
  };

const updateProduct = async(req, res) => {
    try {
      const product = await Product.findById(req.body._id);
      
      if (!product) {
        return res.status(404).json({success: false, message: "Product not found"});
      }

    //   // Handle images
    //   const image1 = req.files.image1 && req.files.image1[0];
    //   const image2 = req.files.image2 && req.files.image2[0];
    //   const image3 = req.files.image3 && req.files.image3[0];
    //   const image4 = req.files.image4 && req.files.image4[0];

    //   const images = [image1, image2, image3, image4].filter(image => image !== undefined);

    // // Upload images to Cloudinary
    //   let imagesurl = await Promise.all(
    //     images.map(async (item) => {
    //       const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" });
    //       return result.secure_url;
    //     })

    //   );
    //   /* must delete the images from cloudinary*/

      
       // Parse sizes to match the schema
      const parsedSizes = JSON.parse(req.body.sizes); // Ensure the sizes are sent as a JSON string in the request
      if (!Array.isArray(parsedSizes)) {
        throw new Error("Invalid sizes format. It should be an array of objects.");
      }

        // if(imagesurl.length !== 0) product.image.concat(imagesurl);
        product.name = req.body.name;
        product.description = req.body.description;
        product.price = req.body.price;
        product.category = req.body.category;
        product.subCategory = req.body.subCategory;
        product.bestseller = req.body.bestseller === "true" ? true : false;
        product.sizes = parsedSizes.map(size => ({
          size: size.size,
          quantity: Number(size.quantity), // Ensure quantity is stored as a number
        })),
        
        await product.save();
        res.status(200).json({success: true, message: "Product updated successfully"});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
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




//function for single product info
const singleProduct = async(req, res) => {

  try {
    const product = await Product.findById(req.body.id);
    res.status(200).json({success: true, product});
  } catch (error) {
    res.status(500).json({success: false, message: error.message});
  }
};


export {addProduct,listProduct,removeProduct,singleProduct,updateProduct};