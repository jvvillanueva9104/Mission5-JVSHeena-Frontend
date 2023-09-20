import React from "react";

const StickyNavbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="flex justify-between px-16 sticky top-0 w-full h-[100px] border-b-2 border-solid border-[#e1833c] bg-[white]">
        <div className="flex gap-4 justify-center items-center">
          <h1 className="font-semibold text-[35px]">Macbook Pro 2022</h1>
          <p>Memory size: 8GB | SSD Capacity: 256GB | Colour: Silver</p>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <span className="text-[#e1833c] font-bold text-[30px]">$2999.99</span>
          <button className="bg-[#e1833c] text-[#f0f0f0] px-4 py-2 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyNavbar;
