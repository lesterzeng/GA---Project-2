import React, { useState } from "react";

const Modal = () => {
  return (
    <>
      <div className="modalBackground">
        <div className="modalContent">
          <div className="closeBtn">
            {/* <button onClick={() => props(false)}>X</button> */}
          </div>
          <div className="bigPicture">
            <img></img>
          </div>
        </div>
      </div>
      {/* <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="modal">
          <div className="modalBackground"></div>
          <div className="modalContent">
            <img src=""></img>
            <button className="closeBtn" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Modal;
