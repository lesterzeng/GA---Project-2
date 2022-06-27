import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import Player from "./components/Player";

function App() {
  return (
    <div>
      <Login />
      <Player />
    </div>
  );
}

export default App;
