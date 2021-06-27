import React, { useState } from "react";
import { Button } from "react-bootstrap";
import logo from "./images/logo.jpg";

const Sidebar = ({ show }) => {
  const [elements, setElements] = useState();
  const [currentElement, setCurrentElement] = useState(null);

  function dragStartHandler(e, el) {
    console.log("start");
  }
  function dragEndHandler(e) {}
  function dragOverHandler(e) {
    e.preventDefault();
  }
  function dropHandler(e) {
    e.preventDefault();
    console.log("end");
  }

  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <img src={logo} alt="logo" className="logo" />
      <ul>
        <li>
          Button:
          <Button
            draggable={true}
            onDragStart={(e) => dragStartHandler(e)}
            onDragLeave={(e) => dragEndHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e)}
            variant="primary"
          >
            Primary
          </Button>
        </li>
        <li>
          Input: <input draggable={true} disabled />
        </li>
        <li>
          Text area:
          <textarea draggable={true}></textarea>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
