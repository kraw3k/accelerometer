import React from "react";

const Home = () => {
  return (
    <div>
      <h1>About the project</h1>
      <p>This is a simple app to interchange data in realtime.</p>
      <p>
        The idea is to send some data from one device to another.
      </p>
      <h2>You need to use minimum two devices:</h2>
      <ul>
        <li>one of them should has accelerometer (it will send position data)</li>
        <li>another device to display received data</li>
      </ul>
      <h2>Used technologies</h2>
      <ul>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Socket.io</li>
      </ul>
    </div>
  );
};
export default Home;
