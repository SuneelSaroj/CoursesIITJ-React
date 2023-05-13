import React from "react";
import "./ListItem.css";
import MyVerticallyCenteredModal from "./modal";

const ListItem = (props) => {
   
const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    <div className="Item"  onClick={() => setModalShow(true)}>
      {props.data[0]}
    </div>
    <MyVerticallyCenteredModal
        show={modalShow}
        data={props.data}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default ListItem;
