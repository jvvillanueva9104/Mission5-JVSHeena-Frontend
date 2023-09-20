import React from "react";

const ReviewContents = () => {
  return (
    <div className="w-[1758px] h-[654px] border-2 border-solid border-[#f0f0f0]">
      <div className="">
        <div className="flex">
          <div className="translate-x-10">
            <img
              className="w-[270px] h-[29px] ml-[10.5rem] mt-[3.94rem] mb-[2rem]"
              src="stars.png"
              alt=""
            />
            <div className="flex mb-[1rem]">
              <span className="mr-[1rem] ml-[10.5rem]">5 Stars</span>
              <div className="h-[27px] w-[276px] bg-[#e1833c]"></div>
              <div className="w-[100px] h-[27px] bg-gray-300"></div>
            </div>
            <div className="flex mb-[1rem]">
              <span className="mr-[1rem] ml-[10.5rem]">4 Stars</span>
              <div className="h-[27px] w-[276px] bg-[#e1833c]"></div>
              <div className="w-[100px] h-[27px] bg-gray-300"></div>
            </div>
            <div className="flex mb-[1rem]">
              <span className="mr-[1rem] ml-[10.5rem]">3 Stars</span>
              <div className="h-[27px] w-[276px] bg-[#e1833c]"></div>
              <div className="w-[100px] h-[27px] bg-gray-300"></div>
            </div>
            <div className="flex mb-[1rem]">
              <span className="mr-[1rem] ml-[10.5rem]">2 Stars</span>
              <div className="h-[27px] w-[276px] bg-[#e1833c]"></div>
              <div className="w-[100px] h-[27px] bg-gray-300"></div>
            </div>
            <div className="flex mb-[1rem]">
              <span className="mr-[1rem] ml-[10.5rem]">1 Stars</span>
              <div className="h-[27px] w-[276px] bg-[#e1833c]"></div>
              <div className="w-[100px] h-[27px] bg-gray-300"></div>
            </div>
          </div>
          <div className="border-l-2 border-solid border-[#e1833c] h-[320px] mt-[2rem] ml-[17rem]"></div>
          <div className="flex flex-col justify-center items-center ml-[12rem] mt-[2rem]">
            <h1 className="font-bold leading-6 text-[30px] mb-6">
              Do you own this product?
            </h1>
            <div className="bg-[#f0f0f0] w-[480px] h-[223px] rounded-[5px] flex flex-col justify-center items-center">
              <p className="font-semibold">
                Write A Review And Go Into The Monthly Draw
              </p>
              <p>Win a $100 PB Tech Gift Card!</p>
              <div className="mt-[2rem] flex gap-2">
                <button className="w-[162px] h-[50px] bg-[#e1833c] rounded-md text-[#fefefe]">
                  Write a Review
                </button>
                <button className="w-[162px] h-[50px] bg-[#fefefe] rounded-md text-[#e1833c] border-2 border-solid border-[#e1833c]">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-[1345px] h-[50px] border-2 border-solid border-[#f0f0f0] ml-[13rem] px-5 mt-[2rem]">
          <p>
            Displaying <span className="font-bold">1 of 12 </span> of{" "}
            <span className="font-bold">250 reviews</span>
          </p>
          <div className="flex gap-2 items-center">
            <p className="font-bold">SORT BY</p>{" "}
            <select
              className="border-2 border-solid border-[#f0f0f0] rounded-md p-[0.2rem]"
              name=""
              id=""
            >
              <option value="Most helpful">Most Helpful</option>
            </select>
          </div>
        </div>
        <div className="w-[1345px] ml-[13rem] mt-4 border-2 border-solid border-[#f0f0f0] rounded-[5px] p-5">
          <h1>Fantastic!</h1>
          <img className="w-[150px] h-[19px]" src="stars.png" alt="" />
          <p>Memory Size: 8GB | SSD Capacity: 256GB | Colour: Grey</p>
          <p>
            It's always been tough in the Mac life, with your PC friends
            constantly making jokes at your expense. (they're right tho).
            Finally, I can own a Mac with a clear upper hand! Aside from the
            clout, this puppy has been performing exceedingly well with gusto.
            The wake from sleep is unbelievably fast, it was something I had to
            see for myself! It was like it never went to sleep at all, yet the
            battery sustains for an incredible 2 days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewContents;
