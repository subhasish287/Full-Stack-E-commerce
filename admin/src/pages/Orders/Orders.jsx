import React,{useEffect,useState} from 'react'
import './Orders.css'
import axios from 'axios'
import {toast} from 'react-toastify'
import {assets} from '../../assets/admin_assets/assets';
function Orders({url,token}) {
  const [orders,setOrders] = useState([]);

  const fetchAllOrders = async ()=>{
    if(!token){
      return null;
    }
    try {
      let response = await axios.post(url+"/api/v1/orders/list",{},{headers:{Authorization:`${token}`}});
      if(response.data.success === true){
        console.log(response.data.orders);
        
        setOrders(response.data.orders);
      }else{
        toast.error(response.data.message);
      }
      
    } catch (error) {
      console.log("bal");
      toast.error(error.message);
      
    }
    
    
    
  }

  const statusHandler = async(event,orderId)=>{
      if(!token){
        return null;
      }
    try{
      const response = await axios.put(url+"/api/v1/orders/status",{orderId,status:event.target.value},{headers:{Authorization:`${token}`}});
      if(response.data.success){
       await fetchAllOrders();
       toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    }catch(error){
      toast.error(error.message);
    }
  }
  
  useEffect(()=>{
    fetchAllOrders();
  },[token])
  return (
    <div className='order add'>
  <h3>Order Page</h3>
  <div className="order-list">
    {orders.map((order, idx) => (
      <div className='order-item' key={idx}>
        <img src={assets.parcel_icon} alt="Order Icon" />
        <div>
          {/* Mapping over products (instead of items) */}
          <p className='order-item-food'>
            {order.products.map((product, productIdx) => {
              if (productIdx === order.products.length - 1) {
                return `${product.name} x ${product.quantity}`;
              } else {
                return `${product.name} x ${product.quantity}, `;
              }
            })}
          </p>

          {/* Display customer name */}
          <p className="order-item-name">
            {order.address.firstName} {order.address.lastName}
          </p>

          {/* Display customer address */}
          <div className="order-item-address">
            <p>{order.address.street},</p>
            <p>{`${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`}</p>
          </div>

          {/* Display customer phone */}
          <p className='order-item-phone'>{order.address.phone}</p>
        </div>

        {/* Display order details */}
        <p>Items: {order.products.length}</p>
        {order.products.map((product,idx)=>(
          <p key={idx}>{product.size} x {product.quantity}</p>
        ))}
        
        <p>${order.totalAmount}</p>

        {/* Status dropdown to change order status */}
        <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
          <option value="Order Placed">Order Placed</option>
          <option value="Packing">Packing</option>
          <option value="Shipped">Shipped</option>
          <option value="Out for delivery">Out for delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
    ))}
  </div>
</div>

  )
}

export default Orders