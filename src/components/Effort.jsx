import React, { useState } from "react";

const Effort = ({ selectedEffort, setSelectedEffort }) => {
  const [effort, setEffort] = useState("low");

  const handleSliderChange = (event) => {
    const value = event.target.value;
    let effortLevel;

    if (value <= 33) {
      effortLevel = "low";
    } else if (value <= 66) {
      effortLevel = "medium";
    } else {
      effortLevel = "high";
    }

    setEffort(effortLevel);
    setSelectedEffort(effortLevel);
  };

  const displayEffort = () => {
    return effort.charAt(0).toUpperCase() + effort.slice(1);
  };

  return (
    <div>
      <h2>Select Your Effort:</h2>
      <input
        className="effort-slider"
        type="range"
        min="0"
        max="100"
        step="1"
        value={effort === "low" ? 0 : effort === "medium" ? 50 : 100}
        onChange={handleSliderChange}
      />
      <p
        className={`effort-label ${
          effort === "low"
            ? "effort-label-low"
            : effort === "medium"
            ? "effort-label-med"
            : effort === "high"
            ? "effort-label-high"
            : ""
        }`}
      >
        {displayEffort()}
      </p>
    </div>
  );
};

export default Effort;
