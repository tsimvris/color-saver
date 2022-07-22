import { nanoid } from "nanoid";
import { useScrollTo } from "react-use-window-scroll";

import "./colorcard.css";

export default function ColorCard() {
  const Scrolli = useScrollTo();

  const ColorArray = [
    { id: nanoid(), colorCode: `#ccc` },
    { id: nanoid(), colorCode: `#4c6ef5` },
    { id: nanoid(), colorCode: `#82c91e` },
    { id: nanoid(), colorCode: `#12b886` },
    { id: nanoid(), colorCode: `#251605` },
    { id: nanoid(), colorCode: `#f6e27f` },
    { id: nanoid(), colorCode: `#e2c391` },
    { id: nanoid(), colorCode: `#a8b7ab` },
    { id: nanoid(), colorCode: `#9bbec7` },
    { id: nanoid(), colorCode: `#f4d35e` },
  ];

  return (
    <>
      <div className="container">
        <h1>Saved Colors</h1>

        <div className="cardContainer">
          {ColorArray.map((color) => {
            return (
              <div
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
