import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import GetPlaylist from "./GetPlaylist";

const clientId = "f6a9fe478d264238a1f75783008c50aa";
const redirectUrl = "http://localhost:3000";
const authorizationUrl = "https://accounts.spotify.com/authorize";
const responseType = "token";
const scope = [
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-read-currently-playing",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-read-email",
  "user-read-private",
  "app-remote-control",
  "streaming",
];

const Login = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    // console.log(hash);
    let token = hash.substring(1).split("&")[0].split("=")[1];
    // console.log(token);

    window.location.hash = "";
    window.localStorage.setItem("token", token);
    setToken(token);
  }, []);

  const handleLogout = () => {
    setToken("");
    window.localStorage.removeItem("token");
  };
  return (
    <Container>
      <div className="loginButton">
        {!token ? (
          <a
            className="btn btn-lg"
            href={`${authorizationUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=${responseType}&scope=${scope.join(
              " "
            )}`}
          >
            Login to Spotify
          </a>
        ) : (
          <div>
            <GetPlaylist></GetPlaylist>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Login;
