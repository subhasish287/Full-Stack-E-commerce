import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

function Collection() {
  const {products, search, showSearch} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortTYpe] = useState('relevent')

  const toggleCategory =(e)=>{

    if(category.includes(e.target.value)){
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }
  
  const toggleSubCategory =(e)=>{

    if(subCategory.includes(e.target.value)){
      setSubCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = ()=>{
    let productsCopy = products.slice();
    
    if(showSearch && search){
      productsCopy = productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }

    
    setFilterProducts(productsCopy)
  }


  const sortProduct = ()=>{
    let fpCopy = filterProducts.slice();
    
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
        break;
      
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
        break;
      
      default:
        applyFilter();
        break;
    }
  }
 
  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch,products])

  useEffect(()=>{
    sortProduct();
  },[sortType])
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 border-t pt-3'>

      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>Filters
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90':'' }`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Categorories</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                  <input className='w-3' id='Men' type="checkbox" value={'Men'} onChange={toggleCategory}/>
                  <label htmlFor="Men" className='cursor-pointer'>Men</label>
              </p>
              <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" id='Women' value={'Women'} onChange={toggleCategory}/>
                  <label htmlFor="Women" className='cursor-pointer'>Women</label>
              </p>
              <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" id='Kids' value={'Kids'} onChange={toggleCategory}/>
                  <label htmlFor="Kids" className='cursor-pointer'>Kids</label>
              </p>
            </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Type</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" id='Topwear' value={'Topwear'} onChange={toggleSubCategory}/>
                  <label htmlFor="Topwear" className='cursor-pointer'>Topwear</label>
              </p>
              <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" id='Bottomwear' value={'Bottomwear'} onChange={toggleSubCategory}/>
                  <label htmlFor="Bottomwear" className='cursor-pointer'>Bottomwear</label>
              </p>
              <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" id='Winterwear' value={'Winterwear'} onChange={toggleSubCategory}/>
                  <label htmlFor="Winterwear" className='cursor-pointer'>Winterwear</label>
              </p>
            </div>
        </div>
      </div>

        {/* Right side */}
        <div className='flex-1'>
          <div className='flex justify-between text-base sm:text-2xl mb-4'>
              <Title text1={'All'} text2={'Collections'}/>
              {/* Product Sort */}
              <select onChange={(e)=>setSortTYpe(e.target.value)} className='border-2 border-gray-300 text-sm px-2 cursor-pointer' name="" id="" >
                <option value="relavent" className='cursor-pointer' >Sort by:Relavent</option>
                <option value="low-high" className='cursor-pointer'>Sort by:Low to High</option>
                <option value="high-low" className='cursor-pointer'>Sort by:High to Low</option>
              </select>
          </div>

          {/* Map Products  */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
              {
              filterProducts.map((item,idx)=>(
                <ProductItem key={idx} {...item}/>
              ))
              }
          </div>
          
        </div>
    </div>
  )
}

export default Collection