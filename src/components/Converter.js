import React, { useState } from "react";
import RGB from "./RGB";

function Converter() {
  const [form, setForm] = useState({
    hex: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  const handleNameChange = (evt) => {
    setForm(() => ({ hex: evt.target.value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input">
        <label htmlFor="hex">HEX</label>
        <input
          id="hex"
          name="hex"
          value={form.hex}
          onChange={handleNameChange}
        />
      </div>
      <RGB value={form.hex} />
    </form>
  );
}

export default Converter;