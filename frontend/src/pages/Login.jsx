import React,{useContext, useEffect, useState} from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
  const{token,setToken,navigate,backendUrl,setUser,getUserCart} = useContext(ShopContext)
  const [currentState,setCurrentState] = useState('Login');
  const [name,setName] = useState(null);
  const [email,setEmail] = useState(null);
  const [password,setPassword] = useState(null);
  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    // console.log(backendUrl);
    try {
        if(currentState === 'Sign Up'){
          const response = await axios.post(backendUrl+"/api/v1/users/register",{name,email,password});
          if(response.data.success === true){
            setToken(response.data.token);
            setUser(response.data.userData);
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user',JSON.stringify(response.data.userData));
            toast.success(response.data.message);
          }else{
            toast.error(response.data.message);
          }
          
        }else{
          const response = await axios.post(backendUrl+"/api/v1/users/login",{email,password});
          if(response.data.success === true){
            setToken(response.data.token);
            setUser(response.data.userData);
            getUserCart(response.data.token);
            localStorage.setItem('token',response.data.token);
            localStorage.setItem('user',JSON.stringify(response.data.userData));
            toast.success(response.data.message);
            
          }else{
            toast.error(response.data.message);
          }
        }
    }catch(error) {
      toast.error(error.response?.data.message);
    }
    }
    useEffect(()=>{
      if(token){
        navigate('/');
      }
    },[token])
  
  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
            <p className='prata-regular text-3xl'>{currentState}</p>
            <hr  className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        {currentState === 'Login' ? null: <input type="text" onChange={(e)=>setName(e.target.value)} className='w-full px-3 py-2 border border-gray-800 ' placeholder='Name' required/>}
        <input type="email" onChange={(e)=>setEmail(e.target.value)}  className='w-full px-3 py-2 border border-gray-800 ' placeholder='Email' required/>
        <input type="password"  onChange={(e)=>setPassword(e.target.value)}  className='w-full px-3 py-2 border border-gray-800 ' placeholder='Password' required/>
        <div className='w-full flex justify-between text-sm mt-[-8px]'>
          <p className='cursor-pointer'> Forgot your password?</p>
          {
            currentState === 'Login'
            ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer text-blue-400'>Create Account</p>
            : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer text-blue-400'>Login hare</p>
          }
        </div>
        <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState}</button>
    </form>
  )
}

export default Login