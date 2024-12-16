import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

function PlaceOrder() {
  const {
    navigate,
    delivery_fee,
    getCartAmount,
    backendUrl,
    cartItems,
    products,
    token,
    setCartItems,
  } = useContext(ShopContext);
  const [method, setMethod] = useState("cod");
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "", //zipcode: "",
    country: "",
    phoneNumber: "",
  });

  const handleAddress = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const findOrdersProduct = () => {
    const orderItems = [];

    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          const itemInfo = structuredClone(
            products.find((product) => product._id === items)
          );
          if (itemInfo) {
            itemInfo.quantity = cartItems[items][item];
            itemInfo.size = item;
            orderItems.push(itemInfo);
          }
        }
      }
    }
    return orderItems;
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    try {
      const orderItems = findOrdersProduct();
      const totalAmount = getCartAmount() + delivery_fee;
      if (method === "cod") {
        
        const response = await axios.post(
          `${backendUrl}/api/v1/orders/place`,
          { address, products: orderItems, totalAmount },
          { headers: { Authorization: `${token}` } }
        );
        
        if (response.data.success === true) {
          toast.success(response.data.message);
          setCartItems({});
          navigate("/orders");
        }else{
          
          toast.error(response.data.message);
        }
      } else if (method === "stripe") {
        const response = await axios.post(
          `${backendUrl}/api/v1/orders/stripe`,
          { address, products: orderItems, totalAmount },
          { headers: { Authorization: `${token}` } }
        );
        if (response.data.success === true) {
          const { secure_url } = response.data;
          window.location.replace(secure_url);

          toast.success(response.data.message);
          setCartItems({});
          navigate("/orders");
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      
      toast.error(error.message);
    }
  };

  // const preventSubmit = (e) => {
  //   e.preventDefault();
  // };
  return (
    <form onSubmit={placeOrder}>
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
        {/* --------- Left side-------- */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"Delivery"} text2={"Information"} />
          </div>
          <div className="flex gap-3">
            <input
              name="firstName"
              required
              onChange={handleAddress}
              value={address.firstName}
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full "
              type="text"
              placeholder="First name"
            />
            <input
              name="lastName"
              onChange={handleAddress}
              value={address.lastName}
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full "
              type="text"
              placeholder="Last name"
              required
            />
          </div>
          <input
            name="email"
            onChange={handleAddress}
            value={address.email}
            className="border rounded border-gray-300 py-1.5 px-3.5 w-full "
            type="email"
            placeholder="Email address"
            required
          />
          <input
            name="street"
            onChange={handleAddress}
            value={address.street}
            className="border rounded border-gray-300 py-1.5 px-3.5 w-full "
            type="text"
            placeholder="Street"
          />
          <div className="flex gap-3">
            <input
              name="city"
              onChange={handleAddress}
              value={address.city}
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full "
              type="text"
              placeholder="City"
              required
            />
            <input
              name="state"
              onChange={handleAddress}
              value={address.state}
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full "
              type="text"
              placeholder="State"
              required
            />
          </div>
          <div className="flex gap-3">
            <input
              name="zipcode"
              onChange={handleAddress}
              value={address.zipcode}
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full "
              type="number"
              placeholder="Zipcode"
              required
            />
            <input
              name="country"
              onChange={handleAddress}
              value={address.country}
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full "
              type="text"
              placeholder="Country "
              required
            />
          </div>
          <input
            name="phoneNumber"
            onChange={handleAddress}
            value={address.phoneNumber}
            className="border rounded border-gray-300 py-1.5 px-3.5 w-full "
            type="number"
            placeholder="Phone"
            required
          />
        </div>

        {/* -------------Right side-------------------- */}
        <div className="mt-8">
          <div className="mt-8 min-w-80">
            <CartTotal />
          </div>
          <div className="mt-12">
            <Title text1={"Payment"} text2={"Method"} />
            {/* ---------------payment method----------------- */}
            <div className="flex gap-3 flex-col lg:flex-row">
              <div
                onClick={() => setMethod("stripe")}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "stripe" ? "bg-green-400" : ""
                  }`}
                ></p>
                <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
              </div>

              {/* <div
              onClick={() => setMethod("rozerpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "rozerpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div> */}
              <div
                onClick={() => setMethod("cod")}
                className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
              >
                <p
                  className={`min-w-3.5 h-3.5 border rounded-full ${
                    method === "cod" ? "bg-green-400" : ""
                  }`}
                ></p>
                <p className="text-gray-500 text-sm font-medium mx-4">
                  CASH ON DELIVERY
                </p>
              </div>
            </div>

            <div className="w-full text-end mt-8">
              <button
                
                className="bg-black text-white px-16 py-3 text-sm "
              >
                PLACE ORDER
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
