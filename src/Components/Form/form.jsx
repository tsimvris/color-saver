import { nanoid } from "nanoid";
import Nav from "../nav/nav";
import "./form.css";
export default function Form() {
  const ColorArray = [
    { id: nanoid(), colorCode: `#ccc` },
    { id: nanoid(), colorCode: `#4c6ef5` },
    { id: nanoid(), colorCode: `#82c91e` },
    { id: nanoid(), colorCode: `#12b886` },
  ];

  return (
    <>
      {" "}
      <div className="container">
        <h1>Edit Colors</h1>

        <div className="FormContainer">
          <form className="Form">
            <div className="Card">
              <input type="color" />
            </div>
          </form>
        </div>
        <div className="cardContainer">
          {ColorArray.map((color) => {
            return (
              <div
                style={{ backgroundColor: color.colorCode }}
                className="Card"
              >
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
