import React from 'react';
import { useState } from 'react';

function Slider () {
    
    const [valor, setValor] = useState(1);
    function handleChange (event) {
      console.log(event.target.value)
      setValor(event.target.value)
    }
  
    return (
      <div className="sliderContainer">
      <input
      className="sliderPrueba"
        type="range"
        id="sliderGuay"
        min={1}
        max={5}
        step={1}
        
        defaultValue={valor} 
        onChange={handleChange} 
        onMouseUp={handleChange} 
      />
      <p>{valor}</p>
      </div>
    )
  
  }

  export default Slider