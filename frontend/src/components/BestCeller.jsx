import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function BestCeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProduct = products.filter((item) => item.bestseller === true);
    setBestSeller(bestProduct.slice(0, 5));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Best"} text2={"Seller"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base test-gray-600">
          Explore our top-selling favorites that have captured the hearts of our
          customers. These best-sellers represent the perfect blend of quality,
          style, and popularity, offering you the very best of what we have to
          offer. Each item has been handpicked based on its exceptional design
          and customer demand, making them a must-have addition to your
          collection. Shop now to discover why these pieces are loved by so many
          and find your new favorite!{" "}
        </p>
      </div>

      {/* rendering product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4 gap-y-6">
        {bestSeller.map((item, idx) => (
          <ProductItem key={idx} {...item} />
          // {/*id={item.id} image={item.image} name={item.name} price={item.price}*/}
        ))}
      </div>
    </div>
  );
}

export default BestCeller;
