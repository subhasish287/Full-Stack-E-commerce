import React,{useState} from 'react'
import './Login.css'
import axios from 'axios';
import {toast} from 'react-toastify'

function Login({url, setToken}) {
  const [email,setEmail ] = useState(null);
  const [password,setPassword ] = useState(null);

  const onSubmitHandler = async(e)=>{
    e.preventDefault();
    try {
      const responce = await axios.post(url+"/api/v1/users/admin",{email,password});
      if(responce.data.success){
        setToken(responce.data.token);
        toast.success(responce.data.message);
      }else{
        toast.error(responce.data.message);
      }
    } catch (error) {
      toast.error("Error");
    }
    
  }
  return (
   <div className='login'>
     <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-500  form'>
      <h2>Admin panel</h2>
        <input type="email"
         onChange={(e)=>setEmail(e.target.value)}
         placeholder='Email'
         className='w-full px-3 py-2 border border-gray-800 '
         required

         />
        <input type="password"
         onChange={(e)=>setPassword(e.target.value)}
         placeholder='Password'
         className='w-full px-3 py-2 border border-gray-800 input '
         required
        />
        <button className='bg-black text-white font-light px-8 py-2 mt-4 button'>Login</button>
    </form>
   </div>
  )
}

export default Login
