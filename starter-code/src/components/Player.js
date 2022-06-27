import React, { useState, useEffect } from "react";
import axios from "axios";

const playerButtonUrl = "https://api.spotify.com/v1/me/player/play";

const Player = () => {
  const [token, setToken] = useState("");
  const [playing, setPlaying] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  // Play button //////////////////////////////////////////////////////

  const handlePlayButton = () => {
    axios.get(playerButtonUrl, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(handlePlayButton);
  };

  return (
    <div className="playerControl">
      <h1>Player</h1>
    </div>
  );
};

export default Player;
