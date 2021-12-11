import React, { useState } from "react";

function ToDoItem(props) {
  const [clicked, thatClicked] = useState(false);

  function whenClicked() {
    if (clicked === false) {
      thatClicked(true);
    } else {
      thatClicked(false);
    }
  }
  return (
    <div>
      <li
        onClick={whenClicked}
        style={{ textDecoration: clicked ? "line-through" : "" }}
      >
        {" "}
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
