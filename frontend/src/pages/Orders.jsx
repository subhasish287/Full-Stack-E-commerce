import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { toast } from 'react-toastify'
import axios from 'axios'
function Orders() {
    const [orders, setOrders] = useState([])
  const {products, currency, token, backendUrl} = useContext(ShopContext)

  const fetchOrders = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/v1/orders/user",{headers:{Authorization:`${token}`}});
      if (response.data.success === true) {
        setOrders(response.data.orders);
        // console.log(response.data.orders);
        
      }
    } catch (error) {
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    
    fetchOrders();
    
  },[])
  return (
    <div className='border-t pt-16'>
        <div className='text-2xl'>
          <Title text1={'My'} text2={'Orders'}/>
        </div>
        <div>
          {
            orders.length > 0 && orders.map((order, idx) => (
              <div key={idx} className="py-4 border-t border-b text-gray-700 flex flex-col lg:flex-col  lg:justify-between gap-4">
                {/* Loop through products within each order */}
                {order.products.map((product, productIdx) => (
                  <div key={productIdx} className="flex items-start gap-6 text-sm">
                    {/* Product Image */}
                    <img className="w-16 sm:w-20" src={product.image[0]} alt={product.name} />
                    
                    <div>
                      {/* Product Name */}
                      <p className="sm:text-base font-medium">{product.name}</p>
                      
                      <div className="flex items-center gap-3 mt-2 text-base text-gray-500">
                        {/* Product Price */}
                        <p className="text-lg">{currency}{product.price}</p>
                        {/* Product Quantity */}
                        <p>Quantity: {product.quantity}</p>
                        {/* Product Size */}
                        <p>Size: {product.size}</p>
                        <p>payment:{order.payment === true ? "Paid" : "Not Paid"}</p>
                        <p>payment method: {order.paymentMethod}</p>
                      </div>
                      
                      {/* Order Date */}
                      <p className="mt-2">
                        Date: <span className="text-gray-400">{new Date(product.updatedAt).toLocaleDateString()}</span>
                      </p>
                    </div>
                  </div>
                ))}
            
                <div className="md:w-1/2 flex justify-between">
                  {/* Order Status */}
                  <div className="flex items-center gap-2">
                    <p className={`${order.status === "Delivered" ? "bg-green-500" : "bg-red-500"} min-w-2 h-2 rounded-full`}></p>
                    <p>{order.status}</p>
                  </div>
                  {/* Track Order Button */}
                  <button onClick={()=>fetchOrders()} className="border px-4 py-2 text-sm font-medium rounded-sm">Track Order</button>
                </div>
              </div>
            ))
            
           
            
          }
        </div>
    </div>
  )
}

export default Orders