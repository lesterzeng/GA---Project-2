import React from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.css";

const DisplayImages = (props) => {
  return (
    <div className={styles.backdrop}>
      <img
        src={props.image}
        width="640"
        height="640"
        onClick={props.onClick}
      ></img>
      <p>{props.name}</p>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <DisplayImages
          onClick={props.onClick}
          image={props.image}
        ></DisplayImages>,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default Modal;
