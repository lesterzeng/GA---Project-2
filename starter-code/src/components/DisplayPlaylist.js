import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "./Modal";

const playerButtonUrl = "https://api.spotify.com/v1/me/player/play";

const DisplayPlaylist = (props) => {
  const [token, setToken] = useState("");
  const [playlist, setPlaylist] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  useEffect(() => {
    getPlaylist();
  }, [props.playlist]);

  const getPlaylist = () => {
    const displayPlaylist = props.playlist.map((item, id) => {
      return (
        <div key={id}>
          <img
            src={item.images[0].url}
            width="250"
            height="250"
            className="playlistPictures"
          ></img>
          <p>{item.name}</p>
          <button onClick={handlePlayButton}>Play Playlist</button>
        </div>
      );
    });

    setPlaylist(displayPlaylist);
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

  return (
    <>
      {playlist}
      <button
        onClick={() => {
          setModal(true);
        }}
      >
        Open
      </button>
      {!modal && <Modal />}
    </>
  );
};

export default DisplayPlaylist;
