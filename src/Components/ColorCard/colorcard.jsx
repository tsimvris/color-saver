import { nanoid } from "nanoid";
import Nav from "../nav/nav";
import "./colorcard.css";

export default function ColorCard() {
  const ColorArray = [
    { id: nanoid(), colorCode: `#ccc` },
    { id: nanoid(), colorCode: `#4c6ef5` },
    { id: nanoid(), colorCode: `#82c91e` },
    { id: nanoid(), colorCode: `#12b886` },
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
                    alert("The Hex Color Code is copied on your Clipboard");
                    navigator.clipboard.writeText(color.colorCode);
                  }}
                  className="hexCode"
                >
                  {color.colorCode}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <Nav />
    </>
  );
}
