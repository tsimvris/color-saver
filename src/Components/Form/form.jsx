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
          <div className="Card">
            <form className="Form">
              <input type="color" />
              <input type="text" />
              <button>Add Color</button>
            </form>
          </div>
        </div>
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
