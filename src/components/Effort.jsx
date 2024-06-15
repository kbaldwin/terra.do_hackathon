import React, { useState } from "react";

const Effort = () => {
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
  };

  return (
    <div>
      <h2>Effort:</h2>
      <input
        type="range"
        min="0"
        max="100"
        step="1"
        value={effort === "low" ? 0 : effort === "medium" ? 50 : 100}
        onChange={handleSliderChange}
      />
      <p>Effort: {effort}</p>
    </div>
  );
};

export default Effort;
