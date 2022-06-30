import React, { useState, useEffect } from "react";
import axios from "axios";

const playerButtonUrl = "https://api.spotify.com/v1/me/player/play";

const Player = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);
  // Play button //////////////////////////////////////////////////////

  const handlePlayButton = async () => {
    const data = {
      context_uri: "spotify:playlist:6wd31yoyLFmkipjdX3j2ia",
      offset: {
        position: 5,
      },
      position_ms: 0,
    };
    const config = {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    };

    await axios.put(playerButtonUrl, data, config);
  };

  return (
    <div className="playerControl">
      <button onClick={handlePlayButton}>Play</button>
    </div>
  );
};

export default Player;
