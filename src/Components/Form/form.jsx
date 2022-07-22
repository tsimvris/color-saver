import { useState } from "react";

import { nanoid } from "nanoid";
import Nav from "../nav/nav";
import "./form.css";
export default function Form() {
  const [ColorArray, setColorArray] = useState([
    { id: nanoid(), colorCode: `#ccc` },
    { id: nanoid(), colorCode: `#4c6ef5` },
  ]);

  return (
    <>
      {" "}
      <div className="container">
        <h1>Edit Colors</h1>

        <div className="FormContainer">
          <div className="CreateCard">
            <form className="Form">
              <input className="inputColor" type="color" />
              <input className="inputText" type="text" />
              <button className="addColorButton">Add Color</button>
            </form>
          </div>
        </div>
        <h3>Your Colors</h3>
        <div className="cardContainer">
          {ColorArray.map((color) => {
            return (
              <div
                style={{ backgroundColor: color.colorCode }}
                className="Card"
              >
                <button
                  onClick={() => {
                    setColorArray(
                      ColorArray.filter((color_) => {
                        return color_.id !== color.id;
                      })
                    );
                  }}
                  className="DeleteButton"
                >
                  X
                </button>

                <button className="hexCode">{color.colorCode}</button>
              </div>
            );
          })}
        </div>
      </div>
      <Nav />
    </>
  );
}
