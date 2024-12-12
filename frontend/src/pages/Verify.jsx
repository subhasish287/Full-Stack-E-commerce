import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ShopContext } from '../context/ShopContext';
import { use } from 'react';

const Verify = () => {
    const { token, navigate, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams] = useSearchParams();
        
        
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const verifyPayment = async () => {
        try {
            if (!token) {
                // If there's no token, don't proceed
                return null;
            }
            
            // Await the response from the backend API
            const res = await axios.post(
                backendUrl+"/api/v1/orders/verify-stripe", 
                { orderId, success },
                { headers: { Authorization: ` ${token}` } }
            );

            // Handle success/failure based on API response
            if (res.data.success === true) {
                setCartItems([]); // Clear cart if payment is successful
                navigate("/orders"); // Navigate to orders page
                toast.success(res.data.message); // Show success toast
            } else {
                navigate("/cart"); // Navigate back to cart if payment fails
                toast.error(res.data.message); // Show error toast
            }
        } catch (error) {
            // Show any error that occurs during the API call
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (orderId && success) {
            verifyPayment(); // Call verifyPayment only when orderId and success are available
        }
    }, [token, orderId, success]); // Depend on token, orderId, and success

    return (
        <div>Verify</div>
    );
}

export default Verify;
