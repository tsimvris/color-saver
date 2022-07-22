import { useScrollTo } from "react-use-window-scroll";
import { Colors } from "../colorDatabase";
import { useState } from "react";

import "./colorcard.css";

export default function ColorCard() {
  const Scrolli = useScrollTo();
  const [ColorArray] = useState([...Colors]);
  return (
    <>
      <div className="container">
        <h1>Saved Colors</h1>
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
                    navigator.clipboard.writeText(color.colorCode).then(() => {
                      alert("The Hex Color Code is copied to your Clipboard");
                    });
                  }}
                  className="hexCode"
                >
                  {color.colorCode}
                </button>
              </div>
            );
          })}
        </div>
        <button onClick={() => Scrolli(2000, 0)} className="hpButton">
          Scroll Down
        </button>
      </div>
    </>
  );
}
