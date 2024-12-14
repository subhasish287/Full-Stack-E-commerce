import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

function LatestCollections() {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"Latest"} text2={"Collections"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base test-gray-600">
          Discover our newest fashion arrivals, where style meets
          sophistication. Our latest collections showcase the season's most
          coveted trends and timeless classics, designed to elevate your
          wardrobe with fresh, innovative looks. From chic everyday essentials
          to statement pieces perfect for special occasions, each garment is
          crafted with quality and attention to detail. Explore now to find the
          perfect outfit that expresses your unique style and keeps you at the
          forefront of fashion.{" "}
        </p>
      </div>

      {/* rendering product */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 md:grid-cols-4 gap-4 gap-y-6">
        {latestProducts.map((item, idx) => (
          <ProductItem key={idx} {...item} />
          // {/*id={item.id} image={item.image} name={item.name} price={item.price}*/}
        ))}
      </div>
    </div>
  );
}

export default LatestCollections;
