import React from "react";
import Form from "./Form.js";
export default function Home({ toggle, setToggle }) {
  return (
    <div>
      <p> This is a farmer app</p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Get Started
      </button>
      <button className="btn-primary"> Livestock </button>
      {toggle ? <Form /> : null}
    </div>
  );
}
