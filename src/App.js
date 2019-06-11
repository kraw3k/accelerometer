import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ClientSocket, useSocket } from "use-socketio";
import Home from "./Home";
import SensorDevice from "./SensorDevice";
import ClientDevice from "./ClientDevice";

const App = () => (
  <ClientSocket url="https://kraw3k.ct8.pl/">
    <Router>
      <div>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/client"} component={ClientDevice} />
        <Route exact path={process.env.PUBLIC_URL + "/sensor"} component={SensorDevice} />
      </div>
    </Router>
  </ClientSocket>
);

export default App;
