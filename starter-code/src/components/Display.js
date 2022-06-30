import React, { useState } from "react";
import Modal from "./Modal";

const Display = (props) => {
  const [bigImage, setBigimage] = useState(false);

  const toggleBigImage = () => {
    setBigimage(!bigImage);
  };
  return (
    <>
      <img
        src={props.image}
        width="250"
        height="250"
        onClick={toggleBigImage}
      ></img>
      <p>{props.name}</p>
      {bigImage && <Modal image={props.image} onClick={toggleBigImage}></Modal>}
    </>
  );
};

export default Display;
