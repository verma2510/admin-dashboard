import { useState } from "react";
import "./tab-switch.css";

export const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="tab">
      {["All", "Active", "Draft", "Archived"].map((tab) => (
        <button
          key={tab}
          className={`buttonTab ${activeTab === tab ? "active" : ""}`}
          onClick={()=> setActiveTab(tab)}
        >
            {tab}
        </button>
      ))}
    </div>
  );
};
