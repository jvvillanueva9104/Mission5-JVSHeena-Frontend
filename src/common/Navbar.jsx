import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [option, setOption] = useState("All Departments");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleOptionChange = (e, newOption) => {
    e.preventDefault();
    setOption(newOption);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="flex items-center w-full h-[34px] bg-[#021724] px-[3.75rem]">
        <ul className="flex gap-10">
          <li className="list-none text-[#fefefe]">PB Tech</li>
          <li className="list-none text-[#fefefe]">Hardware</li>
          <li className="list-none text-[#fefefe]">PB Business</li>
          <li className="list-none text-[#fefefe]">PB Education</li>
          <li className="list-none text-[#fefefe]">PB Wholesale</li>
          <li className="list-none text-[#fefefe]">PB Government</li>
          <li className="list-none text-[#fefefe]">PB Health</li>
          <li className="list-none text-[#fefefe]">PB IoT</li>
        </ul>
      </div>
      <div className="flex items-center w-full h-[94px] bg-[#214f74] px-[3.75rem]">
        <img
          className="w-[180px] h-[45px] mr-[2.62rem]"
          src="pbtechlogo.png"
          alt=""
        />
        <input
          className="w-[844px] h-[34px] p-2 rounded-l-sm"
          type="search"
          placeholder="Search by Keywords or Part #"
          name=""
          id=""
        />
        <div
          className={`absolute flex justify-center items-center left-[40rem]`}
        >
          <span className="flex-1">in {option}</span>
          <img
            className="w-[2rem] h-[2rem] fixed left-[48rem] top-[4.2rem] cursor-pointer"
            src="dropdownarrow.png"
            alt=""
            onClick={toggleDropdown}
          />
          {isDropdownOpen && (
            <div className="absolute top-9 left-[1rem] bg-[#fefefe] p-2 border-black border rounded-sm">
              <a
                href="/"
                onClick={(e) => handleOptionChange(e, "Computers & Tablets")}
              >
                Computer & Tablets
              </a>
              <br />
              <a href="/" onClick={(e) => handleOptionChange(e, "PC Parts")}>
                PC Parts
              </a>
              <br />
              <a
                href="/"
                onClick={(e) => handleOptionChange(e, "Printing & Office")}
              >
                Printing & Office
              </a>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center w-[60px] h-[34px] bg-[#e1833c] rounded-r-sm mr-[14rem]">
          <img
            className="w-[20px] h-[20px] cursor-pointer"
            src="searchicon.png"
            alt=""
          />
        </div>
        <div className="flex items-center w-[214px] h-[34px] bg-[#0e4360] rounded-[2px] p-1 gap-1 mr-[0.62rem]">
          <img className="h-[20px] w-[18px]" src="userprofilepic.png" alt="" />
          <span className="text-[#fefefe]">
            Sign in <span className="text-[#1278a5]">or</span> Create Account
          </span>
        </div>
        <div className="flex items-center gap-[0.38rem] h-[34px] w-[104px] bg-[#0e4360] rounded-[2px] p-[0.35rem] mr-[0.75rem]">
          <img className="h-[20px] w-[20px]" src="hearticonn.png" alt="" />
          <span className="text-[#fefefe] font-medium">Wish List</span>
        </div>
        <div className="flex items-center justify-evenly w-[88px] h-[34px] bg-[#0e4360] rounded-[2px]">
          <img className="w-[24px] h-[20px]" src="shoppingcart.png" alt="" />
          <div className="flex justify-center items-center w-[20px] h-[18px] bg-[#e1833c] text-[#fefefe]">
            0
          </div>
        </div>
      </div>
      <div className="flex items-center w-full h-[44px] bg-[#214f74] px-[3.75rem]">
        <img
          className="w-[20px] h-[17px] mr-[0.94rem]"
          src="burgermenu.png"
          alt=""
        />
        <span className="text-[18px] font-medium text-[#fefefe]">
          Department
        </span>
      </div>
    </div>
  );
};

export default Navbar;
