import React, { useContext,useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

function BestCeller() {
    const{products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([])
    
    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller===true))
        setBestSeller(bestProduct.slice(0,5));
    },[products])
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Best'} text2={'Seller'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base test-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
        </div>

        {/* rendering product */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4 gap-y-6'>
            {
                bestSeller.map((item,idx)=>(
                    <ProductItem key={idx} {...item} /> 
                    // {/*id={item.id} image={item.image} name={item.name} price={item.price}*/}
                ))
            }
        </div>
    </div>
  )
}

export default BestCeller