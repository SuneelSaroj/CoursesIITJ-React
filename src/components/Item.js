import React from "react";
function Item(props) {
    const isGoal = props.children;
    if (isGoal) {
      return(
        <li>{props.children}</li>
      ) ;
    }
    return;
  }
  export default Item;