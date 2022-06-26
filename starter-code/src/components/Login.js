import React from "react";
import { Container } from "react-bootstrap";

const CLIENT_ID = "f6a9fe478d264238a1f75783008c50aa";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";
// const AUTH_URL =
//   "https://accounts.spotify.com/authorize?client_id=f6a9fe478d264238a1f75783008c50aa&response_type=token&redirect_uri=http://localhost:3000";

const Login = () => {
  return (
    <Container>
      <div className="loginButton">
        <a
          className="btn btn-lg"
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      </div>
    </Container>
  );
};

export default Login;
