import { useState } from 'react';

export const Form = ({ handleColor }) => {
  const [color, setColor] = useState('');

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleColor(color);
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          name="color"
          onChange={handleColorChange}
          value={color}
        />
        <input
          type="text"
          placeholder="#F15025"
          onChange={handleColorChange}
          value={color}
        />
        <button className="btn" type="submit" style={{ background: color }}>
          Generate
        </button>
      </form>
    </section>
  );
};
