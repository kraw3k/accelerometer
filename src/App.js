import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import useSocket from "use-socket.io-client";

import Home from "./Home";
import SensorDevice from "./SensorDevice";
import ClientDevice from "./ClientDevice";

const App = () => {
  const [socket] = useSocket("https://kraw3k.ct8.pl/");
  return (
    <Router>
      <div id="menu">
        <NavLink exact to="/" activeClassName="activeLink">
          Home
        </NavLink>
        <NavLink exact to="/sensor" activeClassName="activeLink">
          Sensor
        </NavLink>
        <NavLink exact to="/client" activeClassName="activeLink">
          Client
        </NavLink>
      </div>
      <div id="content">
        <Route exact path={`${process.env.PUBLIC_URL}/`}>
          <Home />
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/client`}>
          <ClientDevice socket={socket} />
        </Route>
        <Route exact path={`${process.env.PUBLIC_URL}/sensor`}>
          <SensorDevice socket={socket} />
        </Route>
      </div>
      <a id="websiteLink" href="https://kraw3k.github.io">
        kraw3k.github.io
      </a>
    </Router>
  );
};

export default App;
