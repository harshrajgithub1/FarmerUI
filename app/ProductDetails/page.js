"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function ProductDeatils() {
  const imgArr = [
    {
      id: 1,
      imgUrl: "image 11.png",
    },
    {
      id: 2,
      imgUrl: "image 13.png",
    },
    {
      id: 3,
      imgUrl: "image 1-1.png",
    },
    {
      id: 4,
      imgUrl: "image 13.png",
    },
  ];
  const [selectedImageId, setSelectedImageId] = useState(3);
  const [selectedImageUrl, setSelectedImageUrl] = useState(imgArr[2].imgUrl);

  const handleImageClicked = (imageId) => {
    setSelectedImageId(imageId);
    setSelectedImageUrl(imgArr.filter((x) => x.id == imageId)[0].imgUrl);
  };

  const [favorites, setFavorites] = useState({});
  const handleFavoriteClick = (productId) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [productId]: !prevFavorites[productId],
    }));
  };

  const products = [
    {
      id: 1,
      imgMain: "/assets/img/image 1-2.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Product 1",
      contact: "+91-XXXXXXXXXX",
    },
    {
      id: 2,
      imgMain: "/assets/img/image 2.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Product 2",
      contact: "+91-XXXXXXXXXX",
    },
    {
      id: 3,
      imgMain: "/assets/img/image 3.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Product 2",
      contact: "+91-XXXXXXXXXX",
    },
    {
      id: 4,
      imgMain: "/assets/img/image 4.png",
      imgIcon1: "/assets/img/Group 14.png",
      imgIcon2: "/assets/img/surface1-6.png",
      productName: "Product 2",
      contact: "+91-XXXXXXXXXX",
    },
  ];

  return (
    <>
      <div className="">
        <div className="container mx-auto px-4 py-8">
          <Link href="/Product">
            <span className="flex items-center font-bold text-[10px] text-customGreen py-2 px-4 rounded-lg cursor-pointer">
            
              <img className="mr-2" src="/assets/img/vector-10.png" alt="Back Icon"/>
              Go Back
            </span>
          </Link>
          <div className="flex flex-wrap -mx-4 mt-4">
            {/* Product Images */}
            <div className="w-full md:w-[454px] md:h-[400px] max-h-[400px] px-4 mb-8">
              <div className="relative border-l border-r border-gray-300 shadow-2xl rounded-lg overflow-hidden">
                <Image
                  src={"/assets/img/vector.png"}
                  width={40}
                  height={40}
                  alt="Heart"
                  className="absolute top-2 right-2"
                  style={{ width: "20px", height: "20px" }}
                />
                <Image
                  src={`/assets/img/${selectedImageUrl}`}
                  alt="Product"
                  width={454}
                  height={250}
                  className="object-contain"
                  id="mainImage"
                  style={{ maxHeight: "330px", minHeight: "330px" }}
                />
              </div>

              <div className="flex w-full gap-4 py-4 justify-between flex-wrap">
                {imgArr.map((image) => (
                  <img
                    key={image.id}
                    src={`/assets/img/${image.imgUrl}`}
                    alt={`Thumbnail ${image.id}`}
                    onClick={() => handleImageClicked(image.id)}
                    className={`w-14 h-14 object-cover rounded-lg cursor-pointer transition duration-300 ${
                      selectedImageId === image.id
                        ? "border border-customGreen"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Product Details  */}
            <div className="w-full md:w-1/2 px-4">
              <p className="text-[10px] text-customGray">GRAIN</p>
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold flex items-center">
                  Product Name
                </h2>
                <span className="ml-2 text-customGreen">
                  <span className="text-[12px]">Rs.</span>{" "}
                  <span className="text-[20px]">XX</span>
                </span>
              </div>

              <p className="text-[10px] text-customTextNumber">
                +91-XXXXXXXXXX
              </p>
              <div className="mb-4 mt-4">
                <p className="text-[10px] text-customTextNumber">
                  Min Order Quantity
                </p>
                <span className="text-l text-customGray font-bold mr-2">
                  2kg
                </span>

                <p className="text-[10px] text-customTextNumber mt-4 mb-1">
                  Location
                </p>
                <p className="text-[12px] text-gray-700">Address come here</p>
              </div>
              <div className="flex items-center mb-1">
                <span className="text-[10px] text-customTextNumber">
                  About Items
                </span>
              </div>
              <p className="text-[12px] text-gray-700 mb-6">
                Manchego say cheese queso. Rubber cheese smelly cheese
                cauliflower cheese mozzarella stilton ricotta cheddar everyone
                loves. Cheddar cheddar swiss cauliflower cheese camembert de
                normandie say cheese cheese and biscuits mascarpone. Bocconcini
                emmental halloumi queso cheesy feet feta.
              </p>
            </div>
            <div className="max-w-full mx-auto p-4 bg-customProductDetails">
              <p>Similar Items</p>
              <br></br>
              <div className="grid grid-cols-2 sm:grid-cols-2 mb-4 md:grid-cols-4 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="flex justify-center bg-white"
                  >
                    <div className="flex flex-col p-3 cursor-pointer rounded-xl shadow hover:shadow-md w-full">
                      <div>
                        <div className="flex items-center justify-between bg-white">
                          <span className="ml-2 text-customGreen">
                            <span className="text-[12px]">Rs.</span>{" "}
                            <span className="text-[16px]">XX</span>
                          </span>
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
                        <div className="flex items-center justify-center h-[185px]">
                          <img
                            className=""
                            src={product.imgMain}
                            alt={`Product ${index + 1}`}
                          />
                        </div>
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
        </div>
      </div>
    </>
  );
}
