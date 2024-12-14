import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

function Products() {
  const [productData, setProductData] = useState(false);
  const { products, currency, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const incQuantity =()=>{
    setQuantity(quantity+1);
  }

  const decQuantity =()=>{
    if(quantity>1){
      setQuantity(quantity-1);
    }
  }

  const fetchProductData = async () => {
    products.filter((item) => {
      if (item._id == productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productData, products, productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* --------Product Data--------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* ---------------Product Images--------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, idx) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={idx}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img src={image} alt="" className="w-full h-auto" />
          </div>
        </div>

        {/* --------- product Info ----------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, idx) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                  key={idx}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col  mb-2 ">
            <p className="text-xl font-semibold text-gray-700">
              Select Quantity
            </p>
            <div className="flex items-center gap-4  rounded-lg p-2">
              <button
                onClick={decQuantity}
                className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-xl text-red-500 transition duration-300"
              >
                -
              </button>
              <p className="text-2xl font-semibold text-gray-800">{quantity}</p>
              <button
                onClick={incQuantity}
                className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-xl text-green-500 transition duration-300"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={() => addToCart(productData._id, size, quantity)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 "
          >
            Add To Cart
          </button>
          <hr className="mt-8 smLw-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original Product.</p>
            <p>Cash on delevary is availabe on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* ---------- description & review------------ */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm"> Reviews (122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque
            repellat ea a omnis sint ex iusto possimus delectus dolorum.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
            inventore maxime optio nemo illum, mollitia rerum! Dicta velit aut
            quas magni numquam. Iste nam molestiae saepe delectus dolore fugiat
            amet.
          </p>
        </div>
      </div>
      {/*---------------- display releted products ------------*/}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
        productId={productId}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
}

export default Products;


// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import { useParams } from 'react-router-dom';
// import { assets } from '../assets/frontend_assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// function Products() {
//   const [productData , setProductData] = useState(false)
//   const{products,currency,addToCart} = useContext(ShopContext);
//   const {productId} = useParams();
//   const [image, setImage] = useState('');
//   const [size,setSize] = useState('');

//   const fetchProductData = async ()=>{

//     products.filter((item)=>{
//       if(item._id == productId){
//         setProductData(item);
//         setImage(item.image[0]);
//         return null;
//       }
//     })
//   }
  
//   useEffect(()=>{
//     fetchProductData();
    
//   },[productData,products,productId])


// return productData? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
//         {/* --------Product Data--------- */}
//         <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//           {/* ---------------Product Images--------- */}
//           <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
//               <div className='flex sm:flex-col  overflow-x-auto sm:overflow-y-scroll justify-between  sm:justify-normal sm:w-[18.7%] w-full'>
//                   {
//                     productData.image.map((item,idx)=>(
//                       <img onClick={()=>setImage(item)} src={item} key={idx} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
//                     ))
//                   }
//               </div>
//               <div className='w-full sm:w-[80%]'>
//                   <img src={image} alt=""  className='w-full h-auto'/>
//               </div>
//           </div>

//           {/* --------- product Info ----------- */}
//             <div className='flex-1'> 
//                 <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//                 <div className='flex items-center gap-1 mt-2'>
//                     <img src={assets.star_icon} alt="" className="w-3 5" />
//                     <img src={assets.star_icon} alt="" className="w-3 5" />
//                     <img src={assets.star_icon} alt="" className="w-3 5" />
//                     <img src={assets.star_icon} alt="" className="w-3 5" />
//                     <img src={assets.star_dull_icon} alt="" className="w-3 5" />
//                     <p className='pl-2'>(122)</p>
//                 </div>
//                 <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//                 <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
//                 <div className='flex flex-col gap-4 my-8'>
//                   <p>Select Size</p>
//                   <div className='flex gap-2'>
//                     {productData.sizes.map((item,idx)=>(
//                       <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500': ''}`} key={idx}>{item}</button>
//                     ))
//                     }
//                   </div>
//                 </div>
//                 <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>Add To Cart</button>
//                 <hr className='mt-8 smLw-4/5' />
//                 <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
//                       <p>100% Original Product.</p>
//                       <p>Cash on delevary is availabe on this product.</p>
//                       <p>Easy return and exchange policy within 7 days.</p>
//                 </div>
                
//             </div>
//         </div>
//         {/* ---------- description & review------------ */}
//         <div className='mt-20'>
//           <div className='flex'>
//               <b className='border px-5 py-3 text-sm'>Description</b>
//               <p className='border px-5 py-3 text-sm'> Reviews (122)</p>
//           </div>
//           <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
//             <p className='mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui atque repellat ea a omnis sint ex iusto possimus delectus dolorum.</p>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit inventore maxime optio nemo illum, mollitia rerum! Dicta velit aut quas magni numquam. Iste nam molestiae saepe delectus dolore fugiat amet.</p>
//           </div>
//         </div>
//         {/*---------------- display releted products ------------*/}
//         <RelatedProducts category={productData.category} subCategory={productData.subCategory} productId={productId}/>
//     </div>
//   ): <div className='opacity-0'></div>
// }

// export default Products
