import React, { useEffect, useState } from "react";
import axios from "axios";
import DisplayPlaylist from "./DisplayPlaylist";

const playlistUrl = "https://api.spotify.com/v1/me/playlists";

const GetPlaylist = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
  }, []);

  const handleGetPlaylistsData = () => {
    axios
      .get(playlistUrl, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { items } = response.data;
        const playlistsNames = items.map(({ name, id, images }) => {
          return { name, id, images };
        });
        setData(playlistsNames);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);

  return (
    <>
      <h2>Your Playlists</h2>

      <button onClick={handleGetPlaylistsData}>Get Playlists</button>
      <DisplayPlaylist playlist={data}></DisplayPlaylist>
    </>
  );
};

export default GetPlaylist;
