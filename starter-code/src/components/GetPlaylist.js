import React, { useEffect, useState } from "react";
import axios from "axios";

const playlistUrl = "https://api.spotify.com/v1/me/playlists";

const GetPlaylist = () => {
  const [token, setToken] = useState("");
  const [data, setData] = useState("");

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
        console.log(response);
        const { items } = response.data;
        const playlistsNames = items.map(({ name, id }) => {
          return { name, id };
        });
        setData(playlistsNames);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(data);

  return (
    <div>
      <button onClick={handleGetPlaylistsData}>Get Playlists</button>
    </div>
  );
};

export default GetPlaylist;
