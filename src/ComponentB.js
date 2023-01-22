import React from "react";
import "./ComponentB.css";

const ComponentB = (props) => {
 
  return (
    <>
      <div className="outside">
        <div className="circle">{props.cendrol}</div>
      </div>
      <div>
        <button
          className="increment"
          onClick={() => props.setCendrol(props.cendrol + 10)}
        >
          Click here to increment the counter
        </button>
      </div>
      <br />
      <br />

      <div>
        <button className="changeColor" id="btn">
          Change Color
        </button>
      </div>
    </>
  );
};

export default ComponentB;
