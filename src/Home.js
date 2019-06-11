import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const Home = () => {
  return (
    <Wrapper>
      <h2>Choose how to use this device</h2>
      <p>
        <Link to={process.env.PUBLIC_URL + "/sensor"}>Sensor device</Link>
      </p>
      <p>
        <Link to={process.env.PUBLIC_URL + "/client"}>Client device</Link>
      </p>
      <h5>
        <a href="https://kraw3k.github.io">kraw3k.github.io</a>
      </h5>
    </Wrapper>
  );
};
export default Home;
