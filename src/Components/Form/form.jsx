import { useState } from "react";
import { useScrollTo } from "react-use-window-scroll";
import { Colors } from "../colorDatabase";
import { nanoid } from "nanoid";
import "./form.css";
export default function Form() {
  const Scrolli = useScrollTo();

  const [inputValue, setInputValue] = useState("#FFFFFF");
  const [ColorArray, setColorArray] = useState([...Colors]);
  return (
    <>
      <div className="container">
        <h1>Edit Colors</h1>
        {/* FORM */}

        <div className="FormContainer">
          <div className="CreateCard">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setColorArray([
                  ...ColorArray,
                  { colorCode: inputValue, edit: false, id: nanoid() },
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
        {/* FORM END */}
        {/* Render Created Cards */}

        <h3>Your Colors</h3>
        <div className="cardContainer">
          {ColorArray.map((color) => {
            return (
              <div
                key={color.id}
                style={{ backgroundColor: color.colorCode }}
                className="Card"
              >
                {/* DELETE BUTTON */}

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

                <div className="editCont">
                  {/* Display Color Hex and Copy */}

                  <div
                    onClick={() => {
                      navigator.clipboard
                        .writeText(color.colorCode)
                        .then(() => {
                          alert(
                            "The Hex Color Code is copied to your Clipboard"
                          );
                        });
                    }}
                    className="hexCode"
                  >
                    {color.colorCode}
                  </div>
                  {/* EDIT COLOR HEX */}

                  <div key={color.id} className="edit">
                    {color.edit ? (
                      <input
                        className="editColor"
                        type="text"
                        defaultValue={color.colorCode}
                        onChange={(event) => {
                          setColorArray(
                            ColorArray.map((newColor) => {
                              return newColor.id === color.id
                                ? { ...newColor, name: event.target.value }
                                : newColor;
                            })
                          );
                        }}
                      />
                    ) : (
                      ""
                    )}

                    <button
                      className="editButton"
                      type="button"
                      onClick={() => {
                        setColorArray(
                          ColorArray.map((newColor) => {
                            return newColor.id === color.id
                              ? { ...newColor, edit: !newColor.edit }
                              : newColor;
                          })
                        );
                      }}
                    >
                      {color.edit ? "save" : "edit"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={() => Scrolli(-2000, 0)} className="hpButton">
          Scroll Up
        </button>
      </div>
    </>
  );
}
