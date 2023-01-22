import React from "react";
import "./ComponentB.css";

const ComponentB = (props) => {
  var boolean = false;
  function changeColor() {
    const btn = document.getElementById("btn");
    if (boolean === true) btn.style.backgroundColor = "red";
    else btn.style.backgroundColor = "blue";
  }
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
        <button className="changeColor" id="btn" onClick={changeColor}>
          Change Color
        </button>
      </div>
    </>
  );
};

export default ComponentB;
