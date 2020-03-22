import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Square = styled.div`
  height: 10vw;
  width: 10vw;
  background: rgb(
    ${props => props.position.x},
    ${props => props.position.y},
    ${props => props.position.z}
  );
  margin: 0 auto;
`;

const ClientDevice = ({ socket }) => {
  const [position, setPosition] = useState(null);

  useEffect(() => {
    socket.on("dataFromServer", data => {
      const { position } = JSON.parse(data);
      setPosition({
        x: Math.abs(position.x * 25),
        y: Math.abs(position.y * 25),
        z: Math.abs(position.z * 25)
      });
    });
  }, []);

  return position ? (
    <div>
      <Square position={position} />
      <h2>
        rgb({position.x}, {position.y}, {position.z})
      </h2>
    </div>
  ) : (
    <div>
      <h1>One more thing!</h1>
      <p>
        Now open this site in sensor mode on device with accelerometer and ...
      </p>
      <p>... let's the magic begin!</p>
    </div>
  );
};

export default ClientDevice;
