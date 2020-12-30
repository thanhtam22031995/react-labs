import React, { useState } from 'react';
import './ColorBox.scss';

ColorBox.propTypes = {};

const COLOR_LIST = ['deeppink', 'goldenrod', 'maroon', 'lightgreen'];

function ColorBox() {
  const [index, setIndex] = useState(0);

  const handleBoxCLick = () => {
    setIndex((x) => (x + 1) % COLOR_LIST.length);
  };

  return (
    <div className="magic-box">
      <h1>Magic Box</h1>
      <p>List Of Colors: deeppink - goldenrod - maroon - lightgreen</p>
      <div
        onClick={handleBoxCLick}
        className="color-box"
        style={{ backgroundColor: COLOR_LIST[index] }}
      >
        {COLOR_LIST[index]}
      </div>
    </div>
  );
}

export default ColorBox;
