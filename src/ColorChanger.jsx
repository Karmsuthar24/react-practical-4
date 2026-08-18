import React, { useState } from "react";
import "./App.css";

function ColorChanger() {
  const [color, setColor] = useState("white");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <main
      className="color-page"
      style={{ backgroundColor: color }}
    >
      <section className="card">
        <h1>Background Color Changer</h1>
        <p>Select a color to change the background:</p>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
        />
        <p>Selected Color: {color}</p>
      </section>
    </main>
  );
}

export default ColorChanger;
