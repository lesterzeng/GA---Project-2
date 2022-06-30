import React, { useEffect, useState } from "react";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import GetPlaylist from "./components/GetPlaylist";

function App() {
  return (
    <div>
      <Login />
      <GetPlaylist />
    </div>
  );
}

export default App;
