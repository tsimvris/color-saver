import { useState } from "react";
import { useScrollTo } from "react-use-window-scroll";
import { Colors } from "../colorDatabase";
import { nanoid } from "nanoid";
import "./form.css";
export default function Form() {
  const Scrolli = useScrollTo();

  const [inputValue, setInputValue] = useState("");
  const [ColorArray, setColorArray] = useState([...Colors]);
  return (
    <>
      <div className="container">
        <h1>Edit Colors</h1>

        <div className="FormContainer">
          <div className="CreateCard">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                setColorArray([
                  { colorCode: inputValue, id: nanoid() },
                  ...Colors,
                ]);
                setInputValue("");
                Colors.push({ colorCode: inputValue, id: nanoid() });
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
                key={color.id}
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
                <div className="editCont">
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
                  <div className="edit">
                    {color.edit ? (
                      <input
                        style={{ backgroundColor: color.colorCode }}
                        className="editColor"
                        type="text"
                        value={color.colorCode}
                        onChange={(event) => {
                          setColorArray(
                            ColorArray.map((color_) => {
                              return color_.id === color.id
                                ? { ...color_, name: event.target.value }
                                : color;
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
                          ColorArray.map((color_) => {
                            return color_.id === color.id
                              ? { ...color_, edit: !color_.edit }
                              : color_;
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
