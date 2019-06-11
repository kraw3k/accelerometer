import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactAccelerometer from "react-accelerometer";
import useSocket from "use-socket.io-client";

const SensorDevice = () => {
  const [socket] = useSocket("https://kraw3k.ct8.pl/", {
    autoConnect: true
  });

  return (
    <ReactAccelerometer>
      {position => {
        if (!position) {
          return (
            <div>
              <h2>Accelerometer isn't supported on this device</h2>
              <p>
                You can use this device as a
                <Link to={process.env.PUBLIC_URL + "/client"}>
                  <u>client part</u>
                </Link>
                of app
              </p>
            </div>
          );
        }
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
            <h5>
              <Link to={process.env.PUBLIC_URL + "/"}>
                <u>go back</u>
              </Link>
            </h5>
          </div>
        );
      }}
    </ReactAccelerometer>
  );
};
export default SensorDevice;
