import React, { useState, useEffect } from "react";
import axios from "axios";
import Display from "./Display";

const playerButtonUrl = "https://api.spotify.com/v1/me/player/play";

const DisplayPlaylist = (props) => {
  const [token, setToken] = useState("");
  const [playlist, setPlaylist] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    getPlaylist();
  }, [props.playlist]);

  const getPlaylist = () => {
    const imgArray = props.playlist.map((item, i) => {
      return <Display image={item.images[0].url} key={i}></Display>;
    });

    setPlaylist(imgArray);
  };

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

  return <>{playlist}</>;
};

export default DisplayPlaylist;
