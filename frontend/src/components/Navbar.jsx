import React, { useState, useContext } from 'react'
import {assets} from '../assets/frontend_assets/assets.js'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext.jsx'
function Navbar() {
    const {setShowSearch,getCartCount,setCartItems,token,setToken,navigate} = useContext(ShopContext)
    const [visible, setVisible] = useState(false)

    const userLogout = async() =>{
        navigate('/login');
        setToken('');
        setCartItems({});
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
    } 
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
        <Link to='/'><img src={assets.logo2} className='w-96 bg-transparent'/></Link>
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>Home</p>
                <hr className='w-3/4 border-nonee h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collections' className='flex flex-col items-center gap-1'>
                <p>Collections</p>
                <hr className='w-3/4 border-nonee h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>About</p>
                <hr className='w-3/4 border-nonee h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>Contact</p>
                <hr className='w-3/4 border-nonee h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            <div className='group relative'>
                
                <img onClick={()=> token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                
                {token && (
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className=' flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                        <p onClick={()=>navigate('/profile')} className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={userLogout} className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
                )}
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px] '>{getCartCount()}</p>
            </Link>
            <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
        {/* sidebar menu for small screen */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=>setVisible(false)}  className='flex items-center gap-4 p-3 cursor-pointer'>
                    <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                    <p>Back</p>
                </div>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collections'>Collection</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
                <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
            </div>
        </div>

    </div>
  )
}

export default Navbar