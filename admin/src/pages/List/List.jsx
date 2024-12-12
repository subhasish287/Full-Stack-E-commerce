import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios';
import {toast} from 'react-toastify'
function List({url,token}) {

  const [list,setList] = useState([]);

  const fetchList = async ()=>{
   
    const response  = await axios.get(url+"/api/v1/products/list");
   if(response.data.success){
    setList(response.data.items);
   }else{
      toast.error("Error");
    }
  }

  const removeProduct = async (_id)=>{
    
      const response = await axios.delete(url+"/api/v1/products/remove",{
        data: { id: _id },  // Payload with the product ID
        headers: { 
          Authorization: token  // Add the token in the Authorization header
        }}
      );
      if(response.data.success){
        let listCopy = list.slice();
        listCopy = listCopy.filter((item)=>item._id !== _id);
        setList(listCopy);
        toast.success(response.data.message);
      }
      else{
        toast.error(response.data.message);
      }
  }
  useEffect(()=>{
      fetchList();
  },[]);
  return (
    <div className='list add flex-col'>
       <p>ALL Fods List</p>
       <div className="list-table">
        <div className="list-table-formet title">
            <p>Image</p>
            <p>Name</p>
            <p>Category</p>
            <p>SubCategory</p>
            <p>Price</p>
            <p>sizes</p>
            <p>bestseller</p>
            <p>Action</p>
        </div>
        {
          list.map((item,idx)=>{
            return(
              <div key={idx} className="list-table-formet">
                  <img src={item.image[0]} alt="" />
                  <p>{item.name}</p>
                  <p>{item.category}</p>
                  <p>{item.subCategory}</p>
                  <p>${item.price}</p>
                  <p>[{item.sizes.join(" , ")}]</p>
                  <p>{item.bestseller?"Yes":"No"}</p>
                  <p onClick={()=>removeProduct(item._id)} className='cursor'>X</p>
              </div>
            )
          })
        }
       </div>
      </div>
  )
}

export default List