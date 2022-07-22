import { useState } from "react";

import { nanoid } from "nanoid";
import Nav from "../nav/nav";
import "./form.css";
export default function Form() {
  const [inputValue, setInputValue] = useState("");

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
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setColorArray([
                  ...ColorArray,
                  { colorCode: inputValue, id: nanoid() },
                ]);
                setInputValue("");
              }}
              className="Form"
            >
              <input
                required
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
                className="inputColor"
                type="color"
              />
              <input
                required
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
                className="inputText"
                type="text"
              />
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
