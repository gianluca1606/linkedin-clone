import React from "react";
import "./InputOption.css";

function InputOption({ Icon, Title, color }) {
  return (
    <div className='inputOption'>
      <Icon style={{ color: color }} />
      <h4>Title</h4>
    </div>
  );
}

export default InputOption;
