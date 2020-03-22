import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactAccelerometer from "react-accelerometer";

const SensorDevice = ({ socket }) => (
  <ReactAccelerometer>
    {position => {
      if (position) {
        socket.emit(
          "dataFromSensor",
          JSON.stringify({
            position: {
              x: Math.round(position.x),
              y: Math.round(position.y),
              z: Math.round(position.z)
            }
          })
        );
        return (
          <div>
            <ul style={{ textAlign: "left" }}>
              <li>x: {Math.round(position.x)}</li>
              <li>y: {Math.round(position.y)}</li>
              <li>z: {Math.round(position.z)}</li>
            </ul>
            <h3>
              <Link to={process.env.PUBLIC_URL + "/"}>
                <u>go back</u>
              </Link>
            </h3>
          </div>
        );
      }
      return (
        <div>
          <h1>Accelerometer isn't supported on this device</h1>
          <p>You can use this device as a client part of app</p>
        </div>
      );
    }}
  </ReactAccelerometer>
);
export default SensorDevice;
