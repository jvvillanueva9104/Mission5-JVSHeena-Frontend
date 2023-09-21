import React from "react";
import { motion } from "framer-motion";

const AccessoriesContents = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      className="flex gap-36 justify-center items-center w-[1758px] h-[614px] border-2 border-solid border-[#f0f0f0]"
    >
      <div className="w-[301px] h-[448px] flex flex-col border-2 border-solid border-[#f0f0f0] pt-2 rounded-md">
        <img className="w-[301px] h-[293px]" src="iphoneadaptor.png" alt="" />
        <div className="flex flex-col px-10 py-2">
          <span className="">Apple USB-C Adapter</span>
          <span className="font-medium text-[#e1833c] text-[25px]">$38.00</span>
          <div className="flex gap-2 mt-2">
            <button className="w-[110px] h-[40px] text-[#e1833c] border-2 border-solid border-[#e1833c] rounded-md">
              View Details
            </button>
            <button className="w-[110px] h-[40px] text-[#fefefe] border-2 border-solid border-[#e1833c] bg-[#e1833c] rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-[301px] h-[448px] flex flex-col border-2 border-solid border-[#f0f0f0] pt-2 rounded-md">
        <img className="w-[301px] h-[293px]" src="imouse.png" alt="" />
        <div className="flex flex-col px-10 py-2">
          <span className="">Apple Magic Mouse</span>
          <span className="font-medium text-[#e1833c] text-[25px]">
            $124.99
          </span>
          <div className="flex gap-2 mt-2">
            <button className="w-[110px] h-[40px] text-[#e1833c] border-2 border-solid border-[#e1833c] rounded-md">
              View Details
            </button>
            <button className="w-[110px] h-[40px] text-[#fefefe] border-2 border-solid border-[#e1833c] bg-[#e1833c] rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <div className="w-[301px] h-[448px] flex flex-col border-2 border-solid border-[#f0f0f0] pt-2 rounded-md">
        <img className="w-[301px] h-[293px]" src="airpods.png" alt="" />
        <div className="flex flex-col px-10 py-2">
          <span className="">Apple Airpods</span>
          <span className="font-medium text-[#e1833c] text-[25px]">
            $346.00
          </span>
          <div className="flex gap-2 mt-2">
            <button className="w-[110px] h-[40px] text-[#e1833c] border-2 border-solid border-[#e1833c] rounded-md">
              View Details
            </button>
            <button className="w-[110px] h-[40px] text-[#fefefe] border-2 border-solid border-[#e1833c] bg-[#e1833c] rounded-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AccessoriesContents;
