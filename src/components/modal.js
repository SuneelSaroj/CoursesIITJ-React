import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modal.css";
import Item from "./Item";
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>{props.data[0]}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{paddingLeft:"2%"}}>
       
          <div className="modal-body" style={{paddingLeft:"0%"}}>
            <table className="table table-bordered" >
              <tbody>
                <tr>
                  <th scope="row">Title:</th>
                  <td>{props.data[0]}</td>
                  <th scope="row">Course Code:</th>
                  <td>{props.data[1]}</td>
                </tr>

                <tr>
                  <th scope="row">Department:</th>
                  <td>{props.data[2]}</td>
                  <th scope="row">LTP[C]:</th>
                  <td>{props.data[3]}</td>
                </tr>
                <tr>
                  <th scope="row">Offered For:</th>
                  <td>{props.data[4]}</td>
                  <th scope="row">Type:</th>
                  <td>{props.data[5]}</td>
                </tr>
                <tr>
                  <th scope="row">Prerequisite:</th>
                  <td>{props.data[6]}</td>
                </tr>
              </tbody>
            </table>

            <div className="all-content">
              <div className="objectives">
                <h5>Objectives</h5>

                <ol type="1">
                  <Item>{props.data[7]}</Item>
                  <Item>{props.data[8]}</Item>
                  <Item>{props.data[9]}</Item>
                  <Item>{props.data[10]}</Item>
                  <Item>{props.data[11]}</Item>
                </ol>
              </div>
              <div className="learning-outcomes">
                <h5>Learning outcomes</h5>
                <ol className="">

                  <Item>{props.data[12]}</Item>
                  <Item>{props.data[13]}</Item>
                  <Item>{props.data[14]}</Item>
                  <Item>{props.data[15]}</Item>
                  <Item>{props.data[16]}</Item>
                </ol>
              </div>
              <div className="contents">
                <h5>Contents</h5>
                <ul>
                  <Item>{props.data[17]}</Item>

                  <Item>{props.data[18]}</Item>
                  <Item>{props.data[19]}</Item>
                  <Item>{props.data[20]}</Item>
                  <Item>{props.data[21]}</Item>
                  <Item>{props.data[22]}</Item>
                  <Item>{props.data[23]}</Item>
                  <Item>{props.data[24]}</Item>
                  <Item>{props.data[25]}</Item>
                  <Item>{props.data[26]}</Item>
                </ul>
              </div>
              <div className="labs">
                <h5>Laboratory</h5>
                <ol type="1">
                  <Item>{props.data[42]}</Item>
                  <Item>{props.data[43]}</Item>
                  <Item>{props.data[44]}</Item>
                  <Item>{props.data[45]}</Item>
                  <Item>{props.data[46]}</Item>
                  <Item>{props.data[47]}</Item>
                </ol>
              </div>
              <div className="text-books">
                <h5>Text books</h5>
                <ol type="1">
                  <Item>{props.data[37]}</Item>
                  <Item>{props.data[38]}</Item>
                  <Item>{props.data[39]}</Item>
                  <Item>{props.data[40]}</Item>
                  <Item>{props.data[41]}</Item>
                </ol>
              </div>
              <div className="reference-books">
                <h5>Reference books</h5>
                <ol type="1">
                  <Item>{props.data[27]}</Item>
                  <Item>{props.data[28]}</Item>
                  <Item>{props.data[29]}</Item>
                  <Item>{props.data[30]}</Item>
                  <Item>{props.data[31]}</Item>
                </ol>
              </div>
              <div className="self-learnings">
                <h5>Self learning books</h5>
                <ol type="1">
                  <Item>{props.data[32]}</Item>
                  <Item>{props.data[33]}</Item>
                  <Item>{props.data[34]}</Item>
                  <Item>{props.data[35]}</Item>
                  <Item>{props.data[36]}</Item>
                </ol>
              </div>
            </div>
          </div>
       
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
