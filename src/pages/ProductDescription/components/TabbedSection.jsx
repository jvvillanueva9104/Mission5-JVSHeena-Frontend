import React from "react";
import { useState } from "react";
import ReviewContents from "./tabContents/ReviewContents";
import AccessoriesContents from "./tabContents/AccessoriesContents";
import FeaturesContents from "./tabContents/FeaturesContents";

const TabbedSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const activeButtonStyle = { border: "2px solid #e1833c" };

  return (
    <div className="w-[1758px] h-[714px] ml-[3.75rem]">
      <div className="border-b-4 border-[#e1833c]">
        <button
          onClick={() => setActiveTab(0)}
          className={`w-[586px] border-2 border-solid border-[#f0f0f0] p-4 ${
            activeTab === 0 ? "active" : ""
          }`}
          style={activeTab === 0 ? activeButtonStyle : {}}
        >
          Reviews
        </button>
        <button
          onClick={() => setActiveTab(1)}
          className={`w-[586px] border-2 border-solid border-[#f0f0f0] p-4 ${
            activeTab === 1 ? "active" : ""
          }`}
          style={activeTab === 1 ? activeButtonStyle : {}}
        >
          Accessories
        </button>
        <button
          onClick={() => setActiveTab(2)}
          className={`w-[586px] border-2 border-solid border-[#f0f0f0] p-4 ${
            activeTab === 2 ? "active" : ""
          }`}
          style={activeTab === 2 ? activeButtonStyle : {}}
        >
          Features
        </button>
      </div>
      {/* tabbedcontents */}

      <div>
        {activeTab === 0 && <ReviewContents />}
        {activeTab === 1 && <AccessoriesContents />}
        {activeTab === 2 && <FeaturesContents />}
      </div>
    </div>
  );
};

export default TabbedSection;
