import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const TopContent = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Define the URL of your backend API
        const apiUrl = "http://localhost:4000/description";

        // Make an asynchronous request using await
        const response = await axios.get(apiUrl);

        console.log(response.data);

        // Extract products data from the response
        const fetchedProducts = response.data.products[0];

        // Set the products state
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-[3.75rem] flex flex-col">
      <div className="w-[800px] h-[35px] mb-[3rem] mt-[0.5rem] ">
        <h1 className="font-medium text-[3rem] text-[#0e4364]">
          {products && products.product}
        </h1>
      </div>
      <div className="flex">
        <div className="flex w-[1350px] h-[875px] rounded-[2px] border border-solid border-[#e1833c] mb-[1.81rem]">
          <div className="flex flex-col">
            <img
              className="w-[680px] h-[641px] ml-[4rem] mt-[1.81rem] mb-[0.75rem]"
              src={products && `data:image/webp;base64,${products.image}`}
              alt=""
            />
            <div className="flex ml-14 mt-3">
              <img
                className="w-[54px] h-[54px] ml-[2.38rem] mt-[3.13rem] mr-[0.75rem]"
                src="arrowleft.png"
                alt=""
              />
              <img className="w-[156px] h-[150px]" src="smallmac1.png" alt="" />
              <img
                className="w-[156px] h-[150px] mx-[0.5rem]"
                src="smallmac2.png"
                alt=""
              />
              <img className="w-[156px] h-[150px]" src="smallmac3.png" alt="" />
              <img
                className="w-[54px] h-[54px] mt-[2.7rem] ml-[0.81rem]"
                src="arrowright.png"
                alt=""
              />
            </div>
          </div>
          <div className="mt-[1.81rem] ml-[3.44rem] flex flex-col">
            <h1 className="font-bold text-[38px] leading-[28px] mb-[0.60rem] ">
              Select Options
            </h1>
            <span className="text-[20px]">Memory Size</span>
            <div className="mt-[0.62rem] mb-[0.62rem]">
              <button className="text-[12px] font-medium w-[6.31rem] h-[3.38rem] border-2 border-solid border-[#e1833c] rounded-md ml-[0.63rem]">
                {products && products.memory1}
              </button>
              <button className="text-[12px] font-medium w-[6.31rem] h-[3.38rem] border-2 border-solid border-[#f3f3f4] rounded-md ml-[0.63rem]">
                {products && products.memory2}
              </button>
            </div>
            <span className="text-[20px]">SSD Card</span>
            <div className="mt-[0.62rem] mb-[0.62rem]">
              <button className="text-[12px] font-medium w-[6.31rem] h-[3.38rem] border-2 border-solid border-[#e1833c] rounded-md ml-[0.63rem]">
                {products && products.SSD1}
              </button>
              <button className="text-[12px] font-medium w-[6.31rem] h-[3.38rem] border-2 border-solid border-[#f3f3f4] rounded-md ml-[0.63rem]">
                {products && products.SSD2}
              </button>
            </div>
            <span className="text-[20px]">Colour</span>
            <div className="mt-[0.62rem] mb-[0.62rem]">
              <button className="text-[12px] font-medium w-[6.31rem] h-[3.38rem] border-2 border-solid border-[#e1833c] rounded-md ml-[0.63rem]">
                {products && products.coulor1}
              </button>
              <button className="text-[12px] font-medium w-[6.31rem] h-[3.38rem] border-2 border-solid border-[#f3f3f4] rounded-md ml-[0.63rem]">
                {products && products.coulor2}
              </button>
              <button className="text-[12px] font-medium w-[6.31rem] h-[3.38rem] border-2 border-solid border-[#f3f3f4] rounded-md ml-[0.63rem]">
                {products && products.coulor3}
              </button>
              <button className="text-[12px] font-medium w-[6.31rem] h-[3.38rem] border-2 border-solid border-[#f3f3f4] rounded-md ml-[0.63rem]">
                {products && products.coulor4}
              </button>
              <div className="mt-[2.44rem]">
                <h1 className="font-bold text-[28px] leading-[28px] mb-[1.5rem]">
                  Key Features
                </h1>
                <div className="w-[470px] h-[210px] rounded-[2px] border-2 border-solid border-[#f3f3f4]">
                  <ul className="ml-[2.5rem] mt-[0.56rem]">
                    <li className="list-disc text-[20px]">
                      {products && products.feature1}
                    </li>
                    <li className="list-disc text-[20px]">
                      {products && products.feature2}
                    </li>
                    <li className="list-disc text-[20px]">
                      {products && products.feature3}
                    </li>
                    <li className="list-disc text-[20px]">
                      {products && products.feature4}
                    </li>
                    <li className="list-disc text-[20px]">
                      {products && products.feature5}
                    </li>
                    <li className="list-disc text-[20px]">
                      {products && products.feature6}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[-2rem]">
          <div className="w-[400px] h-[540px] bg-[#f0f0f0] rounded-[8px] ml-[1.25rem] px-[1.25rem]">
            <div className="mt-[2rem]">
              <h1 className="font-bold text-[12px] ml-[6rem] mt-[1.56rem] mb-[-10px] pt-6">
                Hot Price
              </h1>
              <span className="text-[#e1833c] font-medium text-[2.4rem] ml-[5.8rem]">
                $2999.99
              </span>
              <p className="ml-[13.6rem] font-normal text-[10px] mt-[-15px]">
                inc GST
              </p>
            </div>
            <div className="py-6 w-full flex flex-col justify-center items-center mt-8 border-t-2 border-b-2 border-solid border-[#fefefe]">
              <p className="text-[#6c9935]">In Stock at PB Tech</p>
              <p className="text-[#1278a5]">Check store stock level</p>
            </div>
            <div className="flex flex-col mt-6">
              <div className="flex gap-2 justify-center items-center">
                <img
                  className="w-[35px] h-[35px]"
                  src="greencheck.png"
                  alt=""
                />
                <div>
                  <p>
                    <span className="font-bold">Click & Collect: </span>
                    Available from{" "}
                    <span className="underline text-[#1278a5]">17 stores.</span>
                  </p>
                  <p>
                    <span className="underline text-[#1278a5]">
                      Select your store{" "}
                    </span>{" "}
                    to check availability.
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <img
                  className="w-[35px] h-[35px]"
                  src="greencheck.png"
                  alt=""
                />
                <div>
                  <p>
                    <span className="font-bold">Click & Collect: </span>
                    Available from{" "}
                    <span className="underline text-[#1278a5]">17 stores.</span>
                  </p>
                  <p>
                    <span className="underline text-[#1278a5]">
                      Select your store{" "}
                    </span>{" "}
                    to check availability.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center mt-8 gap-2">
              <button className="font-bold text-[20px] text-[#fefefe] bg-[#e1833c] w-[340px] h-[50px] rounded-xl">
                Add to Cart
              </button>
              <button className="font-bold text-[20px] text-[#e1833c] bg-[#fefefe] w-[340px] h-[50px] rounded-xl border-2 border-[#e1833c]">
                Add to Wish List
              </button>
            </div>
            <div className="flex justify-evenly mt-4">
              <div className="flex items-center">
                <img className="w-[21px] h-[18px]" src="scale.png" alt="" />
                <span className="text-[#1278a5]">Add to Compare</span>
              </div>
              <div className="flex items-center">
                <img className="w-[21px] h-[18px]" src="envelope.png" alt="" />
                <span className="text-[#1278a5]">Price/Stock Alert</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[400px] h-[311px] border-2 border-solid border-[#f0f0f0] ml-[1.25rem] mt-[1.5rem] rounded-[2px] py-7 px-4 gap-6">
            <div className="flex items-center">
              <img className="w-[77px] h-[45px]" src="laybuy2.png" alt="" />
              <p>
                Six easy payments of{" "}
                <span className="font-bold">$250.00 per week</span>
              </p>
            </div>
            <div className="flex items-center">
              <img className="w-[77px] h-[45px]" src="laybuy2.png" alt="" />
              <p>
                Six easy payments of{" "}
                <span className="font-bold">$250.00 per week</span>
              </p>
            </div>
            <div className="flex items-center">
              <img className="w-[77px] h-[45px]" src="laybuy2.png" alt="" />
              <p>
                Six easy payments of{" "}
                <span className="font-bold">$250.00 per week</span>
              </p>
            </div>
            <div className="flex items-center">
              <img className="w-[77px] h-[45px]" src="laybuy2.png" alt="" />
              <p>
                Six easy payments of{" "}
                <span className="font-bold">$250.00 per week</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopContent;
