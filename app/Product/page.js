"use client";
import Image from "next/image";
import Tabs from "../component/Tabs";
import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import Link from "next/link";

export default function Product() {
  const [favorites, setFavorites] = useState({});
  const products = [
    {
      id: 1,
      imgMain: "/assets/img/image 1-2.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Wheat",
      contact: "+91-XXXXXXXXXX",
      type: "Grains",
    },
    {
      id: 2,
      imgMain: "/assets/img/image 2.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Cherries",
      contact: "+91-XXXXXXXXXX",
      type: "Fruits",
    },
    {
      id: 3,
      imgMain: "/assets/img/image 3.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Onion",
      contact: "+91-XXXXXXXXXX",
      type: "Vegetable",
    },
    {
      id: 4,
      imgMain: "/assets/img/image 4.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Wheat Flour",
      contact: "+91-XXXXXXXXXX",
      type: "Grains",
    },
    {
      id: 5,
      imgMain: "/assets/img/image 6.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Gram Flour",
      contact: "+91-XXXXXXXXXX",
      type: "Grains",
    },
    {
      id: 6,
      imgMain: "/assets/img/image 7.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Strawberry",
      contact: "+91-XXXXXXXXXX",
      type: "Fruits",
    },
    {
      id: 7,
      imgMain: "/assets/img/image 8.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Borocolli",
      contact: "+91-XXXXXXXXXX",
      type: "Vegetable",
    },
    {
      id: 8,
      imgMain: "/assets/img/image 10-1.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Flour-1",
      contact: "+91-XXXXXXXXXX",
      type: "Grains",
    },
    {
      id: 9,
      imgMain: "/assets/img/image 11.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Product 2",
      contact: "+91-XXXXXXXXXX",
      type: "Grains",
    },
    {
      id: 10,
      imgMain: "/assets/img/image 12.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Orange",
      contact: "+91-XXXXXXXXXX",
      type: "Fruits",
    },
    {
      id: 11,
      imgMain: "/assets/img/bg.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Cucumber",
      contact: "+91-XXXXXXXXXX",
      type: "Vegetable",
    },
    {
      id: 12,
      imgMain: "/assets/img/image 4.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Product 3",
      contact: "+91-XXXXXXXXXX",
      type: "Grains",
    },
  ];
  const [productsToDisplay, setProductsToDisplay] = useState(products);
  const handleFavoriteClick = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  // emit function is used
  const handleTabs = (obj) => {
    if (obj === "All") {
      setProductsToDisplay(products);
    } else {
      let filteredProducts = [];
      filteredProducts = products.filter((item) => item.type === obj);
      setProductsToDisplay(filteredProducts);
    }
  };
  

  return (
    <>
      <div className="mt-4">
        <div className="w-full h-[200px] sm:h-[300px] flex justify-center mt-10">
          {/* <img src="/assets/img/Group 62.png" alt="banner image" /> */}
          <Image
          src={`/assets/img/Group 62.png`}
      alt="banner image"
      width={1125} 
      height={319} 
      />
        </div>

        <div className="w-full h-auto items-center mt-6">
          <Tabs changeTabFn={handleTabs} />
        </div>
        <div className="w-full h-auto items-center mt-6">
          <div className="w-full h-auto flex justify-between items-center mb-4">
            <span className="text-sm sm:text-base">
              All Products ({productsToDisplay.length} results)
            </span>

            <span className="hidden sm:block text-sm sm:text-base">
              Please{" "}
              <Link className="text-green-700 underline" href="/auth/signUp">
                signup
              </Link>{" "}
              to reveal <strong>price</strong> and{" "}
              <strong>contact number</strong>
            </span>

            <span className="block sm:hidden text-sm self-end">
              <button
                type="button"
                className="w-[185px] text-white font-medium rounded-lg text-sm px-5 py-2.5"
                style={{ backgroundColor: "#19846A" }}
              >
                + Add New Product
              </button>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 mb-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {productsToDisplay.map((product, index) => (
              <div key={product.id} className="flex justify-center">
                <div className="flex flex-col p-3 cursor-pointer rounded-xl shadow hover:shadow-md w-full">
                  
                  <div className="">
                    <div className="flex items-center justify-between bg-white">
                      <img className="" src={product.imgIcon1} />
                      <img
                        className=""
                        src={
                          favorites[product.id]
                            ? "/assets/img/Vector-1.png"
                            : "/assets/img/Vector.png"
                        }
                        onClick={() => handleFavoriteClick(product.id)}
                      />
                    </div>
                    <Link href={'/ProductDetails'}>
                    <div className="flex items-center justify-center h-[185px]">
                      <img
                        className=""
                        src={product.imgMain}
                        alt={`Product ${index + 1}`}
                      />
                    </div>
                    </Link>
                    
                    <p className="text-black text-sm sm:text-base mt-2">
                      {product.productName}
                    </p>
                    <p className="text-customTextNumber text-sm sm:text-base">
                      {product.contact}
                    </p>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}
