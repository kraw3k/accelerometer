import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useSocket } from "use-socketio";
import styled, { ThemeProvider } from "styled-components";
// import { Motion, spring } from "react-motion";

const ClientDevice = () => {
  const [data, setData] = useState();
  const socket = useSocket("dataFromServer", data => setData(JSON.parse(data)));

  let theme = {
    x: data ? `${Math.abs(data.position.x * 25)}` : "255",
    y: data ? `${Math.abs(data.position.y * 25)}` : "255",
    z: data ? `${Math.abs(data.position.z * 25)}` : "255"
  };
  const Square = styled.ul`
    height: 10vw;
    width: 10vw;
    background: rgb(
      ${props => props.theme.x},
      ${props => props.theme.y},
      ${props => props.theme.z}
    );
    margin: 0 auto;
  `;

  return data ? (
    <ThemeProvider theme={theme}>
      <div>
        <Square />
        <p>
          rgb({theme.x}, {theme.y}, {theme.z})
        </p>
      </div>
    </ThemeProvider>
  ) : (
    <div>
      <p>
        Now open this site on device with accelerometer (smartphone for example)
        and let's the magic begin!
      </p>
      <h5>
        <Link to={process.env.PUBLIC_URL + "/"}>
          <u>go back</u>
        </Link>
      </h5>
    </div>
  );
};

export default ClientDevice;
